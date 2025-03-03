// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const navigateUserRole = (role: string, navigate: any) => {
  switch (role) {
    case 'admin':
      navigate('/admin-dashboard')
      break
    case 'employee':
      navigate('/employee-dashboard')
      break
    case 'buyer':
      navigate('/product')
      break
    default:
      console.log('Invalid user role') // TODO: handle default
  }
}
