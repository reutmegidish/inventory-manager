import { useEffect, useState } from 'react'
import { fetchStore } from '../../../serviecs/storeService'

interface ICategory {
  _id: string
  name: string
  mainCategory: string
}

export const useStoreTable = () => {
  const [Store, setStore] = useState<ICategory[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const loadStore = async () => {
    try {
      const fetchedStore = await fetchStore()
      setStore(fetchedStore)
      setError('')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadStore()
  }, [])

  return {
    Store,
    loading,
    error,
  }
}
