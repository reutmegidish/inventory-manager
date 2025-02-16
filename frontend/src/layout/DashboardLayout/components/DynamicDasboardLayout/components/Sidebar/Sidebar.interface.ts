export default interface MenuItem {
  text: string
  icon: JSX.Element
  path: string
}

export interface SidebarProps {
  menuItems: MenuItem[]
}
