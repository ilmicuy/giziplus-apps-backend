const Tour = require("../model/tourModel");

const getAllTours = async (req, res) => {
  const tours = await Tour.find();

  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
};

//fungsi get tour
const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      staus: "fail",
      message: error,
    });
  }
};

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      staus: "fail",
      message: error,
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      staus: "fail",
      message: error,
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    Tour.findByIdAndDelete(req.params.id);

    res.status(202).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      staus: "fail",
      message: error,
    });
  }
};

module.exports = {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
};
