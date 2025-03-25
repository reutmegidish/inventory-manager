import { useEffect, useState } from 'react'
import { IStoreForm } from './StoreForm'
import { useNavigate } from 'react-router-dom'
import { createStore, updateStore } from '../../../../services'

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
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  useEffect(() => {
    const updateFormData = async () => {
      if (!isSubmit) {
        return
      }

      try {
        await (isEditPage && id
          ? updateStore(id, formData)
          : createStore(formData))

        setLoading(false)
        setSuccess('Store saved successfully')
        navigate('/admin-dashboard/store')
      } catch (error) {
        setError(error.message || 'Failed to create store')
      } finally {
        setIsSubmit(false)
        setLoading(false)
      }
    }
    updateFormData()
  }, [isSubmit])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmit(true)
    setLoading(true)
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
    isSubmit,
    setIsSubmit,
  }
}
