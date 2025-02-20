import axios from 'axios'
import { config } from '../config'

const apiBaseUrl = config.apiUrl

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/category`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching Categories:', error)
    throw new Error('Failed to fetch Categories. Please try again later.')
  }
}
