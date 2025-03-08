import {
  createCategory,
  getCategory,
  updateCategoryById,
} from './category.service'
import { Request, Response } from 'express'
import { IGetCategoryParams } from './categoy.interface'

export const addCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, mainCategoryId, active } = req.body

  try {
    const newCategory = await createCategory(name, mainCategoryId, active)

    res
      .status(201)
      .json({ message: 'Category created successfully', Category: newCategory })
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
    const { name, active } = _req.query as IGetCategoryParams
    const category = await getCategory({ name, active })
    res.json(category)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category' })
  }
}

export const updateCategory = async (
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

    const updatedCategory = await updateCategoryById(id, {
      name,
      active,
    })

    if (!updatedCategory) {
      res.status(404).json({ message: 'category not found' })
      return
    }

    res.json({
      message: 'Category updated successfully',
      category: updatedCategory,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'Failed to update category' })
    }
  }
}
