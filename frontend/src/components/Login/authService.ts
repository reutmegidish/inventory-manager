// services/authService.ts
import axios from 'axios'
import { config } from '../../config'
import { ILoginFormData } from './UseLogin'

const API_URL = `${config.apiUrl}/user/login`

export const loginUser = async (formData: ILoginFormData) => {
  try {
    const response = await axios.post(API_URL, formData)
    return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.response) {
      throw new Error(err.response.data.message || 'An unknown error occurred')
    } else if (err.request) {
      throw new Error(
        'No response from the server. Please check your network connection.'
      )
    } else {
      throw new Error('An unknown error occurred: ' + err.message)
    }
  }
}
