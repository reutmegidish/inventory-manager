import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/material'
import { tableStyles } from '../tableStyles'

export interface DataTableProps<T> {
  rows: T[]
  columns: GridColDef[]
  loading: boolean
  error: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const DataTable = <T extends {}>({
  rows,
  columns,
  loading,
  error,
}: DataTableProps<T>) => {
  return (
    <Box sx={tableStyles.container}>
      <Paper sx={tableStyles.paper}>
        {loading ? (
          <div>loading..</div>
        ) : error ? (
          <div>error</div>
        ) : (
          <DataGrid
            columns={columns}
            rows={rows}
            sx={tableStyles.dataGrid}
            disableRowSelectionOnClick
            hideFooter
          />
        )}
      </Paper>
    </Box>
  )
}
