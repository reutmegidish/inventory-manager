import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Tooltip } from '@mui/material'
import { getRowActions } from './categoriesTableConfig'
import { ICategories } from '../ICategories.interface'

interface ICategoriesRowActionsProps {
  category: ICategories
}

export const CategoriesRowActions: React.FC<ICategoriesRowActionsProps> = ({
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
