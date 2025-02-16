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
import { useLocation, useNavigate } from 'react-router-dom'
import { useStyles } from './AddUserForm.styles'
import { useFormData } from './useFormData'
import { createUser, updateUser } from './userService'
import RoleSelect from './RoleSelect'
import { initialFormData } from './formData.constants'
import CancelDialog from './CancelDialog'

export const AddUserForm: React.FC = () => {
  const styles = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  const userToEdit = location.state?.user
  const isEditMode = Boolean(userToEdit)

  const { formData, handleChange, showBuyerFields } = useFormData(
    userToEdit || initialFormData
  )

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [openCancelDialog, setOpenCancelDialog] = useState(false)

  const handleCancel = () => setOpenCancelDialog(true)
  const handleConfirmCancel = () => navigate('/admin-dashboard/users')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isEditMode) {
        await updateUser(userToEdit._id, formData)
        setSuccess('User updated successfully')
      } else {
        console.log('formData: ', formData)
        await createUser(formData)
        setSuccess('User created successfully')
        setTimeout(() => navigate('/admin-dashboard/users'), 1500)
      }
    } catch {
      setError('Failed to create user:')
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
            label="Email"
            value={formData.email}
            onChange={handleChange('email')}
            sx={styles.textField}
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange('password')}
            sx={styles.textField}
            required
          />
          <RoleSelect
            value={formData.role}
            onChange={handleChange('role')}
            required
          />

          {showBuyerFields && (
            <>
              <TextField
                fullWidth
                label="Address"
                value={formData.address}
                onChange={handleChange('address')}
                sx={styles.textField}
                required
              />
              <TextField
                fullWidth
                label="Phone"
                value={formData.phone}
                onChange={handleChange('phone')}
                sx={styles.textField}
                required
              />
            </>
          )}

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
