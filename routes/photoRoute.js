const express = require('express')
const photoController = require('../controllers/photoController')

const router = express.Router();

router.route('/').post(photoController.createPhoto)
router.route('/').get(photoController.getAllPhotos)
router.route('/single/:slug').get(photoController.getPhoto)

module.exports = router