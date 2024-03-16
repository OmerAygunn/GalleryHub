const Photo = require('../models/photoModels')

exports.createPhoto = async(req,res) => {
    const photo = await Photo.create(req.body)
    
}