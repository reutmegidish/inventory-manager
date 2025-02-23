import React from 'react'
import DataTable from '../DataTable'

import DashboardHeader from '../../DashboardHeader/DashboardHeader'
import { Category as CategoryIcon } from '@mui/icons-material'
import { columns, getRows } from './StoreTableConfig'
import { useStoreTable } from './useStoreTable'
import { fetchStore } from '../../../serviecs/storeService'

const StoreTable = () => {
  const { Store, loading, error } = useStoreTable()

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error}</div>
  ) : (
    <>
      <DashboardHeader
        title="Store Management"
        icon={<CategoryIcon />}
        onRefresh={fetchStore}
      />
      <DataTable columns={columns} rows={getRows(Store)} />
    </>
  )
}

export default StoreTable
