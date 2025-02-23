import axios from 'axios'
import { config } from '../config'

const API_BASE_URL = `${config.apiUrl}/category`

export interface Category {
  _id?: string
  name: string
  active: boolean
}

export const fetchCategories = async () => {
  try {
    const response = await axios.get(API_BASE_URL)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching Categories:', error)
    throw new Error('Failed to fetch Categories. Please try again later.')
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateCategory = async (categoryId: string, formData: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${categoryId}`, formData)
    return response.data
  } catch (error) {
    console.error('Error updating category:', error)
    throw error
  }
}

export const createCategory = async (formData: Category) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, formData)
    return response.data
  } catch (error) {
    console.error('Error create category:', error)
    throw error
  }
}
