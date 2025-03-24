import { useEffect, useState } from 'react'
import { IStore } from './IStore.interface'
import { fetchStores } from '../../../../services'

export const useStoreManagementPage = () => {
  const [Store, setStore] = useState<IStore[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [statusFilter, setStatusFilter] = useState<string>('active')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [isOnRefresh, setIsOnRefresh] = useState<boolean>(true)
  const [isTriggerFetch, setIsTriggerFetch] = useState<boolean>(false)
  const [isInit, setIsInit] = useState<boolean>(false)

  interface ILoadStoreProps {
    searchQuery: string
    statusFilter: string
  }

  const loadStore = async ({ searchQuery, statusFilter }: ILoadStoreProps) => {
    setLoading(true)
    try {
      const fetchedStore = await fetchStores({
        searchQuery,
        statusFilter,
      })
      setError('')
      return fetchedStore
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error fetching Store:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isInit && !isTriggerFetch && !isOnRefresh) return

    const fetchAndSetStore = async () => {
      const fetchedStore = await loadStore({
        searchQuery,
        statusFilter,
      })
      if (fetchedStore) setStore(fetchedStore)
      if (isTriggerFetch) setIsTriggerFetch(false)
      if (isInit) setIsInit(false)
      if (isOnRefresh) setIsOnRefresh(false)
    }
    fetchAndSetStore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInit, isTriggerFetch, isOnRefresh])

  useEffect(() => {
    setIsInit(true)
  }, [])

  return {
    Store,
    searchQuery,
    setSearchQuery,
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
