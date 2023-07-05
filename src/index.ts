import app from './app'
import config from './configs/config'

const server = app.listen(config.port, () => {
  console.log(`Server start listening at ${config.port} port...`)
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
