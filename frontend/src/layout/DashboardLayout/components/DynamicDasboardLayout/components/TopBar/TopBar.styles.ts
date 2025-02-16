import { Theme } from '@mui/material'

export const useStyles = () => ({
  appBar: {
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
    background:
      'linear-gradient(135deg, rgba(39, 41, 82, 0.95) 0%, rgba(45, 48, 95, 0.95) 100%)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    gap: (theme: Theme) => theme.spacing(2),
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: (theme: Theme) => theme.spacing(2),
  },
  greeting: {
    color: 'rgba(255, 255, 255, 0.9)',
    marginRight: (theme: Theme) => theme.spacing(1),
  },
  logoutButton: {
    color: 'white',
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  },
})
