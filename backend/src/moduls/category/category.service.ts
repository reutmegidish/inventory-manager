import { Category } from './category.model'
import { ICategory } from './categoy.interface'

export const createCategory = async (
  name: string,
  mainCategoryId: string,
  active: boolean = true
): Promise<ICategory> => {
  const existingCategory = await Category.findOne({ name })
  if (existingCategory) {
    throw new Error('Category Name already exists') // TODO: HANDLE ERR
  }

  const newCategory = new Category({
    name,
    active,
    mainCategoryId,
  })

  await newCategory.save()
  return newCategory
}

export const getCategory = async (): Promise<ICategory[]> => {
  try {
    return await Category.find({})
  } catch (error) {
    console.error('Error in getCategory:', error)
    throw error
  }
}

export const updateCategoryById = async (
  id: string,
  updateData: Partial<ICategory>
): Promise<ICategory | null> => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    )

    return updatedCategory
  } catch (error) {
    console.error('Error in updateCategoryById:', error)
    throw error
  }
}
