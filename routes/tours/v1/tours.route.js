const express = require('express');

const Tour = require('../../../models/tour.model');
const tourControllers = require('../../../controllers/tourController/tour.controller');

const routes = express.Router();



routes
    .get('/', tourControllers.getAllTours)
    .post('/', tourControllers.addTour)

module.exports = routes;