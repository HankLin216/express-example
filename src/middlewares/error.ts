import httpStatus from 'http-status'
import type ApiError from '../utils/ApiError'
import { type Request, type Response, type NextFunction } from 'express'
import config from '../configs/config'

const errorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction): void => {
  let { statusCode, message } = err
  if (config.env === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR]
  }

  res.locals.errorMessage = err.message

  const response = {
    code: statusCode,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  }

  if (config.env === 'development') {
    console.log(err)
  }

  res.status(statusCode).send(response)
}

export { errorHandler }
