const express = require('express')
const photoController = require('../controllers/photoController')
const userMiddlewares = require('../middlewares/userMiddlewares')

const router = express.Router();

router.route('/').post(photoController.createPhoto)
router.route('/').get( userMiddlewares.authenticateToken, photoController.getAllPhotos)
router.route('/single/:slug').get( userMiddlewares.authenticateToken, photoController.getPhoto)

module.exports = router