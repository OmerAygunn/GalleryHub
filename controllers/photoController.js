const Photo = require('../models/photoModels')

exports.createPhoto = async (req, res) => {
    try {
        const photo = await Photo.create(req.body);
        res.status(200).redirect('/')
    } catch (err) {
        console.error(err);
        res.status(500).render('error', {
            status: 'error',
            message: 'Error occurred while creating photo'
        });
    }
};


exports.getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find();
        res.status(200).render('photos', { photos });
    } catch (err) {
        console.error(err);
        res.status(500).render('error', {
            status: 'error',
            message: 'Error occurred while fetching photos'
        });
    }
};
