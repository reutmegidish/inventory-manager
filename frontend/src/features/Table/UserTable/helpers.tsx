import React from 'react'
import {
  PersonOutline as PersonIcon,
  Store as StoreIcon,
  AdminPanelSettings as AdminIcon,
  ShoppingCart as BuyerIcon,
} from '@mui/icons-material'

export const getRoleIcon = (role: string) => {
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
