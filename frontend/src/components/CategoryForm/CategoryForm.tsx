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

import { initialFormData } from './formData.constants'
import CancelDialog from '../CancelDialog/CancelDialog'
import {
  createCategory,
  updateCategory,
} from '../../serviecs/categoriesService'
import { useStyles } from '../AddUserForm/UserForm.styles'

export const CategoryForm: React.FC = () => {
  const styles = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams<{ id: string }>()

  const categoryToEdit = location.state
  const isEditMode = Boolean(categoryToEdit)

  const { formData, handleChange } = useFormData(
    categoryToEdit || initialFormData
  )

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [openCancelDialog, setOpenCancelDialog] = useState(false)

  const handleCancel = () => setOpenCancelDialog(true)
  const handleConfirmCancel = () => navigate('/admin-dashboard/categories')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isEditMode) {
        await updateCategory(categoryToEdit.id, formData)
        setSuccess('Category updated successfully')
      } else {
        await createCategory(formData)
        setSuccess('Category created successfully')
      }
      setTimeout(() => navigate('/admin-dashboard/categories'), 1500)
    } catch {
      setError('Failed to save category')
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
