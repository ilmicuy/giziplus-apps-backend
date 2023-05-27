const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require('../controller/tourController');

const router = express.Router();

router.route('/').get(getAllTours);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

router.route('/create').post(createTour);

module.exports = router;
