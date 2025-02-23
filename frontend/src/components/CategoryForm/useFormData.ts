import { useState } from 'react'
import { Category } from './category.interface'

export const useFormData = (initialData: Category) => {
  const [formData, setFormData] = useState(initialData)

  const handleChange =
    (field: string) =>
    (event: React.ChangeEvent<HTMLInputElement | { value: unknown }>) => {
      const value =
        event.target.type === 'checkbox'
          ? (event.target as HTMLInputElement).checked
          : event.target.value
      setFormData((prev) => ({ ...prev, [field]: value }))
    }

  return { formData, handleChange }
}
