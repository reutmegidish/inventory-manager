import { Theme } from '@mui/material'

export const useStyles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxHeight: '100vh',
    overflow: 'hidden',
    background:
      'linear-gradient(135deg, rgb(22, 17, 61) 0%, rgb(39, 41, 82) 100%)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
      pointerEvents: 'none',
    },
  },
  main: {
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    padding: (theme: Theme) => theme.spacing(3),
    marginTop: '64px',
    height: 'calc(100vh - 64px)',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
})
