export type Creatable<T> = Omit<T, '_id' | 'createdAt' | 'updatedAt'>
