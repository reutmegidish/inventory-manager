import axios from 'axios'
import { config } from '../config'
import { IProductFormData } from '../modules/StoreManagement/forms/useProductFormComponent'

const API_BASE_URL = `${config.apiUrl}/product`

export const createProduct = async (formData: IProductFormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, formData)
    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Error adding product. Please try again.'
    )
  }
}

interface Filter {
  searchQuery: string
  roleFilter: string
  statusFilter: string
}

export const fetchProducts = async ({
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
