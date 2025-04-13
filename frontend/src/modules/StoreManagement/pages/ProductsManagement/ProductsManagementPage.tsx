import React from 'react'
import { productsConstants } from './utils/productsConstants'
import { useProductsManagementPag } from './useProductsManagementPag'
import { Dashboard } from '../../../../components'
import { columns, getRows, IProduct } from './utils/ProductsTableConfig'
import { Storefront as StoreIcon } from '@mui/icons-material'

export const ProductsManagementPage: React.FC = () => {
  const { TITLE, SEARCH_PLACEHOLDER, ADD_BUTTON_TEXT } = productsConstants

  const {
    products,
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
  } = useProductsManagementPag()

  const rows = getRows(products)

  return (
    <Dashboard<IProduct>
      dashboardHeaderTitle={TITLE}
      dashboardHeaderIcon={<StoreIcon />}
      setIsOnRefresh={setIsOnRefresh}
      addButtonText={ADD_BUTTON_TEXT}
      placeholder={SEARCH_PLACEHOLDER}
      searchQuery={searchQuery}
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
