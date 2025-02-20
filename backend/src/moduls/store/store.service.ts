import { IStore } from './store.interface'
import { Store } from './store.model'

export const createStore = async (
  name: string,
  branchName: string,
  address: string,
  active: boolean = true
): Promise<IStore> => {
  const existingStore = await Store.findOne({ name })
  if (existingStore) {
    throw new Error('Store Name already exists') // TODO: HANDLE ERR
  }

  const newStore = new Store({
    name,
    branchName,
    address,
    active,
  })

  await newStore.save()
  return newStore
}

export const getStore = async (): Promise<IStore[]> => {
  try {
    return await Store.find({})
  } catch (error) {
    console.error('Error in getStore:', error)
    throw error
  }
}

export const updateStoreById = async (
  id: string,
  updateData: Partial<IStore>
): Promise<IStore | null> => {
  try {
    const updatedStore = await Store.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    )

    return updatedStore
  } catch (error) {
    console.error('Error in updateStoreById:', error)
    throw error
  }
}
