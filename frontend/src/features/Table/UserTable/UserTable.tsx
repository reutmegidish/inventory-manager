import React from 'react'
import DataTable from '../DataTable'

import { useUserTable } from './useUserTable'
import { columns, getRows } from './userTableConfig'
import UsersHeader from '../../DashboardHeader/UsersHeader'

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
      <UsersHeader />
      <DataTable columns={columns} rows={getRows(users)} />
    </>
  )
}

export default UserTable
