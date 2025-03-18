import React from 'react'
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  FormControl,
} from '@mui/material'
import { IStoreForm } from '../StoreForm'

interface IStoreFormComponentsProps {
  handleSubmit: (e: React.FormEvent) => void
  formData: IStoreForm
  setFormData: React.Dispatch<React.SetStateAction<IStoreForm>>
  viewOnly: boolean
  handleCancel: () => void
}

export const StoreFormComponents: React.FC<IStoreFormComponentsProps> = ({
  handleSubmit,
  formData,
  setFormData,
  viewOnly,
  handleCancel,
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

        <Box>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={viewOnly}>
            Save
          </Button>
        </Box>
      </FormControl>
    </>
  )
}
