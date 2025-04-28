import bcrypt from 'bcrypt'

export const hashValue = async (
  value: string,
  saltRounds?: number
): Promise<string> => bcrypt.hash(value, saltRounds || 10)

export const compareValue = async (
  value: string,
  hashedValue: string
): Promise<boolean> => bcrypt.compare(value, hashedValue).catch(() => false)
