import React, { useEffect, useState } from 'react'
import { SelectChangeEvent } from '@mui/material'
import { fetchStores } from '../../../services'
import { fetchCategories, createProduct } from '../../../services'

interface IImage {
  name: string
  url: string
}

export interface IStore {
  _id: number
  name: string
}

export interface IProductFormData {
  name: string
  description: string
  price: number | string
  images: IImage[]
  lastUpdateDate: Date
  numberInStock: string
  storeId: string
  categoryId: string
  active: boolean
}

const defaultFormData: IProductFormData = {
  name: '',
  description: '',
  price: '',
  images: [],
  lastUpdateDate: new Date(),
  numberInStock: '',
  storeId: '',
  categoryId: '',
  active: true,
}

export interface ICategory {
  _id: number
  name: string
}

export const useProductFormComponent = () => {
  const [formData, setFormData] = useState<IProductFormData>(defaultFormData)
  const [imageUrl, setImageUrl] = useState('')
  const [imageName, setImageName] = useState('')
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  })
  const [stores, setStores] = useState<IStore[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStores = async () => {
      try {
        const storeData = await fetchStores({
          searchQuery: '',
          statusFilter: 'active',
        })
        setStores(storeData)
      } catch (error) {
        setSnackbar({
          open: true,
          message: error.message || 'Error loading stores',
          severity: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    const loadCategories = async () => {
      try {
        const categoryData = await fetchCategories({
          searchQuery: '',
          statusFilter: 'active',
        })
        setCategories(categoryData)
      } catch (error) {
        setSnackbar({
          open: true,
          message: error.message || 'Error loading categories',
          severity: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    loadStores()
    loadCategories()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNumberChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: Number(value),
    }))
  }

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      active: e.target.checked,
    }))
  }

  const handleAddImage = () => {
    if (imageUrl && imageName) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, { url: imageUrl, name: imageName }],
      }))
      setImageUrl('')
      setImageName('')
    }
  }

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const resetForm = () => {
    setFormData(defaultFormData)
    setImageUrl('')
    setImageName('')
  }
  const handleChangeStore = (event: SelectChangeEvent<string>) => {
    setFormData({
      ...formData,
      storeId: event.target.value,
    })
  }

  const handleChangeCategory = (event: SelectChangeEvent<string>) => {
    setFormData({
      ...formData,
      categoryId: event.target.value,
    })
  }

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (
        !formData.name ||
        !formData.price ||
        !formData.numberInStock ||
        !formData.storeId ||
        !formData.categoryId
      ) {
        setSnackbar({
          open: true,
          message: 'Please fill in all required fields!',
          severity: 'error',
        })
        return
      }

      await createProduct(formData)

      setSnackbar({
        open: true,
        message: 'Product added successfully!',
        severity: 'success',
      })

      resetForm()
    } catch (error) {
      console.error('Error creating product:', error)
      setSnackbar({
        open: true,
        message: 'Error adding product. Please try again.',
        severity: 'error',
      })
    }
  }

  return {
    formData,
    imageUrl,
    setImageUrl,
    imageName,
    setImageName,
    snackbar,
    stores,
    categories,
    loading,
    handleChange,
    handleNumberChange,
    handleSwitchChange,
    handleAddImage,
    handleSubmit,
    handleChangeStore,
    handleCloseSnackbar,
    handleRemoveImage,
    handleChangeCategory,
  }
}
