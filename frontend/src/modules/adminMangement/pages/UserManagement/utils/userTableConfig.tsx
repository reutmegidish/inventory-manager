import React from 'react'
import { Box, Chip } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import {
  Edit as EditIcon,
  PowerSettingsNew as PowerIcon,
  InfoOutlined as InfoOutlinedIcon,
} from '@mui/icons-material'
import { tableStyles } from '../../../../../components/Dashboard/tableStyles'
import { getRoleIcon } from './helpers'
import { IUser, UserRowActions } from './UserRowActions'

interface RowAction {
  icon: React.ReactNode
  tooltip: string
  onClick: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx: any
}

export interface User {
  _id: string
  name: string
  email: string
  role: 'admin' | 'employee' | 'buyer'
  active: boolean
  address?: string
  phone?: string
}

export const getRowActions = (
  user: IUser,
  navigate: (path: string, options: { state: IUser }) => void
): RowAction[] => [
  {
    icon: <EditIcon fontSize="small" />,
    tooltip: 'Edit User',
    onClick: () => {
      navigate(`edit/${user._id}`, { state: user })
    },
    sx: tableStyles.actionButton,
  },
  {
    icon: <InfoOutlinedIcon fontSize="small" />,
    tooltip: 'User Details',
    onClick: () => {
      navigate(`details/${user._id}`, { state: user })
    },
    sx: tableStyles.actionButton,
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
    renderCell: (params) => <UserRowActions user={params.row} />,
  },
]

export const getRows = (users: User[]) => {
  console.log(users)
  return users.map((user) => ({
    id: user._id,
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    active: user.active,
    address: user.address,
    phone: user.phone,
  }))
}
