import React from '@mui/material'
import { Box, Container, Alert, Typography } from '@mui/material'

import { DashboardProps } from './Dashboard.interface'
import { dashboardStyles } from './Dashboard.styles'
import { DashboardHeader } from './components/DashboardHeader/DashboardHeader'
import { DashboardFilters } from './components/DashboardFilters/DashboardFilters'
import { DashboardTable } from './components/DashboardTable'

export const Dashboard = <T extends Record<string, any>>({
  title,
  titleIcon,
  actionButton,
  onRefresh,
  data,
  loading,
  error,
  searchPlaceholder,
  filterOptions,
  columns,
  getRowActions,
  searchQuery,
  onSearchChange,
  roleFilter,
  onRoleFilterChange,
  statusFilter,
  onStatusFilterChange,
  orderBy,
  order,
  onSort,
  totalItems,
}: DashboardProps<T> & {
  searchQuery: string
  onSearchChange: (value: string) => void
  roleFilter: string
  onRoleFilterChange: (value: string) => void
  statusFilter: string
  onStatusFilterChange: (value: string) => void
  orderBy: keyof T
  order: 'asc' | 'desc'
  onSort: (property: keyof T) => void
  totalItems: number
}) => {
  return (
    <Box sx={dashboardStyles.wrapper}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={dashboardStyles.container}>
          <DashboardHeader
            title={title}
            titleIcon={titleIcon}
            actionButton={actionButton}
            onRefresh={onRefresh}
          />

          {error && (
            <Alert severity="error" sx={alertStyles}>
              {error}
            </Alert>
          )}

          <DashboardFilters
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            searchPlaceholder={searchPlaceholder}
            roleFilter={roleFilter}
            onRoleFilterChange={onRoleFilterChange}
            roleOptions={filterOptions.role.options}
            roleLabel={filterOptions.role.label}
            statusFilter={statusFilter}
            onStatusFilterChange={onStatusFilterChange}
            statusOptions={filterOptions.status.options}
            statusLabel={filterOptions.status.label}
          />

          <DashboardTable
            data={data}
            columns={columns}
            orderBy={orderBy}
            order={order}
            onSort={onSort}
            getRowActions={getRowActions}
            loading={loading}
          />

          <Box sx={dashboardStyles.totalItems}>
            <Typography variant="body2" sx={dashboardStyles.totalItemsText}>
              Total Items: {totalItems}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
