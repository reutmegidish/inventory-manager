import { z } from 'zod'
import { ErrorRequestHandler, Response } from 'express'
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../constants/http'
import { IAppError } from '../utils/AppError'

const handleZodError = (res: Response, error: z.ZodError) => {
  const errors = error.issues.map((err) => ({
    path: err.path.join('.'),
    message: err.message,
    code: err.code,
  }))

  res.status(BAD_REQUEST).json({
    message: error.message,
    errors,
  })
}

const handleAppError = (res: Response, error: IAppError) => {
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.statusCode,
  })
}

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(`PATH: ${req.path}`, error)
  if (error instanceof z.ZodError) {
    return handleZodError(res, error)
  }
  if (error.name === 'AppError') {
    return handleAppError(res, error)
  }

  res.status(INTERNAL_SERVER_ERROR).send('Internal Server Error')
}
