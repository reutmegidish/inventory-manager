import {
  createProduct,
  getProductById,
  getProducts,
  updateProductById,
} from './product.service'
import { Request, Response } from 'express'
import { IProductRequest } from './product.interface'
import { Store } from '../store/store.model'
import { Category } from '../category/category.model'

export const addProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const product: IProductRequest = req.body

  try {
    const newProduct = await createProduct(product)

    res
      .status(201)
      .json({ message: 'Product created successfully', Product: newProduct })
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'An unknown error occurred' })
    }
  }
}

export const getMany = async (_req: Request, res: Response): Promise<void> => {
  try {
    const products = await getProducts()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' })
  }
}

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const {
      name,
      description,
      price,
      images,
      lastUpdateDate,
      numberInStock,
      storeId,
      categoryId,
      sale,
      active,
    } = req.body

    const updatedProduct = await updateProductById(id, req.body)

    if (!updatedProduct) {
      res.status(404).json({ message: 'product not found' })
      return
    }

    res.json({
      message: 'Product updated successfully',
      product: updatedProduct,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'Failed to update product' })
    }
  }
}

export const getOneById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { _id } = req.params
    const product = await getProductById(_id)
    const store = await Store.findById(product?.storeId)
    const category = await Category.findById(product?.categoryId)
    const fullDataProduct = {
      ...product,
      store,
      category,
    }
    res.json(fullDataProduct)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' })
  }
}
