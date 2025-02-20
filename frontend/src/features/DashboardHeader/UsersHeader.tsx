import React from 'react'
import DashboardHeader from './DashboardHeader'
import { Group as GroupIcon } from '@mui/icons-material'
import { fetchUsers } from '../../serviecs/userService'

const UsersHeader: React.FC = () => {
  return (
    <DashboardHeader
      title="User Management"
      icon={<GroupIcon />}
      onRefresh={fetchUsers}
    />
  )
}

export default UsersHeader
