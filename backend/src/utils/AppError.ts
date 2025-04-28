import AppErrorCode from '../constants/appErrorCode.js'
import { HttpStatusCode } from '../constants/http.js'

interface IErrorParams {
  statusCode: HttpStatusCode
  message: string
  errorCode?: AppErrorCode | null
}

export interface IAppError extends IErrorParams, Error {
  name: string
}

export const createAppError = ({
  statusCode,
  message,
  errorCode,
}: IErrorParams): IAppError => {
  const appError: IAppError = new Error(message) as IAppError
  appError.statusCode = statusCode
  appError.errorCode = errorCode || null
  appError.name = 'AppError'
  return appError
}

