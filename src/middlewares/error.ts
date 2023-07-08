import httpStatus from 'http-status'
import ApiError from '../utils/ApiError'
import { type Request, type Response, type NextFunction } from 'express'
import config from '../configs/config'

const errorConverter = (err: any, req: Request, res: Response, next: NextFunction): void => {
  let error = err;
  if (!(error instanceof ApiError)) {
    let statusCode = error.statusCode
    if (statusCode === undefined) {
      statusCode = httpStatus.INTERNAL_SERVER_ERROR
    }

    let message = error.message
    if (message === undefined) {
      message = httpStatus[statusCode]
    }

    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

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

  res.status(statusCode).send(response)
}

export { errorHandler, errorConverter }
