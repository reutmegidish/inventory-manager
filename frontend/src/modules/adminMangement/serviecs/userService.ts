import axios from 'axios'
import { config } from '../../../config'

const API_BASE_URL = `${config.apiUrl}/user`

interface Filter {
  searchQuery: string
  roleFilter: string
  statusFilter: string
}

export const fetchUsers = async ({
  searchQuery,
  roleFilter,
  statusFilter,
}: Filter) => {
  try {
    const params: Record<string, string | boolean> = {}
    const trimSearchQuery = searchQuery.trim()

    if (trimSearchQuery) {
      params.name = trimSearchQuery
    }
    if (roleFilter && roleFilter !== 'all') {
      params.role = roleFilter
    }
    if (statusFilter && statusFilter !== 'all') {
      {
        params.active = statusFilter === 'active' ? true : false
      }
    }

    const response = await axios.get(API_BASE_URL, {
      params,
    })

    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users. Please try again later.')
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateUser = async (userId: string, formData: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${userId}`, formData)
    return response.data
  } catch (error) {
    console.error('Error updating user:', error)
    throw error
  }
}

interface IFormData {
  name?: string
  email: string
  role: string
  active: boolean
  address?: string
  phone?: string
  password: string
}

export const createUser = async (formData: IFormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, formData)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || 'Failed to create user'
      throw new Error(errorMessage)
    } else {
      throw new Error('An unknown error occurred')
    }
  }
}
