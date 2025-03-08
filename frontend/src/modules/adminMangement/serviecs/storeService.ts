import axios from 'axios'
import { config } from '../../../config'

const apiBaseUrl = config.apiUrl

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

    const response = await axios.get(`${apiBaseUrl}/store`, {
      params,
    })

    return response.data
  } catch (error) {
    console.error('Error fetching Store:', error)
    throw new Error('Failed to fetch Store. Please try again later.')
  }
}
