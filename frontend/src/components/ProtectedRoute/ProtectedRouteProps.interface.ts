export default interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRoles: string[]
}
