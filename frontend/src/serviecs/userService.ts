import axios from 'axios'
import { config } from '../config'

const apiBaseUrl = config.apiUrl

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/user/`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users. Please try again later.')
  }
}
