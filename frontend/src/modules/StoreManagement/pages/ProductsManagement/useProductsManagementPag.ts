import { useEffect, useState } from 'react'
import { fetchProducts } from '../../../../services'
import { IProduct } from './utils/ProductsTableConfig'

export const useProductsManagementPag = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [roleFilter, setRoleFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('active')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [isOnRefresh, setIsOnRefresh] = useState<boolean>(true)
  const [isTriggerFetch, setIsTriggerFetch] = useState<boolean>(false)
  const [isInit, setIsInit] = useState<boolean>(false)

  interface LoadProductsProps {
    searchQuery: string
    roleFilter: string
    statusFilter: string
  }

  const loadProducts = async ({
    searchQuery,
    roleFilter,
    statusFilter,
  }: LoadProductsProps) => {
    setLoading(true)
    try {
      const fetchedProducts = await fetchProducts({
        searchQuery,
        roleFilter,
        statusFilter,
      })
      setError('')
      return fetchedProducts
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error fetching Products:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isInit && !isTriggerFetch && !isOnRefresh) return

    const fetchAndSetProducts = async () => {
      const fetchedProducts = await loadProducts({
        searchQuery,
        roleFilter,
        statusFilter,
      })
      if (fetchedProducts) setProducts(fetchedProducts)
      if (isTriggerFetch) setIsTriggerFetch(false)
      if (isInit) setIsInit(false)
      if (isOnRefresh) setIsOnRefresh(false)
    }
    fetchAndSetProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInit, isTriggerFetch, isOnRefresh])

  useEffect(() => {
    setIsInit(true)
  }, [])

  return {
    products,
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
