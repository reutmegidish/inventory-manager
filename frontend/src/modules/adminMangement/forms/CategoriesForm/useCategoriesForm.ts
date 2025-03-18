import { useState } from 'react'
import { ICategoriesForm } from './CategoriesForm'
import {
  createCategory,
  updateCategory,
} from '../../serviecs/categoriesService'
import { useNavigate } from 'react-router-dom'

interface IuseCategoriesFormProps {
  initFormData: ICategoriesForm
  isDetailPage: boolean
  isEditPage: boolean
  id: string | undefined
}

export const useCategoriesForm = ({
  initFormData,
  isEditPage,
  id,
}: IuseCategoriesFormProps) => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [openCancelDialog, setOpenCancelDialog] = useState(false)
  const [formData, setFormData] = useState<ICategoriesForm>(initFormData)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await (isEditPage && id
        ? updateCategory(id, formData)
        : createCategory(formData))

      setLoading(false)
      setSuccess('Categories saved successfully')
      setTimeout(() => navigate('/admin-dashboard/categories'), 1500)
    } catch (error) {
      setLoading(false)
      setError(error.message || 'Failed to create categories')
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
