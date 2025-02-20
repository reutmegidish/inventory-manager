import React from 'react'
import { Box, Chip, IconButton, Tooltip } from '@mui/material'

import { GridColDef } from '@mui/x-data-grid'

import {
  Edit as EditIcon,
  PowerSettingsNew as PowerIcon,
} from '@mui/icons-material'
import { tableStyles } from '../../dashboard/styles/tableStyles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRowActions = (category: any) => [
  {
    icon: <EditIcon fontSize="small" />,
    tooltip: 'Edit Category',
    onClick: () => {
      console.log('Edit category:', category._id)
    },
    sx: tableStyles.actionButton,
  },
  {
    icon: <PowerIcon fontSize="small" />,
    tooltip: category.active ? 'Deactivate Category' : 'Activate Category',
    onClick: () => {
      console.log('Toggle category status:', category._id)
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
    renderCell: (params) => (
      <Box>
        {getRowActions(params.row).map((action, index) => (
          <Tooltip key={index} title={action.tooltip}>
            <IconButton onClick={action.onClick} size="small" sx={action.sx}>
              {action.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    ),
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRows = (categories: any[]) => {
  return categories.map((category) => ({
    id: category._id,
    name: category.name,
    email: category.email,
    role: category.role,
    active: category.active,
  }))
}
