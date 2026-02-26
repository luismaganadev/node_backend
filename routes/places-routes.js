const express = require('express');
const { check } = require('express-validator');

const placesController = require('../controllers/places');

const HttpError = require('../models/http-errors');

const router = express.Router();

router.get('/:pid', placesController.getPlaceById);

router.get('/user/:uid', placesController.getPlacesByUserId);

router.post(
    '/',
    [
        check('title')
            .not()
            .isEmpty(),
        check('description').isLength({ min: 5 }),
        check('address')
            .not()
            .isEmpty()
    ],
    placesController.createPlace
);

router.patch('/:pid', 
    [
        check('title')
            .not()
            .isEmpty(),
        check('description').isLength({ min: 5 }),
    ], 
    placesController.updatePLaceById
);

router.delete('/:pid', placesController.deletePlace);

module.exports = router;