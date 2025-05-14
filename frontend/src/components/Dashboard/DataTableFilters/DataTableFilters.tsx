import React from 'react'
import {
  Stack,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material'
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  PowerSettingsNew as PowerIcon,
} from '@mui/icons-material'
import { STATUS_OPTIONS } from './const'
import { dataTableFiltersStyles } from './styles'

export interface IFilterOption {
  value: string
  label: string
}

export interface IDataTableFiltersProps {
  placeholder: string
  searchQuery: string
  filterOptions?: IFilterOption[]
  roleLabel?: string
  statusFilter: string
  roleFilter?: string
  setSearchQuery: (value: string) => void
  setRoleFilter?: (value: string) => void
  setIsTriggerFetch: (value: boolean) => void
  setStatusFilter: (value: string) => void
}

export const DataTableFilters: React.FC<IDataTableFiltersProps> = ({
  placeholder,
  searchQuery,
  filterOptions,
  roleLabel,
  statusFilter,
  roleFilter,
  setSearchQuery,
  setIsTriggerFetch,
  setRoleFilter,
  setStatusFilter,
}) => {
  return (
    <Box sx={dataTableFiltersStyles.container}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        // sx={dashboardStyles.filtersStack}
      >
        <TextField
          size="small"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
          sx={dataTableFiltersStyles.searchField}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                </InputAdornment>
              ),
            },
          }}
        />

        {roleLabel && setRoleFilter && (
          <FormControl size="small" sx={dataTableFiltersStyles.filterSelect}>
            <InputLabel>{roleLabel}</InputLabel>
            <Select
              value={roleFilter}
              label={roleLabel}
              onChange={(e) => setRoleFilter(e.target.value)}
              startAdornment={
                <FilterListIcon
                  sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.7)' }}
                />
              }
              MenuProps={{
                PaperProps: {
                  sx: dataTableFiltersStyles.filterMenuItem,
                },
              }}
            >
              {filterOptions?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        <FormControl size="small" sx={dataTableFiltersStyles.filterSelect}>
          <InputLabel>{STATUS_OPTIONS.label}</InputLabel>
          <Select
            value={statusFilter}
            label={STATUS_OPTIONS.label}
            onChange={(e) => setStatusFilter(e.target.value)}
            startAdornment={<PowerIcon sx={{ mr: 1 }} />}
            MenuProps={{
              PaperProps: {
                sx: dataTableFiltersStyles.filterMenuItem,
              },
            }}
          >
            {STATUS_OPTIONS.options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={() => setIsTriggerFetch(true)}
          startIcon={<SearchIcon />}
          sx={dataTableFiltersStyles.filterButton}
        >
          Search
        </Button>
      </Stack>
    </Box>
  )
}
