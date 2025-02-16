import { useState, useEffect, useMemo } from 'react'
import {
  IUser,
  OrderBy,
  Order,
  FilterRole,
} from '../components/UserManagement/UserManagement.interface'
import { fetchUsers } from '../serviecs/userService'

export const useUserManagement = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<OrderBy>('name')
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState<FilterRole>('all')
  const [statusFilter, setStatusFilter] = useState<
    'all' | 'active' | 'inactive'
  >('all')

  const loadUsers = async () => {
    try {
      const fetchedUsers = await fetchUsers()
      setUsers(fetchedUsers)
      setError('')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    loadUsers()
  }, [])

  const handleRequestSort = (property: OrderBy) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const filteredAndSortedUsers = useMemo(() => {
    return [...users]
      .filter((user) => {
        const matchesSearch =
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesRole = roleFilter === 'all' || user.role === roleFilter
        const matchesStatus =
          statusFilter === 'all' ||
          (statusFilter === 'active' ? user.active : !user.active)
        return matchesSearch && matchesRole && matchesStatus
      })
      .sort((a, b) => {
        let aValue = a[orderBy]
        let bValue = b[orderBy]

        if (order === 'desc') {
          ;[aValue, bValue] = [bValue, aValue]
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue)
        }

        if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
          return aValue === bValue ? 0 : aValue ? -1 : 1
        }

        return 0
      })
  }, [users, order, orderBy, searchQuery, roleFilter, statusFilter])

  return {
    users: filteredAndSortedUsers,
    loading,
    error,
    order,
    orderBy,
    searchQuery,
    roleFilter,
    statusFilter,
    handleRequestSort,
    setSearchQuery,
    setRoleFilter,
    setStatusFilter,
    loadUsers,
  }
}
