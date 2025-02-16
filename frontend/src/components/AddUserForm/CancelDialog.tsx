import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material'
import { CancelDialogProps } from './user.interface'

const CancelDialog: React.FC<CancelDialogProps> = ({
  open,
  onClose,
  onConfirmCancel,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Cancel</DialogTitle>
      <DialogContent>
        Are you sure you want to cancel? All changes will be lost.
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={onConfirmCancel} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CancelDialog
