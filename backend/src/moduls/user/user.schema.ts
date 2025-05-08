import { z } from 'zod'

const email = z
  .string({ required_error: 'Email is required' })
  .email('Invalid email format')
  .max(100, 'Email is too long')

const password = z
  .string({ required_error: 'Password is required' })
  .min(6, 'Password must be at least 6 characters')
  .max(16, 'Password is too long')
  .regex(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
    'Password must contain at least one letter and one number'
  )

const confirmPassword = password

const name = z
  .string({ required_error: 'Name is required' })
  .min(2, 'Name is too short')
  .max(50, 'Name is too long')
  .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')

const role = z.enum(['admin', 'employee', 'buyer'], {
  required_error: 'Role is required',
})

const address = z.string().optional()

const phone = z
  .string()
  .regex(/^(05\d{8})$/, 'Invalid phone number')
  .optional()

const active = z.boolean({
  required_error: 'Active status is required',
})

const id = z
  .string({ required_error: 'ID is required' })
  .length(24, 'Invalid ID format')

const errObjConfirmPassword = {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
}

const checkPasswordsMatch = (password: string, confirmPassword: string) => {
  return password === confirmPassword ? true : false
}

export const baseUserSchema = z.object({
  password,
  confirmPassword,
  email,
  name,
  role,
  address,
  phone,
  active,
})

export const addUserSchema = baseUserSchema.superRefine((data, ctx) => {
  const { password, confirmPassword } = data

  if (!!password && !!confirmPassword) {
    const isPasswordsMatch = checkPasswordsMatch(password, confirmPassword)
    if (!isPasswordsMatch) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: errObjConfirmPassword.message,
        path: errObjConfirmPassword.path,
      })
    }
  }
})

export const updateUserSchema = baseUserSchema
  .partial()
  .extend({ id })
  .superRefine((data, ctx) => {
    const { password, confirmPassword } = data

    if (!!password && !!confirmPassword) {
      const isPasswordsMatch = checkPasswordsMatch(password, confirmPassword)
      if (!isPasswordsMatch) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: errObjConfirmPassword.message,
          path: errObjConfirmPassword.path,
        })
      }
    }
  })
