import { ReactNode } from 'react'

export interface DashboardHeaderProps {
  title: string
  titleIcon: ReactNode
  actionButton?: {
    text: string
    icon: ReactNode
    onClick: () => void
  }
  onRefresh: () => void
}
