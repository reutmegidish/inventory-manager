import { SxProps, Theme } from '@mui/material/styles'
import {
  commonColors,
  commonEffects,
  commonGradients,
  commonShadows,
} from '../../../../theme/sharedStyles'

export const dashboardLayoutStyles = {
  root: {
    minHeight: '100vh',
    background: commonGradients.backgroundPrimary,
    display: 'flex',
  } as SxProps<Theme>,

  sidebar: {
    width: 280,
    background: commonGradients.backgroundSecondary,
    borderRight: `1px solid ${commonColors.whiteLight}`,
    ...commonEffects.glass,
    boxShadow: commonShadows.medium,
  } as SxProps<Theme>,

  mainContent: {
    flex: 1,
    p: 3,
    position: 'relative',
    overflow: 'auto',
  } as SxProps<Theme>,

  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: commonGradients.backgroundSecondary,
    borderBottom: `1px solid ${commonColors.whiteLight}`,
    ...commonEffects.glass,
    boxShadow: commonShadows.small,
  } as SxProps<Theme>,

  content: {
    mt: 3,
  } as SxProps<Theme>,
}
