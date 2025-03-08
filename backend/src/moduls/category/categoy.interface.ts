export interface ICategory {
  _id: string
  name: string
  mainCategoryId: string
  active: boolean
}

export interface IGetCategoryParams {
  name?: string
  active?: string
}
