import React from 'react'
import DataTable from '../DataTable'
import { Group as GroupIcon } from '@mui/icons-material'
import { useUserTable } from './useUserTable'
import { columns, getRows } from './userTableConfig'
import DashboardHeader from '../../DashboardHeader/DashboardHeader'
import { fetchUsers } from '../../../serviecs/userService'

const UserTable = () => {
  const { users, loading, error } = useUserTable()
  const [user, setUser] = React.useState(null)

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error}</div>
  ) : user ? (
    <>update</>
  ) : (
    <>
      <DashboardHeader
        title="User Management"
        icon={<GroupIcon />}
        onRefresh={fetchUsers}
      />
      <DataTable columns={columns} rows={getRows(users)} />
    </>
  )
}

export default UserTable
