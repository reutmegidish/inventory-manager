import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProtectedRouteProps from './ProtectedRouteProps.interface'

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRoles,
}) => {
  const navigate = useNavigate()
  const role = localStorage.getItem('userRole')

  if (!role || !requiredRoles.includes(role)) {
    navigate('/login')
    return null
  }

  return <>{children}</>
}
