import React from 'react'
import { Box, Alert, CircularProgress } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { CancelDialog, DashboardHeader } from '../../../../components'
import { PersonOutline as PersonIcon } from '@mui/icons-material'
import { UserFormComponents } from './components/UserFormComponents'
import { useUserForm } from './useUserForm'

export interface IUserData {
  _id?: string
  name: string
  email: string
  role: string
  active: boolean
  address?: string
  phone?: string
}

export interface IUserForm extends IUserData {
  password: string
}

export const UserForm: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()

  const isEditPage = location.pathname.includes('edit')
  const isDetailPage = location.pathname.includes('detail')

  const userData = location?.state as IUserData | undefined

  const initFormData = {
    _id: userData?._id || undefined,
    name: userData?.name || '',
    email: userData?.email || '',
    role: userData?.role || '',
    active: userData?.active ?? true,
    address: userData?.address || '',
    phone: userData?.phone || '',
    password: '',
  }

  const {
    loading,
    error,
    success,
    openCancelDialog,
    setOpenCancelDialog,
    formData,
    setFormData,
    handleSubmit,
  } = useUserForm({ initFormData, isDetailPage, isEditPage, id })

  const handleCancel = () => setOpenCancelDialog(true)
  const handleConfirmCancel = () => navigate('/admin-dashboard/users')

  return (
    <Box>
      <DashboardHeader
        dashboardHeaderTitle={
          isEditPage ? 'Edit User' : isDetailPage ? 'User Details' : 'Add User'
        }
        dashboardHeaderIcon={<PersonIcon />}
      />

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <UserFormComponents
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        viewOnly={isDetailPage}
        handleCancel={handleCancel}
      />
      <CancelDialog
        open={openCancelDialog}
        onClose={() => setOpenCancelDialog(false)}
        onConfirmCancel={handleConfirmCancel}
      />
    </Box>
  )
}
