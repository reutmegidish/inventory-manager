export const headerStyles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 4,
    background:
      'linear-gradient(135deg, rgb(39, 41, 82) 0%, rgb(45, 48, 95) 100%)',
    mx: -4,
    mt: -4,
    px: 4,
    py: 3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background:
        'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    },
  },
  title: {
    fontWeight: 600,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    letterSpacing: '0.5px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -4,
      left: 0,
      width: '40%',
      height: '2px',
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.5), transparent)',
    },
  },
  titleIcon: {
    fontSize: 32,
    color: 'white',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  actionButton: {
    color: 'white',
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)',
      transform: 'translateY(-2px)',
    },
  },
  refreshButton: {
    color: 'white',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.1)',
      transform: 'scale(0)',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      transform: 'rotate(180deg)',
      '&::before': {
        transform: 'scale(1)',
      },
    },
  },
}
