import { NextFunction, Request, Response } from 'express'

type IAsyncController = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>

export const catchErrors =
  (controller: IAsyncController): IAsyncController =>
  async (req, res, next) => {
    try {
      await controller(req, res, next)
    } catch (error) {
      next(error)
    }
  }
