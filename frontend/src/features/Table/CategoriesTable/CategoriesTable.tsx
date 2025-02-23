import React from 'react'
import DataTable from '../DataTable'
import { useCategoriesTable } from './useCategoriesTable'
import { columns, getRows } from './CategoriesTableConfig'
import DashboardHeader from '../../DashboardHeader/DashboardHeader'
import { Category as CategoryIcon } from '@mui/icons-material'
import { fetchCategories } from '../../../serviecs/categoriesService'

const CategoriesTable = () => {
  const { categories, loading, error } = useCategoriesTable()

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error}</div>
  ) : (
    <>
      <DashboardHeader
        title="Categories Management"
        icon={<CategoryIcon />}
        onRefresh={fetchCategories}
      />
      <DataTable columns={columns} rows={getRows(categories)} />
    </>
  )
}

export default CategoriesTable
