import { createProduct, getProduct, updateProductById } from './product.service'
import { Request, Response } from 'express'
import { IProduct, IProductRequest } from './product.interface'

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
    const category = await getProduct()
    res.json(category)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category' })
  }
}

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const { name, active } = req.body

    if (!name) {
      res.status(400).json({ message: 'Missing required fields' })
      return
    }

    const updatedProduct = await updateProductById(id, {
      name,
      active,
    })

    if (!updatedProduct) {
      res.status(404).json({ message: 'category not found' })
      return
    }

    res.json({
      message: 'Product updated successfully',
      category: updatedProduct,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'Failed to update category' })
    }
  }
}
