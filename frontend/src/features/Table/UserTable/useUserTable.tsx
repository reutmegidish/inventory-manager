import { useEffect, useState } from 'react'
import { fetchUsers } from '../../../serviecs/userService'

interface IUser {
  _id: string
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

export const useUserTable = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [isInit, setIsInit] = useState<boolean>(false)

  const loadUsers = async () => {
    try {
      const fetchedUsers = await fetchUsers()
      setUsers(fetchedUsers)
      setError('')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isInit) {
      loadUsers()
    }
  }, [isInit])

  useEffect(() => {
    setIsInit(true)
  }, [])

  return {
    users,
    loading,
    error,
  }
}
