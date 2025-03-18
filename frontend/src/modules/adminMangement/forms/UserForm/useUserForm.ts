import { useState } from 'react'
import { IUserForm } from './UserForm'
import { createUser, updateUser } from '../../serviecs/userService'
import { useNavigate } from 'react-router-dom'

interface IuseUserFormProps {
  initFormData: IUserForm
  isDetailPage: boolean
  isEditPage: boolean
  id: string | undefined
}

export const useUserForm = ({
  initFormData,
  isEditPage,
  id,
}: IuseUserFormProps) => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [openCancelDialog, setOpenCancelDialog] = useState(false)
  const [formData, setFormData] = useState<IUserForm>(initFormData)

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
