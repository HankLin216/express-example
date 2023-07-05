import dotenv from 'dotenv'
import path from 'path'
import Joi from 'joi'

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) })
}

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development').required(),
    PORT: Joi.number().default(3000),
  })
  .unknown()

const { value, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env)

if (error != null) {
  throw new Error(`Config validation error: ${error.message}`)
}

interface IConfig {
  env: string
  port: number
}

const config: IConfig = {
  env: value.NODE_ENV,
  port: value.PORT,
}
export default config
