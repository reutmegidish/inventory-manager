import React from 'react'
import { Chip } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import {
  Edit as EditIcon,
  PowerSettingsNew as PowerIcon,
} from '@mui/icons-material'
import { tableStyles } from '../../dashboard/styles/tableStyles'
import { IStore, StoreRowActions } from './StoreRowActions'

interface RowAction {
  icon: React.ReactNode
  tooltip: string
  onClick: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx: any
}

export const getRowActions = (
  store: IStore,
  navigate: (path: string, options?: { state: IStore }) => void
): RowAction[] => [
  {
    icon: <EditIcon fontSize="small" />,
    tooltip: 'Edit Store',
    onClick: () => {
      console.log('Edit Store:11', store.id)
      navigate(`edit/${store.id}`, { state: store })
    },
    sx: tableStyles.actionButton,
  },
  {
    icon: <PowerIcon fontSize="small" />,
    tooltip: store.active ? 'Deactivate Store' : 'Activate Store',
    onClick: () => {
      console.log('Toggle Store status:', store.id)
    },
    sx: tableStyles.statusButton(store.active),
  },
]

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  { field: 'mainStore', headerName: 'Main Store', flex: 2 },
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
    renderCell: (params) => <StoreRowActions Store={params.row} />,
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRows = (store: any[]) => {
  return store.map((st) => ({
    id: st._id,
    name: st.name,
    description: st.description,
    active: st.active,
  }))
}
