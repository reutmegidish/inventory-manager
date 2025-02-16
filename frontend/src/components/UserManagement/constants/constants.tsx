import React from 'react'
import {
  PersonOutline as PersonIcon,
  Add as AddIcon,
  AdminPanelSettings as AdminIcon,
  ShoppingCart as BuyerIcon,
  Store as StoreIcon,
} from '@mui/icons-material'

export const UI_TEXTS = {
  USER_MANAGEMENT_TITLE: 'User Management',
  SEARCH_PLACEHOLDER: 'Search users...',
  ADD_USER_BUTTON_TEXT: 'Add User',
}

export const UI_ICONS = {
  USER_MANAGEMENT_ICON: <PersonIcon />,
  ADD_USER_ICON: <AddIcon />,
}

export const USER_ROLES = {
  ADMIN: 'admin',
  EMPLOYEE: 'employee',
  BUYER: 'buyer',
}

export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
}

export const ROLE_OPTIONS = [
  { value: 'all', label: 'All Roles' },
  { value: USER_ROLES.ADMIN, label: 'Admins' },
  { value: USER_ROLES.EMPLOYEE, label: 'Employees' },
  { value: USER_ROLES.BUYER, label: 'Buyers' },
]

export const STATUS_OPTIONS = [
  { value: 'all', label: 'All Status' },
  { value: USER_STATUS.ACTIVE, label: 'Active' },
  { value: USER_STATUS.INACTIVE, label: 'Inactive' },
]

export const GET_ROLE_ICON = (role: string) => {
  switch (role) {
    case 'admin':
      return <AdminIcon fontSize="small" />
    case 'employee':
      return <StoreIcon fontSize="small" />
    case 'buyer':
      return <BuyerIcon fontSize="small" />
    default:
      return <PersonIcon fontSize="small" />
  }
}
