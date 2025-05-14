const commonGradients = {
  backgroundPrimary:
    'linear-gradient(135deg, rgb(22, 17, 61) 0%, rgb(39, 41, 82) 100%)',
  backgroundSecondary:
    'linear-gradient(135deg, rgba(39, 41, 82, 0.7) 0%, rgba(22, 17, 61, 0.9) 100%)',
  headerGradient:
    'linear-gradient(135deg, rgb(39, 41, 82) 0%, rgb(45, 48, 95) 100%)',
  activeButtonGradient:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  deactiveButtonGradient:
    'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(220, 38, 38, 0.3) 100%)',
  hoverActiveGradient:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)',
  hoverDeactiveGradient:
    'linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(220, 38, 38, 0.4) 100%)',
}

const commonBorders = {
  borderLight: '1px solid rgba(255, 255, 255, 0.1)',
}

const commonTransitions = {
  default: 'all 0.2s',
  smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}

const chipBase = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  padding: '4px 8px',
  borderRadius: '16px',
  width: 'fit-content',
  minWidth: 'auto',
}

export const tableStyles = {
  container: {
    minHeight: '100vh',
    background: commonGradients.backgroundPrimary,
    position: 'relative',
    pt: 2,
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
  paper: {
    p: 4,
    borderRadius: 2,
    background: commonGradients.backgroundSecondary,
    backdropFilter: 'blur(20px)',
    color: 'white',
    boxShadow: `
      0 8px 32px rgba(22, 17, 61, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1)
    `,
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        'radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
      pointerEvents: 'none',
    },
  },
  dataGrid: {
    border: commonBorders.borderLight,
    color: 'white',
    '&.MuiDataGrid-root': {
      '& .MuiDataGrid-container--top [role=row], & .MuiDataGrid-container--bottom [role=row]':
        {
          background: 'transparent !important',
          backgroundColor: commonGradients.headerGradient,
        },
    },
    '& .MuiDataGrid-columnHeaders': {
      color: 'white',
      fontSize: '0.875rem',
      fontWeight: 600,
      borderBottom: 'none',
      transition: 'all 0.2s',
      whiteSpace: 'nowrap',
      letterSpacing: '0.5px',
    },
    '& .MuiDataGrid-columnHeader': {
      background:
        'linear-gradient(135deg, rgba(39, 41, 82, 0.95) 0%, rgba(45, 48, 95, 0.95) 100%)',
      borderRight: '1px solid rgba(255, 255, 255, 0.05)',
      '&:first-of-type': {
        pl: 3,
      },
      '&:last-of-type': {
        pr: 3,
        borderRight: 'none',
      },
      '&:hover': {
        background:
          'linear-gradient(135deg, rgba(45, 48, 95, 0.95) 0%, rgba(52, 55, 110, 0.95) 100%)',
      },
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      color: 'white',
      fontSize: '0.875rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
    '& .MuiDataGrid-cell': {
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '0.875rem',
      fontWeight: 500,
      padding: '16px',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s',
      backgroundColor: 'transparent',
      '& .role-content': {
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 500,
        '& .role-icon': {
          color: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          '& svg': {
            fontSize: '1.1rem',
          },
        },
      },
    },
    '& .MuiDataGrid-row': {
      transition: 'background-color 0.3s',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
      '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
      },
      '&:nth-of-type(even)': {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
      },
    },
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 500,
  },
  roleIconWrapper: {
    color: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    '& svg': {
      fontSize: '1.1rem',
    },
  },
  roleChip: {
    ...chipBase,
    background:
      'linear-gradient(135deg, rgba(39, 41, 82, 0.4) 0%, rgba(45, 48, 95, 0.4) 100%)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '& .MuiChip-icon': {
      color: 'white',
      fontSize: '1.1rem',
    },
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(39, 41, 82, 0.6) 0%, rgba(45, 48, 95, 0.6) 100%)',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  },
  actionButton: {
    marginBottom: '8px',
    color: 'white',
    transition: commonTransitions.smooth,
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  },

  statusButton: (isActive: boolean) => ({
    ...chipBase,
    background: isActive
      ? commonGradients.activeButtonGradient
      : commonGradients.deactiveButtonGradient,
    border: commonBorders.borderLight,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: commonTransitions.smooth,
    '&:hover': {
      background: isActive
        ? commonGradients.hoverActiveGradient
        : commonGradients.hoverDeactiveGradient,
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  }),
}
