import React from 'react'
import {
  Stack,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  PowerSettingsNew as PowerIcon,
} from '@mui/icons-material'
import { DashboardFiltersProps } from './DashboardFilters.interface'
import { filterStyles } from './DashboardFilters.styles'

export const DashboardFilters: React.FC<DashboardFiltersProps> = ({
  searchQuery,
  onSearchChange,
  searchPlaceholder,
  roleFilter,
  onRoleFilterChange,
  roleOptions,
  roleLabel,
  statusFilter,
  onStatusFilterChange,
  statusOptions,
  statusLabel,
}) => {
  return (
    <Stack direction="row" spacing={2} sx={filterStyles.wrapper}>
      <TextField
        placeholder={searchPlaceholder}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={filterStyles.searchField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
            </InputAdornment>
          ),
        }}
      />
      <FormControl sx={filterStyles.filterControl}>
        <InputLabel>{roleLabel}</InputLabel>
        <Select
          value={roleFilter}
          label={roleLabel}
          onChange={(e) => onRoleFilterChange(e.target.value)}
          startAdornment={
            <FilterListIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.7)' }} />
          }
        >
          {roleOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={filterStyles.filterControl}>
        <InputLabel>{statusLabel}</InputLabel>
        <Select
          value={statusFilter}
          label={statusLabel}
          onChange={(e) => onStatusFilterChange(e.target.value)}
          startAdornment={
            <PowerIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.7)' }} />
          }
        >
          {statusOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  )
}
