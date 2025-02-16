import { ReactNode } from 'react'

export interface DashboardProps<T> {
  title: string
  titleIcon: ReactNode
  actionButton?: {
    text: string
    icon: ReactNode
    onClick: () => void
  }
  onRefresh: () => void
  data: T[]
  loading: boolean
  error: string
  searchPlaceholder: string
  filterOptions: {
    role: {
      label: string
      options: Array<{ value: string; label: string }>
    }
    status: {
      label: string
      options: Array<{ value: string; label: string }>
    }
  }
  columns: Array<{
    id: keyof T | 'actions'
    label: string
    sortable?: boolean
    render?: (item: T) => ReactNode
  }>
  getRowActions: (item: T) => Array<{
    icon: ReactNode
    tooltip: string
    onClick: () => void
    color?: string
  }>
}
