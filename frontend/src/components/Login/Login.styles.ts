import { SxProps, Theme } from '@mui/material'

export const loginStyles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  } as SxProps<Theme>,

  paper: {
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
  } as SxProps<Theme>,

  titleContainer: {
    mb: 4,
    textAlign: 'center',
  } as SxProps<Theme>,

  title: {
    fontWeight: 600,
    color: 'primary.main',
    mb: 1,
  } as SxProps<Theme>,

  form: {
    width: '100%',
    gap: 2,
  } as SxProps<Theme>,

  textField: {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'primary.main',
      },
    },
  } as SxProps<Theme>,

  errorAlert: {
    mt: 1,
    '& .MuiAlert-icon': {
      color: 'error.main',
    },
  } as SxProps<Theme>,

  submitButton: {
    mt: 2,
    mb: 2,
    py: 1.5,
    textTransform: 'none',
    fontSize: '1.1rem',
    borderRadius: 2,
    boxShadow: 2,
    '&:hover': {
      boxShadow: 4,
    },
  } as SxProps<Theme>,
}
