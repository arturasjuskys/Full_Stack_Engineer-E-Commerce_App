const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Get all
exports.createOne = Model => {
  return catchAsync(async (req, res, next) => {
    const { cart_id, product_id, qty } = req.body;
    const doc = await Model.createOne(cart_id, product_id, qty);
    console.log(doc);

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