import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  IconButton,
  Tooltip,
  Box,
  CircularProgress,
} from '@mui/material'
import { DashboardTableProps } from './DashboardTable.interface'
import { tableStyles } from './DashboardTable.styles'

export const DashboardTable = <T extends Record<string, any>>({
  data,
  columns,
  orderBy,
  order,
  onSort,
  getRowActions,
  loading,
}: DashboardTableProps<T>) => {
  if (loading) {
    return (
      <Box sx={tableStyles.loadingContainer}>
        <CircularProgress sx={tableStyles.loader} />
      </Box>
    )
  }

  return (
    <TableContainer sx={tableStyles.tableWrapper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={String(column.id)}
                sortDirection={orderBy === column.id ? order : false}
                sx={tableStyles.headerCell}
              >
                {column.sortable !== false ? (
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={() =>
                      column.id !== 'actions' && onSort(column.id as keyof T)
                    }
                    sx={tableStyles.sortLabel}
                  >
                    {column.label}
                  </TableSortLabel>
                ) : (
                  column.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} sx={tableStyles.row}>
              {columns.map((column) => (
                <TableCell key={String(column.id)} sx={tableStyles.cell}>
                  {column.id === 'actions' ? (
                    <Box>
                      {getRowActions(item).map((action, actionIndex) => (
                        <Tooltip key={actionIndex} title={action.tooltip}>
                          <IconButton
                            onClick={action.onClick}
                            size="small"
                            sx={{ color: action.color || 'white', mr: 1 }}
                          >
                            {action.icon}
                          </IconButton>
                        </Tooltip>
                      ))}
                    </Box>
                  ) : column.render ? (
                    column.render(item)
                  ) : (
                    item[column.id as keyof T]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
