import { Schema, model } from 'mongoose'
import { IUser } from './user.interface'
import { compareValue, hashValue } from '../../utils/bcrypt'
export interface UserDocument extends IUser, Document {
  comparePassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ['admin', 'employee', 'buyer'],
      required: true,
    },
    address: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password
        delete ret.__v
        return ret
      },
    },
  }
)

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hashValue(this.password)
  }
  next()
})

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return compareValue(password, this.password)
}

export const User = model<UserDocument>('User', userSchema)
