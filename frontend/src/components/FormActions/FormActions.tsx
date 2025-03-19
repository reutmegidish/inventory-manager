import { Box, Button, CircularProgress } from '@mui/material'
import React from 'react'

interface FormActionsProps {
  handleCancel?: () => void
  handleSubmit?: (e: React.FormEvent) => void
  isSubmit?: boolean
}
export const FormActions: React.FC<FormActionsProps> = ({
  handleCancel,
  isSubmit,
}) => {
  console.log(isSubmit)
  return (
    <Box>
      {isSubmit ? (
        <Box display="flex" alignItems="center">
          <CircularProgress size={24} />
          Submitting...
        </Box>
      ) : (
        <>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </>
      )}
    </Box>
  )
}
