import React from 'react'
import { PersonOutline as PersonIcon } from '@mui/icons-material'
import { userConstants } from './utils/userConstants'
import { Dashboard } from '../../../../components/Dashboard/Dashboard'
import { getRows, columns, User } from './utils/userTableConfig'
import { fetchUsers } from '../../../../services'
import { useManagementPage } from '../../../../hooks/useManagementPage'

export const UserManagementPage: React.FC = () => {
  const { TITLE, SEARCH_PLACEHOLDER, FILTER_OPTION, ADD_BUTTON_TEXT } =
    userConstants

  const {
    data: users,
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
  } = useManagementPage<User>({
    fetchData: fetchUsers,
    initialRoleFilter: 'all',
  })

  const rows = getRows(users)

  return (
    <Dashboard<User>
      dashboardHeaderTitle={TITLE}
      dashboardHeaderIcon={<PersonIcon />}
      setIsOnRefresh={setIsOnRefresh}
      addButtonText={ADD_BUTTON_TEXT}
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
