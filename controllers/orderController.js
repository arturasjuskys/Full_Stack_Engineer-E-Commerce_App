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
exports.getAllByUser = Model => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.getAllByUser(req.params.user_id);

    if (!doc) {
      return next(
        new AppError('No documents found', 404)
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
    const { total } = req.body;
    const { user_id } = req.params;
    const doc = await Model.createOne(total, user_id);

    res.status(201).json({
      status: 'success',
      data: {
        doc
      }
    });
  });
};
exports.updateOrderStatus = Model => {
  return catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { status } = req. body;
    const now = new Date();
    const modified = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const currentOrder = await Model.getOne(id);
    const doc = await Model.updateOrderStatus(currentOrder.total, status, currentOrder.user_id, currentOrder.created, modified, id);

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
