import React from 'react'
import { Chip } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import {
  Edit as EditIcon,
  PowerSettingsNew as PowerIcon,
  InfoOutlined as InfoOutlinedIcon,
} from '@mui/icons-material'
import { tableStyles } from '../../../../../components/Dashboard/tableStyles'
import { ProductRowActions } from './ProductsRowActions'

interface RowAction {
  icon: React.ReactNode
  tooltip: string
  onClick: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx: any
}

export interface IProduct {
  _id: string
  name: string
  description: string
  price: number
  category: string
  numberInStock: number
  lastUpdateDate: Date
  sale: number
  images: string[]
  active: boolean
}

export const getRowActions = (
  product: IProduct,
  navigate: (path: string, options: { state: IProduct }) => void
): RowAction[] => [
  {
    icon: <EditIcon fontSize="small" />,
    tooltip: 'Edit Product',
    onClick: () => {
      navigate(`edit/${product._id}`, { state: product })
    },
    sx: tableStyles.actionButton,
  },
  {
    icon: <InfoOutlinedIcon fontSize="small" />,
    tooltip: 'Product Details',
    onClick: () => {
      navigate(`details/${product._id}`, { state: product })
    },
    sx: tableStyles.actionButton,
  },
]

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 2 },
  { field: 'store', headerName: 'Store', flex: 2 },
  { field: 'category', headerName: 'Categories', flex: 2 },
  { field: 'description', headerName: 'Description', flex: 2 },
  { field: 'numberInStock', headerName: 'Amount In Stock', flex: 2 },
  { field: 'price', headerName: 'Price', flex: 2 },
  { field: 'sale', headerName: 'Sale', flex: 2 },
  { field: 'lastUdate', headerName: 'Last Update', flex: 2 },
  {
    field: 'active',
    headerName: 'Active',
    flex: 1,
    renderCell: (params) => (
      <Chip
        icon={<PowerIcon />}
        label={params.value ? 'Active' : 'Inactive'}
        sx={tableStyles.statusButton(params.value)}
      />
    ),
  },
  {
    field: 'action',
    headerName: 'Action',
    flex: 1,
    renderCell: (params) => <ProductRowActions product={params.row} />,
  },
]

export const getRows = (products: IProduct[]) => {
  return products.map((product) => ({
    id: product._id,
    _id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    numberInStock: product.numberInStock,
    sale: product.sale,
    lastUpdateDate: product.lastUpdateDate,
    active: product.active,
    images: product.images,
  }))
}
