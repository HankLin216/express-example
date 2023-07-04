import app from './app'
import dotenv from 'dotenv'

const envFile = `./src/configs/.env.${process.env.NODE_ENV}`
dotenv.config({ path: envFile })

const server = app.listen(process.env.PORT, () => {
  console.log(`Server start listening at ${process.env.PORT} port...`)
})

const exitHandler = (): void => {
  if (server !== undefined) {
    server.close(() => {
      console.log('Server closed')
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error: unknown): void => {
  console.log(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  console.log('SIGTERM received')
  if (server !== undefined) {
    server.close()
  }
})
