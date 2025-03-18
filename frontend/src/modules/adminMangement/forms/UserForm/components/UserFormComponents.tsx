import React from 'react'
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { roles } from '../userForm.constats'
import { IUserForm } from '../UserForm'

interface IUserFormComponentsProps {
  handleSubmit: (e: React.FormEvent) => void
  formData: IUserForm
  setFormData: React.Dispatch<React.SetStateAction<IUserForm>>
  viewOnly: boolean
  handleCancel: () => void
}

export const UserFormComponents: React.FC<IUserFormComponentsProps> = ({
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
          label="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              email: e.target.value,
            }))
          }}
          required
          autoComplete="email"
          disabled={viewOnly}
        />

        <TextField
          fullWidth
          label="Password"
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              password: e.target.value,
            }))
          }}
          required
          autoComplete="new-password"
          disabled={viewOnly}
        />

        <FormControl fullWidth>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            name="role"
            value={formData.role}
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                role: e.target.value,
              }))
            }}
            required
            autoComplete="off"
            disabled={viewOnly}
          >
            {roles.map((role) => (
              <MenuItem key={role.value} value={role.value}>
                {role.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {formData.role === 'buyer' && (
          <>
            <TextField
              fullWidth
              label="Address"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => {
                setFormData((prevData) => ({
                  ...prevData,
                  address: e.target.value,
                }))
              }}
              required
              autoComplete="address"
              disabled={viewOnly}
            />
            <TextField
              fullWidth
              label="Phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                setFormData((prevData) => ({
                  ...prevData,
                  phone: e.target.value,
                }))
              }}
              required
              autoComplete="tel"
              disabled={viewOnly}
            />
          </>
        )}

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
