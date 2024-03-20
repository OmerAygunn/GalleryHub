const express = require('express')
const userController = require('../controllers/userController')
const userMiddlewares = require('../middlewares/userMiddlewares')

const router = express.Router()

router.route('/register').post( userController.createUser)
router.route('/login').post(userController.loginUser)
router.route('/dashboard').get( userMiddlewares.authenticateToken,userController.getDashboard)


module.exports = router