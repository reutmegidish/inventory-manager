import React from 'react'
import {
  DashboardHeader,
  DashboardHeaderProps,
} from './DashboardHeader/DashboardHeader'
import {
  DataTableFilters,
  DataTableFiltersProps,
} from './DataTableFilters/DataTableFilters'
import { DataTable, DataTableProps } from './DataTable/DataTable'

export interface DashboardProps<T>
  extends DashboardHeaderProps,
    DataTableFiltersProps,
    DataTableProps<T> {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const Dashboard = <T extends {}>({
  dashboardHeaderTitle,
  dashboardHeaderIcon,
  setIsOnRefresh,
  placeholder,
  searchQuery,
  filterOptions,
  roleLabel,
  statusFilter,
  roleFilter,
  setRoleFilter,
  setIsTriggerFetch,
  setSearchQuery,
  setStatusFilter,
  rows,
  columns,
  loading,
  error,
}: DashboardProps<T>) => {
  return (
    <>
      <DashboardHeader
        {...{
          dashboardHeaderTitle,
          dashboardHeaderIcon,
          setIsOnRefresh,
        }}
      />

      <DataTableFilters
        {...{
          placeholder,
          searchQuery,
          filterOptions,
          roleLabel,
          statusFilter,
          roleFilter,
          setRoleFilter,
          setSearchQuery,
          setStatusFilter,
          setIsTriggerFetch,
        }}
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <DataTable
          rows={rows}
          columns={columns}
          loading={loading}
          error={error}
        />
      )}
    </>
  )
}
