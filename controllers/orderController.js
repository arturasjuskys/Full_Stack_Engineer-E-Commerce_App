const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAll = Model => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.getAll();

    if (!doc) {
      return next(
        new AppError('No documents found in database', 404)
      );
    };

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        doc
      }
    });
  });
};
exports.getOne = Model => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.getOne(req.params.id);

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
exports.createOne = Model => {
  return catchAsync(async (req, res, next) => {
    const { total, status } = req.body;
    const { id } = req.params;
    const created = new Date.now();
    const doc = await Model.createOne(total, status, id, created);
    console.log(id);

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
    const { total, status, user_id, modified } = req. body;
    const doc = await Model.updateOne(id, total, status, user_id, modified);

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
exports.deleteOne = Model => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.deleteOne(req.params.id);

    if (!doc.rowCount) {
      return next(
        new AppError('No document found with that ID', 404)
        );
    };
    
    res.status(204).json({
      status: 'success',
      data: null
    });
  });
};
