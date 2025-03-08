import React from 'react'
import { Box, Chip } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import {
  Edit as EditIcon,
  PowerSettingsNew as PowerIcon,
} from '@mui/icons-material'
import { tableStyles } from '../../../../../components/Dashboard/tableStyles'
import { CategoriesRowActions } from './CategoriesRowActions'
import { ICategories } from '../ICategories.interface'

interface RowAction {
  icon: React.ReactNode
  tooltip: string
  onClick: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx: any
}

export const getRowActions = (
  Category: ICategories,
  navigate: (path: string, options?: { state: ICategories }) => void
): RowAction[] => [
  {
    icon: <EditIcon fontSize="small" />,
    tooltip: 'Edit Category',
    onClick: () => {
      navigate(`edit/${Category._id}`, { state: Category })
    },
    sx: tableStyles.actionButton,
  },
]

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    renderCell: (params) => <Box sx={tableStyles.nameCell}>{params.value}</Box>,
  },
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
    renderCell: (params) => <CategoriesRowActions category={params.row} />,
  },
]

export const getRows = (Categories: ICategories[]) => {
  console.log(Categories)
  return Categories.map((Category) => ({
    id: Category._id,
    _id: Category._id,
    name: Category.name,
    active: Category.active,
  }))
}
