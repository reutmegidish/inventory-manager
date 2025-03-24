import { useEffect, useState } from 'react'
import { ICategories } from './ICategories.interface'
import { fetchCategories } from '../../../../services'

export const useCategoriesManagementPage = () => {
  const [Categories, setCategories] = useState<ICategories[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [statusFilter, setStatusFilter] = useState<string>('active')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [isOnRefresh, setIsOnRefresh] = useState<boolean>(true)
  const [isTriggerFetch, setIsTriggerFetch] = useState<boolean>(false)
  const [isInit, setIsInit] = useState<boolean>(false)

  interface ILoadCategoriesProps {
    searchQuery: string
    statusFilter: string
  }

  const loadCategories = async ({
    searchQuery,
    statusFilter,
  }: ILoadCategoriesProps) => {
    setLoading(true)
    try {
      const fetchedCategories = await fetchCategories({
        searchQuery,
        statusFilter,
      })
      setError('')
      return fetchedCategories
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error fetching Categories:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isInit && !isTriggerFetch && !isOnRefresh) return

    const fetchAndSetCategories = async () => {
      const fetchedCategories = await loadCategories({
        searchQuery,
        statusFilter,
      })
      if (fetchedCategories) setCategories(fetchedCategories)
      if (isTriggerFetch) setIsTriggerFetch(false)
      if (isInit) setIsInit(false)
      if (isOnRefresh) setIsOnRefresh(false)
    }
    fetchAndSetCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInit, isTriggerFetch, isOnRefresh])

  useEffect(() => {
    setIsInit(true)
  }, [])

  return {
    Categories,
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
