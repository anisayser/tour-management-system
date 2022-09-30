const express = require('express');

const Tour = require('../../../models/tour.model');
const tourControllers = require('../../../controllers/tourController/tour.controller');

const routes = express.Router();


routes.route('/cheapest').get(tourControllers.cheapestTour);
routes.route('/trending').get(tourControllers.trendingTours)

routes.route('/')
    .get(tourControllers.getAllTours)
    .post(tourControllers.addTour);


routes.route('/:id').get(tourControllers.getATourById).patch(tourControllers.updateTourById)

module.exports = routes;