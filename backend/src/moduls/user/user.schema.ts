import { z } from 'zod'

const emailSchema = z
  .string({ required_error: 'Email is required' })
  .email('Invalid email format')
  .max(100, 'Email is too long')
const passwordSchema = z
  .string({ required_error: 'Password is required' })
  .min(6, 'Password must be at least 6 characters')
  .max(16, 'Password is too long')
  .regex(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
    'Password must contain at least one letter and one number'
  )

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const addUserSchema = loginSchema
  .extend({
    name: z
      .string({ required_error: 'Name is required' })
      .min(2, 'Name is too short')
      .max(50, 'Name is too long'),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    role: z.enum(['admin', 'employee', 'buyer'], {
      required_error: 'Role is required',
    }),

    address: z.string().optional(),
    phone: z
      .string()
      .optional()
      .refine((val) => !val || /^(05\d{8})$/.test(val), 'Invalid phone number'),

    active: z.boolean({
      required_error: 'Active status is required',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
