import { SxProps, Theme } from '@mui/material/styles'
import {
  commonBorders,
  commonColors,
  commonEffects,
  commonGradients,
  commonShadows,
  commonTypography,
} from '../../../theme/sharedStyles'

export const dataTableFiltersStyles = {
  container: {
    display: 'flex',
    gap: 2,
    mb: 3,
    p: 2,
    borderRadius: 2,
    backdropFilter: commonEffects.glass.backdropFilter,
    background: commonEffects.glass.glassBackground,
    boxShadow: commonShadows.medium,
  } as SxProps<Theme>,

  searchField: {
    flex: 1,
    '& .MuiOutlinedInput-root': {
      color: commonColors.white,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: 2,
      '& fieldset': {
        borderColor: commonColors.whiteLight,
      },
      '&:hover fieldset': {
        borderColor: commonColors.white,
      },
      '&.Mui-focused fieldset': {
        borderColor: commonColors.white,
      },
    },
    '& .MuiInputLabel-root': {
      color: commonColors.white,
    },
    '& .MuiInputAdornment-root': {
      color: commonColors.white,
    },
  } as SxProps<Theme>,

  filterSelect: {
    minWidth: 200,
    '& .MuiOutlinedInput-root': {
      color: commonColors.white,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: 2,
      '& fieldset': {
        borderColor: commonColors.whiteLight,
      },
      '&:hover fieldset': {
        borderColor: commonColors.white,
      },
      '&.Mui-focused fieldset': {
        borderColor: commonColors.white,
      },
    },
    '& .MuiInputLabel-root': {
      color: commonColors.white,
    },
    '& .MuiSelect-icon': {
      color: commonColors.white,
    },
  } as SxProps<Theme>,

  filterMenuItem: {
    color: commonColors.white,
    fontSize: commonTypography.fontSize.small,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&.Mui-selected': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    },
  } as SxProps<Theme>,

  filterChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: commonColors.white,
    border: commonBorders.borderLight,
    '& .MuiChip-deleteIcon': {
      color: commonColors.white,
      '&:hover': {
        color: commonColors.white,
      },
    },
  } as SxProps<Theme>,

  filterButton: {
    background: commonGradients.activeButtonGradient,
    color: commonColors.white,
    border: commonBorders.borderLight,
    boxShadow: commonShadows.small,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      background: commonGradients.hoverActiveGradient,
      ...commonEffects.hover,
      boxShadow: commonShadows.medium,
    },
  } as SxProps<Theme>,
}
