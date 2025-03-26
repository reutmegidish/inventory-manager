import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Tooltip } from '@mui/material'
import { getRowActions } from './ProductsTableConfig'
import { IProduct } from './ProductsTableConfig'

interface ProductRowActionsProps {
  product: IProduct
}

export const ProductRowActions: React.FC<ProductRowActionsProps> = ({
  product,
}) => {
  const navigate = useNavigate()
  return (
    <Box>
      {getRowActions(product, navigate).map((action, index) => (
        <Tooltip key={index} title={action.tooltip}>
          <IconButton onClick={action.onClick} size="small" sx={action.sx}>
            {action.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  )
}
