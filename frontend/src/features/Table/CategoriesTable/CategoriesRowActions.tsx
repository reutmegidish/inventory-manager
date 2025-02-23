import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Tooltip } from '@mui/material'
import { getRowActions } from './CategoriesTableConfig'

export interface ICategory {
  id: string
  name: string
  description: string
  active: boolean
}

interface CategoryRowActionsProps {
  category: ICategory
}

export const CategoryRowActions: React.FC<CategoryRowActionsProps> = ({
  category,
}) => {
  const navigate = useNavigate()

  return (
    <Box>
      {getRowActions(category, navigate).map((action, index) => (
        <Tooltip key={index} title={action.tooltip}>
          <IconButton onClick={action.onClick} size="small" sx={action.sx}>
            {action.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  )
}
