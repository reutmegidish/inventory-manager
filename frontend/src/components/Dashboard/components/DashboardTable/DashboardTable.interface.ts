import { ReactNode } from 'react'

export interface Column<T> {
  id: keyof T | 'actions'
  label: string
  sortable?: boolean
  render?: (item: T) => ReactNode
}

export interface RowAction {
  icon: ReactNode
  tooltip: string
  onClick: () => void
  color?: string
}

export interface DashboardTableProps<T> {
  data: T[]
  columns: Column<T>[]
  orderBy: keyof T
  order: 'asc' | 'desc'
  onSort: (property: keyof T) => void
  getRowActions: (item: T) => RowAction[]
  loading: boolean
}
