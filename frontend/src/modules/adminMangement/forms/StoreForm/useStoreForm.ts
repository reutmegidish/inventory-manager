import { useState } from 'react'
import { IStoreForm } from './StoreForm'
import { createStore, updateStore } from '../../serviecs/storeService'
import { useNavigate } from 'react-router-dom'

interface IuseStoreFormProps {
  initFormData: IStoreForm
  isDetailPage: boolean
  isEditPage: boolean
  id: string | undefined
}

export const useStoreForm = ({
  initFormData,
  isEditPage,
  id,
}: IuseStoreFormProps) => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [openCancelDialog, setOpenCancelDialog] = useState(false)
  const [formData, setFormData] = useState<IStoreForm>(initFormData)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await (isEditPage && id
        ? updateStore(id, formData)
        : createStore(formData))

      setLoading(false)
      setSuccess('Store saved successfully')
      setTimeout(() => navigate('/admin-dashboard/store'), 1500)
    } catch (error) {
      setLoading(false)
      setError(error.message || 'Failed to create store')
    }
  }

  return {
    loading,
    error,
    success,
    openCancelDialog,
    setOpenCancelDialog,
    formData,
    setFormData,
    handleSubmit,
  }
}
