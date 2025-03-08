import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Tooltip } from '@mui/material'
import { getRowActions } from './StoreTableConfig'
import { IStore } from '../IStore.interface'

interface IStoreRowActionsProps {
  store: IStore
}

export const StoreRowActions: React.FC<IStoreRowActionsProps> = ({ store }) => {
  const navigate = useNavigate()

  return (
    <Box>
      {getRowActions(store, navigate).map((action, index) => (
        <Tooltip key={index} title={action.tooltip}>
          <IconButton onClick={action.onClick} size="small" sx={action.sx}>
            {action.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  )
}
