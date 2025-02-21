import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/material'
import { tableStyles } from '../dashboard/styles/tableStyles'

interface DataTableProps<T> {
  rows: T[]
  columns: GridColDef[]
}

export default function DataTable<T>({ rows, columns }: DataTableProps<T>) {
  return (
    <Box sx={tableStyles.container}>
      <Paper sx={tableStyles.paper}>
        {columns.length && (
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
