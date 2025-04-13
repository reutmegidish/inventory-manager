import { Product } from './product.model'
import { IProduct, IProductRequest } from './product.interface'

export const createProduct = async (
  product: IProductRequest
): Promise<IProductRequest> => {
  const existingProduct = await Product.findOne({ _id: product._id })
  if (existingProduct) {
    throw new Error('Product ID already exists')
  }

  const newProduct = new Product(product)
  await newProduct.save()
  return newProduct
}

export const getProducts = async (): Promise<IProductRequest[]> => {
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
): Promise<IProductRequest | null> => {
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

export const getProductById = async (
  id: string
): Promise<IProductRequest | null> => {
  try {
    const product = await Product.findById(id)
    return product
  } catch (error) {
    console.error('Error in getProduct:', error)
    throw error
  }
}
