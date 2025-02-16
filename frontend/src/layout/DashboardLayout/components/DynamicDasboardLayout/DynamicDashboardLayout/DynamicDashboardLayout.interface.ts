export interface MenuItem {
  id: string
  label: string
  icon: React.ReactNode
  path: string
}

export interface DynamicDashboardLayoutProps {
  menuItems: MenuItem[]
}
