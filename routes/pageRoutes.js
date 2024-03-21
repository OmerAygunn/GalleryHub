const express = require('express')
const pageController = require('../controllers/pageControllers')


const router = express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/register').get(pageController.getRegisterspage)
router.route('/login').get(pageController.getLoginPage)
router.route('/logout').get(pageController.getLogoutPage)




module.exports = router