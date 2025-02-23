import axios from 'axios'
import { config } from '../config'

const API_BASE_URL = `${config.apiUrl}/store`

interface IStore {
  id: string
  name: string
  adress: string
  active: boolean
}

export const fetchStore = async () => {
  try {
    const response = await axios.get(API_BASE_URL)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching Store:', error)
    throw new Error('Failed to fetch Store. Please try again later.')
  }
}

export const updateStore = async (storeId: string, formData: IStore) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${storeId}`, formData)
    return response.data
  } catch (error) {
    console.error('Error updating store:', error)
    throw error
  }
}

export const createStore = async (formData: IStore) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, formData)
    return response.data
  } catch (error) {
    console.error('Error create category:', error)
    throw error
  }
}
