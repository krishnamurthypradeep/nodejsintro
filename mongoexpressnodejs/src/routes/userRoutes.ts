import express from 'express'

import userRoutes from '../service/userService'

const router = express.Router()
router.route('/').post(userRoutes.registerUser)
router.route('/login').post(userRoutes.loginUser)

export default router