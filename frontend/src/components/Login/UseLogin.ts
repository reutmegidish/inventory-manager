import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navigateUserRole } from '../../utility/navigateUserRole'
import { loginUser } from './authService'

export interface ILoginFormData {
  email: string
  password: string
}

export const useLogin = () => {
  const [formData, setFormData] = useState<ILoginFormData>({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    setError('')
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await loginUser(formData)

      if (response.success) {
        const role = response.user.role
        localStorage.setItem('userRole', role)

        navigateUserRole(role, navigate)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  return {
    formData,
    loading,
    error,
    handleSubmit,
    handleChange,
  }
}
