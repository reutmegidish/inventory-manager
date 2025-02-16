import { useState } from 'react'
import { User } from './user.interface'
import { SelectChangeEvent } from '@mui/material'

export const useFormData = (initialData: User) => {
  const [formData, setFormData] = useState(initialData)
  const [showBuyerFields, setShowBuyerFields] = useState(false)

  const handleChange =
    (field: string) =>
    (
      event:
        | React.ChangeEvent<HTMLInputElement | { value: unknown }>
        | SelectChangeEvent<string>
    ) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }))
      if (field === 'role') {
        setShowBuyerFields(event.target.value === 'buyer')
      }
    }

  return { formData, handleChange, showBuyerFields }
}
