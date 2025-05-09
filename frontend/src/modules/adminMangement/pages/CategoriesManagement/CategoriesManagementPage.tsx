import React from 'react'
import { Category as CategoryIcon } from '@mui/icons-material'
import { Dashboard } from '../../../../components/Dashboard/Dashboard'
import { categoriesConstants } from './utils/categoriesConstants'
import { ICategories } from './ICategories.interface'
import { columns, getRows } from './utils/categoriesTableConfig'
import { useManagementPage } from '../../../../hooks/useManagementPage'
import { fetchCategories } from '../../../../services'

export const CategoriesManagementPage: React.FC = () => {
  const { TITLE, SEARCH_PLACEHOLDER, ADD_BUTTON_TEXT } = categoriesConstants

  const {
    data: Categories,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    loading,
    error,
    setIsTriggerFetch,
    setIsOnRefresh,
  } = useManagementPage<ICategories>({
    fetchData: fetchCategories,
  })

  const rows = getRows(Categories)

  return (
    <Dashboard<ICategories>
      dashboardHeaderTitle={TITLE}
      dashboardHeaderIcon={<CategoryIcon />}
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
