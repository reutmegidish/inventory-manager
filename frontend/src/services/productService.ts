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
