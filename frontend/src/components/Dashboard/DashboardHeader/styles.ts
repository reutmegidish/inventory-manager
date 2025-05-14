import { SxProps, Theme } from '@mui/material/styles'
import {
  commonColors,
  commonEffects,
  commonGradients,
  commonShadows,
  commonTypography,
} from '../../../theme/sharedStyles'

export const dashboardHeaderStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 3,
    p: 2,
    borderRadius: 2,
    backdropFilter: commonEffects.glass.backdropFilter,
    background: commonEffects.glass.glassBackground,
    boxShadow: commonShadows.medium,
  } as SxProps<Theme>,

  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  } as SxProps<Theme>,

  title: {
    color: commonColors.white,
    fontSize: commonTypography.fontSize.large,
    fontWeight: commonTypography.fontWeight.semiBold,
    letterSpacing: '0.5px',
    position: 'relative',
    paddingBottom: '3px',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: '60%',
      height: '3px',
      background:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.3), transparent)',
    },
  } as SxProps<Theme>,

  icon: {
    color: commonColors.white,
    fontSize: '2rem',
  } as SxProps<Theme>,

  addButton: {
    background: commonGradients.activeButtonGradient,
    color: commonColors.white,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: commonShadows.small,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      background: commonGradients.hoverActiveGradient,
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
}
