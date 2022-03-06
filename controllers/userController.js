const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getOneById = Model => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.getOneById(req.params.id);

    if (!doc) {
      return next(
        new AppError('No document fount with that ID', 404)
      );
    };

    res.status(200).json({
      status: 'success',
      data: {
        doc
      }
    });
  });
};
exports.getOneByEmail = Model => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.getOneByEmail(req.params.email);

    if (!doc) {
      return next(
        new AppError('No document fount with that ID', 404)
      );
    };

    res.status(200).json({
      status: 'success',
      data: {
        doc
      }
    });
  });
};
exports.createOne = Model => {
  return catchAsync(async (req, res, next) => {
    const { email, password, first_name, last_name, google, facebook } = req.body;
    const doc = await Model.createOne(email, password, first_name, last_name, google, facebook);

    res.status(201).json({
      status: 'success',
      data: {
        doc
      }
    });
  });
};
exports.updateOne = Model => {
  return catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { email, password, first_name, last_name, google, facebook } = req. body;
    const doc = await Model.updateOne(email, password, first_name, last_name, google, facebook, id);

    if (!doc) {
      return next(
        new AppError('No document found with that ID', 404)
      );
    };

    res.status(200).json({
      status: 'success',
      data: {
        doc
      }
    });
  });
};