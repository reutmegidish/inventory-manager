import React from 'react'
import DataTable from '../DataTable'

import { useUserTable } from './useUserTable'
import { columns, getRows } from './userTableConfig'
import UsersHeader from '../../DashboardHeader/UsersHeader'

const UserTable = () => {
  const { users, loading, error } = useUserTable()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <UsersHeader />
      <DataTable columns={columns} rows={getRows(users)} />
    </>
  )
}

export default UserTable
