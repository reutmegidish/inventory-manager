import React from 'react'
import { PersonOutline as PersonIcon } from '@mui/icons-material'
import { userConstants } from './userConstants'
import { Dashboard } from '../../../../components/Dashboard/Dashboard'
import { useUserManagementPage } from './useUserManagementPage'
import { getRows, columns, User } from './userTableConfig'

export const UserManagementPage: React.FC = () => {
  const { TITLE, SEARCH_PLACEHOLDER, FILTER_OPTION } = userConstants

  const {
    users,
    searchQuery,
    setSearchQuery,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    loading,
    error,
    setIsTriggerFetch,
    setIsOnRefresh,
  } = useUserManagementPage()

  const rows = getRows(users)

  return (
    <Dashboard<User>
      dashboardHeaderTitle={TITLE}
      dashboardHeaderIcon={<PersonIcon />}
      setIsOnRefresh={setIsOnRefresh}
      placeholder={SEARCH_PLACEHOLDER}
      searchQuery={searchQuery}
      filterOptions={FILTER_OPTION.options}
      roleLabel={FILTER_OPTION.label}
      statusFilter={statusFilter}
      roleFilter={roleFilter}
      setSearchQuery={setSearchQuery}
      setIsTriggerFetch={setIsTriggerFetch}
      setRoleFilter={setRoleFilter}
      setStatusFilter={setStatusFilter}
      rows={rows}
      columns={columns}
      loading={loading}
      error={error}
    />
  )
}
