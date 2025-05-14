import { SxProps, Theme } from '@mui/material/styles'
import {
  commonBorders,
  commonColors,
  commonEffects,
  commonGradients,
  commonShadows,
  commonTypography,
} from '../../../theme/sharedStyles'

export const dataTableStyles = {
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
  } as SxProps<Theme>,

  paper: {
    p: 4,
    borderRadius: 2,
    backdropFilter: commonEffects.glass.backdropFilter,
    background: commonEffects.glass.glassBackground,
    color: commonColors.white,
    boxShadow: `${commonShadows.large}, 0 0 0 1px ${commonColors.whiteLight}`,
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
  } as SxProps<Theme>,

  dataGrid: {
    border: commonBorders.borderLight,
    color: commonColors.white,
    '&.MuiDataGrid-root': {
      '& .MuiDataGrid-container--top [role=row], & .MuiDataGrid-container--bottom [role=row]':
        {
          background: 'transparent !important',
          backgroundColor: commonGradients.headerGradient,
        },
    },
    '& .MuiDataGrid-columnHeaders': {
      color: commonColors.white,
      fontSize: commonTypography.fontSize.small,
      fontWeight: commonTypography.fontWeight.semiBold,
      borderBottom: 'none',
      transition: 'all 0.2s',
      whiteSpace: 'nowrap',
      letterSpacing: '0.5px',
    },
    '& .MuiDataGrid-columnHeader': {
      background: commonGradients.headerGradient,
      borderRight: commonBorders.borderLight,
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
      color: commonColors.white,
      fontSize: commonTypography.fontSize.small,
      fontWeight: commonTypography.fontWeight.semiBold,
      letterSpacing: '0.5px',
    },
    '& .MuiDataGrid-cell': {
      color: commonColors.white,
      fontSize: commonTypography.fontSize.small,
      fontWeight: commonTypography.fontWeight.medium,
      padding: '16px',
      borderColor: commonColors.whiteLight,
      whiteSpace: 'nowrap',
      transition: 'all 0.2s',
      backgroundColor: 'transparent',
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
  } as SxProps<Theme>,

  nameCell: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    color: commonColors.white,
    fontWeight: commonTypography.fontWeight.medium,
  } as SxProps<Theme>,

  roleIconWrapper: {
    color: commonColors.white,
    display: 'flex',
    '& svg': {
      fontSize: commonTypography.fontSize.large,
    },
  } as SxProps<Theme>,

  roleChip: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    padding: '4px 8px',
    borderRadius: '16px',
    background:
      'linear-gradient(135deg, rgba(39, 41, 82, 0.4) 0%, rgba(45, 48, 95, 0.4) 100%)',
    color: commonColors.white,
    border: commonBorders.borderLight,
    boxShadow: commonShadows.small,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '& .MuiChip-icon': {
      color: commonColors.white,
      fontSize: commonTypography.fontSize.large,
    },
    '&:hover': {
      background:
        'linear-gradient(135deg, rgba(39, 41, 82, 0.6) 0%, rgba(45, 48, 95, 0.6) 100%)',
      ...commonEffects.hover,
      boxShadow: commonShadows.medium,
    },
  } as SxProps<Theme>,

  actionButton: {
    color: commonColors.white,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      ...commonEffects.hover,
      boxShadow: commonShadows.medium,
    },
  } as SxProps<Theme>,

  statusButton: (isActive: boolean) =>
    ({
      background: isActive
        ? commonGradients.activeButtonGradient
        : commonGradients.deactiveButtonGradient,
      border: commonBorders.borderLight,
      boxShadow: commonShadows.small,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        background: isActive
          ? commonGradients.hoverActiveGradient
          : commonGradients.hoverDeactiveGradient,
        ...commonEffects.hover,
        boxShadow: commonShadows.medium,
      },
    } as SxProps<Theme>),
}
