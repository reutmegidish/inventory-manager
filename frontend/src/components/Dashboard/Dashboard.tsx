import React from 'react'
import {
  DashboardHeader,
  DashboardHeaderProps,
} from './DashboardHeader/DashboardHeader'
import {
  DataTableFilters,
  IDataTableFiltersProps,
} from './DataTableFilters/DataTableFilters'
import { DataTable, DataTableProps } from './DataTable/DataTable'

export interface DashboardProps<T>
  extends DashboardHeaderProps,
    IDataTableFiltersProps,
    DataTableProps<T> {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const Dashboard = <T extends {}>({
  dashboardHeaderTitle,
  dashboardHeaderIcon,
  setIsOnRefresh,
  addButtonText,
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
          addButtonText,
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
