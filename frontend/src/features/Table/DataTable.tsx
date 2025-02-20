import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/material'
import { tableStyles } from '../dashboard/styles/tableStyles'

export default function DataTable({ rows, columns }) {
  return (
    <Box sx={tableStyles.container}>
      <Paper sx={tableStyles.paper}>
        {columns && columns.length > 0 && (
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
