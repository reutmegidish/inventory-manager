import { Product } from './product.model'
import { IProduct, IProductRequest } from './product.interface'
import { Store } from '../store/store.model'
import { Category } from '../category/category.model'

export const createProduct = async (
  product: IProductRequest
): Promise<IProduct> => {
  const existingProduct = await Product.findOne({ name: product.name })
  if (existingProduct) {
    throw new Error('Product Name already exists') // TODO: HANDLE ERR
  }

  const store = await Store.findById(product.storeId)
  const category = await Category.findById(product.categoryId)
  const fullDataProduct = {
    ...product,
    store,
    category,
  }
  const newProduct = new Product(fullDataProduct)

  await newProduct.save()
  return newProduct
}

export const getProduct = async (): Promise<IProduct[]> => {
  try {
    return await Product.find({})
  } catch (error) {
    console.error('Error in getProduct:', error)
    throw error
  }
}

export const updateProductById = async (
  id: string,
  updateData: Partial<IProduct>
): Promise<IProduct | null> => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    )

    return updatedProduct
  } catch (error) {
    console.error('Error in updateProductById:', error)
    throw error
  }
}
