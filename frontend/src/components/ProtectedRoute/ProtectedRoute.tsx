import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRoles: string[]
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRoles,
}) => {
  const navigate = useNavigate()
  const role = localStorage.getItem('userRole')

  useEffect(() => {
    if (!role || !requiredRoles.includes(role)) {
      navigate('/login')
    }
  }, [role, requiredRoles, navigate])

  if (!role || !requiredRoles.includes(role)) {
    return null
  }

  return <>{children}</>
}
