import React from 'react'
import {
  Storefront as ProductIcon,
  ShoppingCart as OrdersIcon,
} from '@mui/icons-material'
import MenuItem from '../components/Sidebar/Sidebar.interface'

export const storeSidebarItems: MenuItem[] = [
  {
    text: 'Products',
    icon: <ProductIcon />,
    path: '/employee-dashboard/products',
  },
  {
    text: 'Orders',
    icon: <OrdersIcon />,
    path: '/employee-dashboard/orders',
  },
]
