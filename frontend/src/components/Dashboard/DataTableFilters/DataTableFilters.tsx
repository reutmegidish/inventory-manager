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
} from '@mui/material'
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  PowerSettingsNew as PowerIcon,
} from '@mui/icons-material'
import { STATUS_OPTIONS } from './const'

export interface FilterOption {
  value: string
  label: string
}

export interface DataTableFiltersProps {
  placeholder: string
  searchQuery: string
  filterOptions: FilterOption[]
  roleLabel: string
  statusFilter: string
  roleFilter: string
  setSearchQuery: (value: string) => void
  setRoleFilter: (value: string) => void
  setIsTriggerFetch: (value: boolean) => void
  setStatusFilter: (value: string) => void
}

export const DataTableFilters: React.FC<DataTableFiltersProps> = ({
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
    <Stack direction="row" spacing={2}>
      <TextField
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
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

      <FormControl>
        <InputLabel>{roleLabel}</InputLabel>
        <Select
          value={roleFilter}
          label={roleLabel}
          onChange={(e) => setRoleFilter(e.target.value)}
          startAdornment={
            <FilterListIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.7)' }} />
          }
        >
          {filterOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>{STATUS_OPTIONS.label}</InputLabel>
        <Select
          value={statusFilter}
          label={STATUS_OPTIONS.label}
          onChange={(e) => setStatusFilter(e.target.value)}
          startAdornment={
            <PowerIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.7)' }} />
          }
        >
          {STATUS_OPTIONS.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button onClick={() => setIsTriggerFetch(true)}>Search</Button>
    </Stack>
  )
}
