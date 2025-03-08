import React from 'react'
import { Store as StoreIcon } from '@mui/icons-material'
import { Dashboard } from '../../../../components/Dashboard/Dashboard'
import { storeConstants } from './utils/storeConstants'
import { useStoreManagementPage } from './useStoreManagementPage'
import { IStore } from './IStore.interface'
import { columns, getRows } from './utils/StoreTableConfig'

export const StoreManagementPage: React.FC = () => {
  const { TITLE, SEARCH_PLACEHOLDER, ADD_BUTTON_TEXT } = storeConstants

  const {
    Store,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    loading,
    error,
    setIsTriggerFetch,
    setIsOnRefresh,
  } = useStoreManagementPage()

  const rows = getRows(Store)

  return (
    <Dashboard<IStore>
      dashboardHeaderTitle={TITLE}
      dashboardHeaderIcon={<StoreIcon />}
      setIsOnRefresh={setIsOnRefresh}
      addButtonText={ADD_BUTTON_TEXT}
      placeholder={SEARCH_PLACEHOLDER}
      searchQuery={searchQuery}
      filterOptions={undefined}
      roleLabel={undefined}
      statusFilter={statusFilter}
      setSearchQuery={setSearchQuery}
      setIsTriggerFetch={setIsTriggerFetch}
      setStatusFilter={setStatusFilter}
      rows={rows}
      columns={columns}
      loading={loading}
      error={error}
    />
  )
}
