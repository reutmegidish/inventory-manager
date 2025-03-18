import React from 'react'
import { Box, Alert, CircularProgress } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { CancelDialog, DashboardHeader } from '../../../../components'
import { Category as CategoryIcon } from '@mui/icons-material'
import { CategoriesFormComponents } from './components/CategoriesFormComponents'
import { useCategoriesForm } from './useCategoriesForm'

export interface ICategoriesData {
  _id?: string
  name: string
  active: boolean
}

export interface ICategoriesForm {
  name: string
  active: boolean
}

export const CategoriesForm: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()

  const isEditPage = location.pathname.includes('edit')
  const isDetailPage = location.pathname.includes('detail')

  const userData = location?.state as ICategoriesData | undefined

  const initFormData = {
    _id: userData?._id || undefined,
    name: userData?.name || '',
    active: userData?.active ?? true,
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
  } = useCategoriesForm({ initFormData, isDetailPage, isEditPage, id })

  const handleCancel = () => setOpenCancelDialog(true)
  const handleConfirmCancel = () => navigate('/admin-dashboard/categories')

  return (
    <Box>
      <DashboardHeader
        dashboardHeaderTitle={
          isEditPage
            ? 'Edit Categories'
            : isDetailPage
            ? 'Categories Details'
            : 'Add Category'
        }
        dashboardHeaderIcon={<CategoryIcon />}
      />

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <CategoriesFormComponents
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
