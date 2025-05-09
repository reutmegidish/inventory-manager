import { useEffect, useState } from 'react'

interface ManagementPageProps<T> {
  fetchData: ({
    searchQuery,
    roleFilter,
    statusFilter,
  }: LoadUsersProps) => Promise<T[]>
  initialRoleFilter?: string
}

interface LoadUsersProps {
  searchQuery: string
  roleFilter?: string | undefined
  statusFilter: string
}

export const useManagementPage = <T>({
  fetchData,
  initialRoleFilter = undefined,
}: ManagementPageProps<T>) => {
  const [data, setData] = useState<T[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [statusFilter, setStatusFilter] = useState<string>('active')
  const [roleFilter, setRoleFilter] = useState<string | undefined>(
    initialRoleFilter
  )
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [isOnRefresh, setIsOnRefresh] = useState<boolean>(true)
  const [isTriggerFetch, setIsTriggerFetch] = useState<boolean>(false)
  const [isInit, setIsInit] = useState<boolean>(false)

  const loadData = async ({
    searchQuery,
    roleFilter,
    statusFilter,
  }: LoadUsersProps) => {
    setLoading(true)
    try {
      const fetchedData = await fetchData({
        searchQuery,
        statusFilter,
        roleFilter,
      })
      setError('')
      return fetchedData
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error fetching data:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isInit && !isTriggerFetch && !isOnRefresh) return

    const fetchAndSetData = async () => {
      const fetchedData = await loadData({
        searchQuery,
        roleFilter,
        statusFilter,
      })
      if (fetchedData) setData(fetchedData)
      if (isTriggerFetch) setIsTriggerFetch(false)
      if (isInit) setIsInit(false)
      if (isOnRefresh) setIsOnRefresh(false)
    }
    fetchAndSetData()
  }, [isInit, isTriggerFetch, isOnRefresh])

  useEffect(() => {
    setIsInit(true)
  }, [])

  return {
    data,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    roleFilter,
    setRoleFilter,
    loading,
    error,
    isTriggerFetch,
    setIsTriggerFetch,
    isOnRefresh,
    setIsOnRefresh,
  }
}
