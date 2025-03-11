import React, { useEffect, useState } from 'react'
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { CancelDialog, DashboardHeader } from '../../../../components'
import { createUser, updateUser } from '../../serviecs/userService'
import { roles } from './userForm.constats'
import { PersonOutline as PersonIcon } from '@mui/icons-material'

interface IUserData {
  _id?: string
  name: string
  email: string
  role: string
  active: boolean
  address?: string
  phone?: string
}

interface IUserForm extends IUserData {
  password: string
}

export const UserForm: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()

  const userData = location?.state as IUserData | undefined
  console.log(userData)

  const isEditPage = location.pathname.includes('edit')
  const isDetailPage = location.pathname.includes('detail')

  const [viewOnly, setViewOnly] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [openCancelDialog, setOpenCancelDialog] = useState(false)

  const [formData, setFormData] = useState<IUserForm>({
    _id: userData?._id || undefined,
    name: userData?.name || '',
    email: userData?.email || '',
    role: userData?.role || '',
    active: userData?.active ?? true,
    address: userData?.address || '',
    phone: userData?.phone || '',
    password: '',
  })

  useEffect(() => {
    if (isDetailPage) {
      setViewOnly(true)
    }
  }, [isDetailPage])

  const handleCancel = () => setOpenCancelDialog(true)
  const handleConfirmCancel = () => navigate('/admin-dashboard/users')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await (isEditPage && id ? updateUser(id, formData) : createUser(formData))

      setLoading(false)
      setSuccess('User saved successfully')
      setTimeout(() => navigate('/admin-dashboard/users'), 1500)
    } catch (error) {
      setLoading(false)
      setError(error.message || 'Failed to create user')
    }
  }

  return (
    <Box>
      <Box>
        <DashboardHeader
          dashboardHeaderTitle={
            isEditPage
              ? 'Edit User'
              : isDetailPage
              ? 'User Details'
              : 'Add User'
          }
          dashboardHeaderIcon={<PersonIcon />}
        />
        {loading && <CircularProgress />}
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }}
            required
            autoComplete="email"
            disabled={viewOnly}
          />

          <TextField
            fullWidth
            label="Password"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }}
            required
            autoComplete="new-password"
            disabled={viewOnly}
          />

          <FormControl fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              name="role"
              value={formData.role}
              onChange={(e) => {
                setFormData((prevData) => ({
                  ...prevData,
                  role: e.target.value,
                }))
              }}
              required
              autoComplete="off"
              disabled={viewOnly}
            >
              {roles.map((role) => (
                <MenuItem key={role.value} value={role.value}>
                  {role.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {formData.role === 'buyer' && (
            <>
              <TextField
                fullWidth
                label="Address"
                id="address"
                name="address"
                value={formData.address}
                onChange={(e) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    address: e.target.value,
                  }))
                }}
                required
                autoComplete="address"
                disabled={viewOnly}
              />
              <TextField
                fullWidth
                label="Phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    phone: e.target.value,
                  }))
                }}
                required
                autoComplete="tel"
                disabled={viewOnly}
              />
            </>
          )}

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.active}
                onChange={(e) =>
                  setFormData({ ...formData, active: e.target.checked })
                }
                id="active-checkbox"
                name="active"
              />
            }
            label="Active"
            disabled={viewOnly}
          />

          <Box>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" disabled={viewOnly}>
              Save
            </Button>
          </Box>
        </form>
      </Box>
      <CancelDialog
        open={openCancelDialog}
        onClose={() => setOpenCancelDialog(false)}
        onConfirmCancel={handleConfirmCancel}
      />
    </Box>
  )
}
