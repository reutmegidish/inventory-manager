import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Tooltip } from '@mui/material'
import { getRowActions } from './StoreTableConfig'

export interface IStore {
  id: string
  name: string
  adress: string
  active: boolean
}

interface StoreRowActionsProps {
  Store: IStore
}

export const StoreRowActions: React.FC<StoreRowActionsProps> = ({ Store }) => {
  const navigate = useNavigate()

  return (
    <Box>
      {getRowActions(Store, navigate).map((action, index) => (
        <Tooltip key={index} title={action.tooltip}>
          <IconButton onClick={action.onClick} size="small" sx={action.sx}>
            {action.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  )
}
