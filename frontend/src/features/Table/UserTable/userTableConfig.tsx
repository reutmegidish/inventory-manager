import React from 'react'
import { Box, Chip, IconButton, Tooltip } from '@mui/material'

import { GridColDef } from '@mui/x-data-grid'

import {
  Edit as EditIcon,
  PowerSettingsNew as PowerIcon,
} from '@mui/icons-material'
import { tableStyles } from '../../dashboard/styles/tableStyles'
import { getRoleIcon } from './helpers'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRowActions = (user: any) => [
  {
    icon: <EditIcon fontSize="small" />,
    tooltip: 'Edit User',
    onClick: () => {
      console.log('Edit user:', user)
    },
    sx: tableStyles.actionButton,
  },
  {
    icon: <PowerIcon fontSize="small" />,
    tooltip: user.active ? 'Deactivate User' : 'Activate User',
    onClick: () => {
      console.log('Toggle user status:', user._id)
    },
    sx: tableStyles.statusButton(user.active),
  },
]

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    renderCell: (params) => (
      <Box sx={tableStyles.nameCell}>
        <Box sx={tableStyles.roleIconWrapper}>
          {getRoleIcon(params.row.role)}
        </Box>
        {params.value}
      </Box>
    ),
  },
  { field: 'email', headerName: 'Email', flex: 2 },
  {
    field: 'role',
    headerName: 'Role',
    flex: 1,
    renderCell: (params) => (
      <Chip
        icon={getRoleIcon(params.value)}
        label={params.value.charAt(0).toUpperCase() + params.value.slice(1)}
        sx={tableStyles.roleChip}
      />
    ),
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
    renderCell: (params) => (
      <Box>
        {getRowActions(params).map((action, index) => (
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
export const getRows = (users: any[]) => {
  return users.map((user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    active: user.active,
  }))
}
