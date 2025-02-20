export const headerStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    background:
      'linear-gradient(135deg, rgba(39, 41, 82, 0.98) 0%, rgba(45, 48, 95, 0.98) 100%)',
    p: 2.5,
    pb: 2,
    pt: 2,
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '1px',
      background:
        'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    },
  },

  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    position: 'relative',
    paddingBottom: '4px',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -6,
      left: 0,
      width: '60%',
      height: '2px',
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.15), transparent)',
    },
  },

  icon: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.25rem',
    fontWeight: 600,
    letterSpacing: '0.25px',
  },

  refreshButton: {
    minWidth: '36px',
    width: '36px',
    height: '36px',
    color: 'rgba(255, 255, 255, 0.7)',
    background: 'transparent',
    border: 'none',
    borderRadius: '6px',
    p: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.6s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.9)',
    },
    '&:active': {
      background: 'rgba(255, 255, 255, 0.15)',
      transform: 'scale(0.95)',
    },
  },

  refreshIcon: {
    fontSize: '1.25rem',
    transition: 'transform 0.2s ease',
    '.MuiIconButton-root:active &': {
      transform: 'rotate(180deg)',
    },
  },

  refreshText: {
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.1px',
    textTransform: 'none',
    color: 'rgba(255, 255, 255, 0.9)',
  },
}
