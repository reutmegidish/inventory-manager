import { IGetStoreParams } from './store.interface'
import { createStore, getStore, updateStoreById } from './store.service'
import { Request, Response } from 'express'

export const addStore = async (req: Request, res: Response): Promise<void> => {
  const { name, address, active } = req.body

  try {
    const newStore = await createStore(name, address, active)

    res
      .status(201)
      .json({ message: 'Store created successfully', Store: newStore })
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'An unknown error occurred' })
    }
  }
}

export const getMany = async (_req: Request, res: Response): Promise<void> => {
  const { name, active } = _req.query as IGetStoreParams
  try {
    const store = await getStore({ name, active })
    res.json(store)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching store' })
  }
}

export const updateStore = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const { name, address, active } = req.body

    if (!name) {
      res.status(400).json({ message: 'Missing required fields' })
      return
    }

    const updatedStore = await updateStoreById(id, {
      name,
      address,
      active,
    })

    if (!updatedStore) {
      res.status(404).json({ message: 'store not found' })
      return
    }

    res.json({
      message: 'Store updated successfully',
      store: updatedStore,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'Failed to update store' })
    }
  }
}
