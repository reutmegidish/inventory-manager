import axios from 'axios'
import { config } from '../../../config'

const apiBaseUrl = config.apiUrl

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

    const response = await axios.get(`${apiBaseUrl}/user`, {
      params,
    })

    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users. Please try again later.')
  }
}
