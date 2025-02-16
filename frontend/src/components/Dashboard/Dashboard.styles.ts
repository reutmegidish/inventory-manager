export const dashboardStyles = {
  wrapper: {
    minHeight: '100vh',
    background:
      'linear-gradient(135deg, rgb(22, 17, 61) 0%, rgb(39, 41, 82) 100%)',
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
  container: {
    p: 4,
    borderRadius: 2,
    background:
      'linear-gradient(135deg, rgba(39, 41, 82, 0.7) 0%, rgba(22, 17, 61, 0.9) 100%)',
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
  totalItems: {
    mt: 2,
    display: 'flex',
    justifyContent: 'flex-end',
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    px: 2,
    py: 1,
    borderRadius: 1,
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  totalItemsText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 500,
  },
}
