class ApiError extends Error {
  public readonly statusCode: number
  public readonly isOperational: boolean = true
  constructor(statusCode: number, message: string, isOperational?: boolean, stack?: string) {
    super(message)
    this.statusCode = statusCode

    if (isOperational !== undefined) {
      this.isOperational = isOperational
    }

    if (stack !== undefined) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export default ApiError
