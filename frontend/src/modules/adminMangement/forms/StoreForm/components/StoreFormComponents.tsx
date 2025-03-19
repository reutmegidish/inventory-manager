import React from 'react'
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
} from '@mui/material'
import { IStoreForm } from '../StoreForm'
import { FormActions } from '../../../../../components'

interface IStoreFormComponentsProps {
  handleSubmit: (e: React.FormEvent) => void
  formData: IStoreForm
  setFormData: React.Dispatch<React.SetStateAction<IStoreForm>>
  viewOnly: boolean
  handleCancel: () => void
  isSubmit: boolean
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

export const StoreFormComponents: React.FC<IStoreFormComponentsProps> = ({
  handleSubmit,
  formData,
  setFormData,
  viewOnly,
  handleCancel,
  isSubmit,
}) => {
  return (
    <>
      <FormControl component="form" onSubmit={handleSubmit} fullWidth>
        <TextField
          fullWidth
          label="Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              name: e.target.value,
            }))
          }}
          required
          autoComplete="name"
          disabled={viewOnly}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.active}
              onChange={(e) =>
                setFormData({ ...formData, active: e.target.checked })
              }
              id="active-checkbox"
              name="active"
            />
          }
          label="Active"
          disabled={viewOnly}
        />

        <FormActions
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
          isSubmit={isSubmit}
        />
      </FormControl>
    </>
  )
}
