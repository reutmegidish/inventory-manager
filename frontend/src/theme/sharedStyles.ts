export const commonGradients = {
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

export const commonBorders = {
  borderLight: '1px solid rgba(255, 255, 255, 0.1)',
}

export const commonTransitions = {
  default: 'all 0.2s',
  smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}

export const commonSpacing = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
}

export const commonColors = {
  white: 'rgba(255, 255, 255, 0.9)',
  whiteLight: 'rgba(255, 255, 255, 0.1)',
  whiteLighter: 'rgba(255, 255, 255, 0.05)',
  background: {
    primary: 'rgb(22, 17, 61)',
    secondary: 'rgb(39, 41, 82)',
  },
}

export const commonTypography = {
  fontSize: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.1rem',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
}

export const commonShadows = {
  small: '0 2px 4px rgba(0, 0, 0, 0.1)',
  medium: '0 4px 8px rgba(0, 0, 0, 0.2)',
  large: '0 8px 32px rgba(22, 17, 61, 0.3)',
}

export const commonEffects = {
  hover: {
    transform: 'translateY(-2px)',
    transition: commonTransitions.smooth,
  },
  glass: {
    backdropFilter: 'blur(20px)',
    glassBackground: commonGradients.backgroundSecondary,
  },
}
