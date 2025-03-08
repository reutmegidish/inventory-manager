import axios from 'axios'
import { config } from '../../../config'

const apiBaseUrl = config.apiUrl

interface Filter {
  searchQuery: string

  statusFilter: string
}

export const fetchCategories = async ({
  searchQuery,
  statusFilter,
}: Filter) => {
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

    const response = await axios.get(`${apiBaseUrl}/category`, {
      params,
    })

    return response.data
  } catch (error) {
    console.error('Error fetching Categories:', error)
    throw new Error('Failed to fetch Categories. Please try again later.')
  }
}
