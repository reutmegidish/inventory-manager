import React from 'react'
import { Box, Alert, CircularProgress } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { CancelDialog, DashboardHeader } from '../../../../components'
import { Store as StoreIcon } from '@mui/icons-material'
import { StoreFormComponents } from './components/StoreFormComponents'
import { useStoreForm } from './useStoreForm'

export interface IStoreData {
  _id?: string
  name: string
  active: boolean
}

export interface IStoreForm {
  _id?: string
  name: string
  active: boolean
}

export const StoreForm: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()

  const isEditPage = location.pathname.includes('edit')
  const isDetailPage = location.pathname.includes('detail')

  const storeData = location?.state as IStoreData | undefined

  const initFormData = {
    _id: storeData?._id || undefined,
    name: storeData?.name || '',
    active: storeData?.active ?? true,
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
    isSubmit,
    setIsSubmit,
  } = useStoreForm({ initFormData, isDetailPage, isEditPage, id })

  const handleCancel = () => setOpenCancelDialog(true)
  const handleConfirmCancel = () => navigate('/admin-dashboard/store')

  return (
    <Box>
      <DashboardHeader
        dashboardHeaderTitle={
          isEditPage
            ? 'Edit Store'
            : isDetailPage
            ? 'Store Details'
            : 'Add Store'
        }
        dashboardHeaderIcon={<StoreIcon />}
      />

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <StoreFormComponents
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        viewOnly={isDetailPage}
        handleCancel={handleCancel}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
      />
      <CancelDialog
        open={openCancelDialog}
        onClose={() => setOpenCancelDialog(false)}
        onConfirmCancel={handleConfirmCancel}
      />
    </Box>
  )
}
