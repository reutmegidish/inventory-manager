import React from 'react'
import { Box, Chip } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import {
  Edit as EditIcon,
  PowerSettingsNew as PowerIcon,
} from '@mui/icons-material'
import { tableStyles } from '../../../../../components/Dashboard/tableStyles'
import { StoreRowActions } from './StoreRowActions'
import { IStore } from '../IStore.interface'

interface IRowAction {
  icon: React.ReactNode
  tooltip: string
  onClick: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx: any
}

export const getRowActions = (
  Store: IStore,
  navigate: (path: string, options?: { state: IStore }) => void
): IRowAction[] => [
  {
    icon: <EditIcon fontSize="small" />,
    tooltip: 'Edit Store',
    onClick: () => {
      navigate(`edit/${Store._id}`, { state: Store })
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
    field: 'adress',
    headerName: 'Adress',
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
    renderCell: (params) => <StoreRowActions store={params.row} />,
  },
]

export const getRows = (Store: IStore[]) => {
  return Store.map((Store) => ({
    id: Store._id,
    _id: Store._id,
    name: Store.name,
    adress: Store.adress,
    active: Store.active,
  }))
}
