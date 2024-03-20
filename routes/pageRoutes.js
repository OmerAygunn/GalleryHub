const express = require('express')
const pageController = require('../controllers/pageControllers')
const userMiddlewares = require('../middlewares/userMiddlewares')


const router = express.Router()

router.route('/').get(userMiddlewares.authenticateToken,pageController.getIndexPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/register').get(pageController.getRegisterspage)
router.route('/login').get(pageController.getLoginPage)




module.exports = router