import { useEffect, useState } from 'react'
import { User } from './utils/userTableConfig'
import { fetchUsers } from '../../../../services'

export const useUserManagementPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [roleFilter, setRoleFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('active')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [isOnRefresh, setIsOnRefresh] = useState<boolean>(true)
  const [isTriggerFetch, setIsTriggerFetch] = useState<boolean>(false)
  const [isInit, setIsInit] = useState<boolean>(false)

  interface LoadUsersProps {
    searchQuery: string
    roleFilter: string
    statusFilter: string
  }

  const loadUsers = async ({
    searchQuery,
    roleFilter,
    statusFilter,
  }: LoadUsersProps) => {
    setLoading(true)
    try {
      const fetchedUsers = await fetchUsers({
        searchQuery,
        roleFilter,
        statusFilter,
      })
      setError('')
      return fetchedUsers
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error fetching users:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isInit && !isTriggerFetch && !isOnRefresh) return

    const fetchAndSetUsers = async () => {
      const fetchedUsers = await loadUsers({
        searchQuery,
        roleFilter,
        statusFilter,
      })
      if (fetchedUsers) setUsers(fetchedUsers)
      if (isTriggerFetch) setIsTriggerFetch(false)
      if (isInit) setIsInit(false)
      if (isOnRefresh) setIsOnRefresh(false)
    }
    fetchAndSetUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInit, isTriggerFetch, isOnRefresh])

  useEffect(() => {
    setIsInit(true)
  }, [])

  return {
    users,
    searchQuery,
    setSearchQuery,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    loading,
    error,
    isTriggerFetch,
    setIsTriggerFetch,
    isOnRefresh,
    setIsOnRefresh,
  }
}
