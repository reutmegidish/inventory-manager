import assert from 'node:assert'
import AppErrorCode from '../constants/appErrorCode'
import { HttpStatusCode } from '../constants/http'
import { createAppError } from './AppError'

type IAppAssert = (
  condition: any,
  httpStatusCode: HttpStatusCode,
  message: string,
  appErrorCode?: AppErrorCode
) => asserts condition

export const appAssert: IAppAssert = (
  condition,
  HttpStatusCode,
  message,
  appErrorCode
) => {
  const error = createAppError({
    statusCode: HttpStatusCode,
    message,
    errorCode: appErrorCode,
  })

  assert(condition, error)
}
