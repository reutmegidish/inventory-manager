import React from 'react'
import { Chip } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import {
  Edit as EditIcon,
  PowerSettingsNew as PowerIcon,
} from '@mui/icons-material'
import { tableStyles } from '../../dashboard/styles/tableStyles'
import { CategoryRowActions, ICategory } from './CategoriesRowActions'

interface RowAction {
  icon: React.ReactNode
  tooltip: string
  onClick: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx: any
}

export const getRowActions = (
  category: ICategory,
  navigate: (path: string, options?: { state: ICategory }) => void
): RowAction[] => [
  {
    icon: <EditIcon fontSize="small" />,
    tooltip: 'Edit Category',
    onClick: () => {
      console.log('Edit Category:11', category.id)
      navigate(`edit/${category.id}`, { state: category })
    },
    sx: tableStyles.actionButton,
  },
  {
    icon: <PowerIcon fontSize="small" />,
    tooltip: category.active ? 'Deactivate Category' : 'Activate Category',
    onClick: () => {
      console.log('Toggle Category status:', category.id)
    },
    sx: tableStyles.statusButton(category.active),
  },
]

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  { field: 'mainCategory', headerName: 'Main Category', flex: 2 },
  {
    field: 'active',
    headerName: 'Active',
    flex: 1,
    renderCell: (params) => (
      <Chip
        icon={<PowerIcon />}
        label={params.value ? 'Active' : 'Inactive'}
        sx={tableStyles.statusButton(params.value)}
      />
    ),
  },
  {
    field: 'action',
    headerName: 'Action',
    flex: 1,
    renderCell: (params) => <CategoryRowActions category={params.row} />,
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRows = (categories: any[]) => {
  return categories.map((category) => ({
    id: category._id,
    name: category.name,
    description: category.description,
    active: category.active,
  }))
}
