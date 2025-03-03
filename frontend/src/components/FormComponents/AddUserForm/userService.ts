import axios from 'axios'
import { User } from './user.interface'
import { config } from '../../../config'

const API_BASE_URL = `${config.apiUrl}/user`

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

export const createUser = async (formData: User) => {
  const response = await axios.post(`${API_BASE_URL}/create`, formData)
  return response.data
}
