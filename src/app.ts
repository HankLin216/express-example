import express from 'express'
import cors from 'cors'
import routes from './routes/v1'
import ApiError from './utils/ApiError'
import httpStatus from 'http-status'
import { errorHandler } from './middlewares/error'

const app = express()

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// enable cors
app.use(cors())
app.options('*', cors())

// v1 api routes
app.use('/v1', routes)

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
})

// handle error
app.use(errorHandler)

export default app
