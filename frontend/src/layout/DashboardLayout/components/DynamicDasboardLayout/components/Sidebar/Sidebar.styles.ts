import { Theme } from '@mui/material'

const DRAWER_WIDTH = 240

export const useStyles = () => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: DRAWER_WIDTH,
      boxSizing: 'border-box',
      marginTop: '64px',
      background:
        'linear-gradient(135deg, rgba(39, 41, 82, 0.95) 0%, rgba(45, 48, 95, 0.95) 100%)',
      backdropFilter: 'blur(8px)',
      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '4px 0 12px rgba(0, 0, 0, 0.1)',
    },
  },
  list: {
    padding: (theme: Theme) => theme.spacing(2, 0),
  },
  listItem: {
    margin: (theme: Theme) => theme.spacing(0.5, 2),
    borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px`,
    color: 'rgba(255, 255, 255, 0.9)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      transform: 'translateX(4px)',
    },
    '&.Mui-selected': {
      background:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)',
      color: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
      },
      '& .MuiListItemIcon-root': {
        color: 'white',
      },
    },
  },
  icon: {
    minWidth: '40px',
    color: 'rgba(255, 255, 255, 0.7)',
  },
})
