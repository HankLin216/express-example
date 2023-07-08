import express from 'express'
import { userController } from '../../controllers'

const router = express.Router()

router.route('/').get((req, res, next) => {
  userController.getUsers(req, res, next)
})

router.route('/:userId').get((req, res, next) => {
  userController.getUser(req, res, next)
})

export default router
