export interface FilterOption {
  value: string
  label: string
}

export interface DashboardFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  searchPlaceholder: string
  roleFilter: string
  onRoleFilterChange: (value: string) => void
  roleOptions: FilterOption[]
  roleLabel: string
  statusFilter: string
  onStatusFilterChange: (value: string) => void
  statusOptions: FilterOption[]
  statusLabel: string
}
