import { SelectChangeEvent } from '@mui/material'

export interface User {
  email: string
  password: string
  role: string
  address?: string
  phone?: string
  active: boolean
}

export interface RoleSelectProps {
  value: string
  onChange: (e: SelectChangeEvent<string>) => void
  required?: boolean
}

