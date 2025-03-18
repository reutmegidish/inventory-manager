import axios from 'axios'
import { config } from '../../../config'

const API_BASE_URL = `${config.apiUrl}/store`

interface IFilter {
  searchQuery: string
  statusFilter: string
}

export const fetchStore = async ({ searchQuery, statusFilter }: IFilter) => {
  try {
    const params: Record<string, string | boolean> = {}
    const trimSearchQuery = searchQuery.trim()

    if (trimSearchQuery) {
      params.name = trimSearchQuery
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
    console.error('Error fetching Store:', error)
    throw new Error('Failed to fetch Store. Please try again later.')
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateStore = async (storeId: string, formData: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${storeId}`, formData)
    return response.data
  } catch (error) {
    console.error('Error updating store:', error)
    throw error
  }
}

interface IFormData {
  name?: string
  active: boolean
}

export const createStore = async (formData: IFormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, formData)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || 'Failed to create store'
      throw new Error(errorMessage)
    } else {
      throw new Error('An unknown error occurred')
    }
  }
}
