import { Theme } from '@mui/material'

export const useStyles = () => ({
  container: {
    padding: (theme: Theme) => theme.spacing(3),
  },
  paper: {
    background:
      'linear-gradient(135deg, rgba(39, 41, 82, 0.95) 0%, rgba(45, 48, 95, 0.95) 100%)',
    backdropFilter: 'blur(8px)',
    borderRadius: 2,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: (theme: Theme) => theme.spacing(4),
  },
  textField: {
    marginBottom: (theme: Theme) => theme.spacing(3),
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    '& .MuiSelect-icon': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
  checkbox: {
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: (theme: Theme) => theme.spacing(3),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: (theme: Theme) => theme.spacing(2),
  },
  cancelButton: {
    color: 'white',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
  saveButton: {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    color: 'white',
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)',
    },
  },
  alert: {
    marginBottom: (theme: Theme) => theme.spacing(3),
  },
})


