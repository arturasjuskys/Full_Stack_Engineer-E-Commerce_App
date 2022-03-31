const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Get all
exports.getAll = Model => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.getAll();

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
exports.getOneById = Model => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.getOneById(req.params.user_id);

    if(!doc) {
      return next(
        new AppError('No document found', 404)
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

// Create
  // Instantiate new cart and save

// Load
  // Load user cart based on ID
  // Load cart items and add them to the cart record

// Add item
  // Load user cart based on ID
  // Create cart item

// Remove item
  // Remove cart item by line ID

// Update item
  // Remove cart item by line ID

// Checkout
  // Load cart items
  // Generate total price from cart items
  // Generate initial order
  // Make charge to payment method (not required in this project)
  // On successful charge to payment method, update order status to COMPLETE
