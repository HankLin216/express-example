import express from 'express'
import { userController } from '../../controllers'

const router = express.Router()

router.route('/').get((req, res) => {
  void userController.getUsers(req, res)
})

export default router
