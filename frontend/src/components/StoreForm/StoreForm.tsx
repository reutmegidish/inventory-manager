import React, { useState } from 'react'
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Alert,
  Paper,
} from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useFormData } from './useFormData'
import { createStore, updateStore } from './storeService'
import { initialFormData } from './formData.constants'
import { useStyles } from '../AddUserForm/UserForm.styles' // משתמש באותו עיצוב
import CancelDialog from '../CancelDialog/CancelDialog'

export const StoreForm: React.FC = () => {
  const styles = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams<{ id: string }>()

  const storeToEdit = location.state
  const isEditMode = Boolean(storeToEdit)

  const { formData, handleChange } = useFormData(storeToEdit || initialFormData)

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [openCancelDialog, setOpenCancelDialog] = useState(false)

  const handleCancel = () => setOpenCancelDialog(true)
  const handleConfirmCancel = () => navigate('/admin-dashboard/stores')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isEditMode) {
        await updateStore(storeToEdit._id, formData)
        setSuccess('Store updated successfully')
      } else {
        await createStore(formData)
        setSuccess('Store created successfully')
      }
      setTimeout(() => navigate('/admin-dashboard/stores'), 1500)
    } catch {
      setError('Failed to save store')
    }
  }

  return (
    <Box sx={styles.container}>
      <Paper elevation={0} sx={styles.paper}>
        {error && (
          <Alert severity="error" sx={styles.alert}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={styles.alert}>
            {success}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={formData.name}
            onChange={handleChange('name')}
            sx={styles.textField}
            required
          />

          <TextField
            fullWidth
            label="Address"
            value={formData.address}
            onChange={handleChange('address')}
            sx={styles.textField}
            required
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.active}
                onChange={handleChange('active')}
              />
            }
            label="Active"
            sx={styles.checkbox}
          />

          <Box sx={styles.buttonContainer}>
            <Button
              variant="outlined"
              onClick={handleCancel}
              sx={styles.cancelButton}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" sx={styles.saveButton}>
              Save
            </Button>
          </Box>
        </form>
      </Paper>
      <CancelDialog
        open={openCancelDialog}
        onClose={() => setOpenCancelDialog(false)}
        onConfirmCancel={handleConfirmCancel}
      />
    </Box>
  )
}
