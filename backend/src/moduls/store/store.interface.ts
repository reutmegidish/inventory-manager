export interface IStore {
  _id: string
  name: string
  address: string
  active: boolean
}

export interface IGetStoreParams {
  name?: string
  active?: string
}
