export const tableStyles = {
  tableWrapper: {
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
    borderRadius: 1,
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background:
        'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    },
  },

  headerCell: {
    backgroundColor: 'rgb(39, 41, 82)',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 600,
    padding: '16px',
    borderBottom: 'none',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
    letterSpacing: '0.5px',
    background:
      'linear-gradient(135deg, rgba(39, 41, 82, 0.95) 0%, rgba(45, 48, 95, 0.95) 100%)',
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
    '&:first-of-type': {
      borderTopLeftRadius: 4,
      pl: 3,
    },
    '&:last-of-type': {
      borderTopRightRadius: 4,
      pr: 3,
    },
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(45, 48, 95, 0.95) 0%, rgba(52, 55, 110, 0.95) 100%)',
    },
  },

  cell: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.875rem',
    fontWeight: 500,
    padding: '16px',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',
    backgroundColor: 'transparent',
  },

  row: {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:nth-of-type(odd)': {
      background:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
    },
    '&:nth-of-type(even)': {
      background:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%)',
    },
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
      transform: 'translateX(4px)',
    },
    '& td': {
      borderColor: 'rgba(255, 255, 255, 0.05)',
    },
  },

  sortLabel: {
    color: 'white !important',
    '&.Mui-active': {
      color: 'white !important',
    },
    '& .MuiTableSortLabel-icon': {
      color: 'white !important',
    },
  },

  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: 3,
    minHeight: 200,
  },

  loader: {
    color: 'white',
    opacity: 0.8,
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
  },

  chipBase: {
    height: '32px',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'all 0.2s',
    '& .MuiChip-icon': {
      color: 'inherit',
      fontSize: '1.1rem',
    },
    '& .MuiChip-label': {
      padding: '0 12px',
    },
  },

  roleChip: {
    background:
      'linear-gradient(135deg, rgba(39, 41, 82, 0.4) 0%, rgba(45, 48, 95, 0.4) 100%)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(39, 41, 82, 0.6) 0%, rgba(45, 48, 95, 0.6) 100%)',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  },

  statusChip: {
    active: {
      background:
        'linear-gradient(135deg, rgba(39, 41, 82, 0.4) 0%, rgba(45, 48, 95, 0.4) 100%)',
      '&:hover': {
        background:
          'linear-gradient(135deg, rgba(39, 41, 82, 0.6) 0%, rgba(45, 48, 95, 0.6) 100%)',
      },
    },
    inactive: {
      background:
        'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(220, 38, 38, 0.3) 100%)',
      '&:hover': {
        background:
          'linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(220, 38, 38, 0.4) 100%)',
      },
    },
    common: {
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },

  actionButton: {
    color: 'white',
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  },

  deactivateButton: {
    background:
      'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(220, 38, 38, 0.3) 100%)',
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(220, 38, 38, 0.4) 100%)',
    },
  },
}
