import { useEffect, useState } from 'react'
import { fetchCategories } from '../../../serviecs/categoriesService'

interface ICategory {
  _id: string
  name: string
  mainCategory: string
}

export const useCategoriesTable = () => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const loadCategories = async () => {
    try {
      const fetchedCategories = await fetchCategories()
      setCategories(fetchedCategories)
      setError('')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCategories()
  }, [])

  return {
    categories,
    loading,
    error,
  }
}
