import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Tooltip } from '@mui/material'
import { getRowActions } from './userTableConfig'

export interface IUser {
  id: string
  name: string
  email: string
  role: 'admin' | 'employee' | 'buyer'
  active: boolean
  employeeFields?: Array<{ store: string }>
  buyerFields?: {
    address: string | null
    phone: string | null
  }
}

interface UserRowActionsProps {
  user: IUser
}

export const UserRowActions: React.FC<UserRowActionsProps> = ({ user }) => {
  const navigate = useNavigate()

  return (
    <Box>
      {getRowActions(user, navigate).map((action, index) => (
        <Tooltip key={index} title={action.tooltip}>
          <IconButton onClick={action.onClick} size="small" sx={action.sx}>
            {action.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  )
}
