const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Load
  // Load user cart based on ID
exports.getOneById = Model => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.getOneById(req.body.user_id);

    if(!doc) {
      return next(
        new AppError('No document found', 404)
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

// Create
  // Created with new user

// Add item
  // Load user cart based on ID
  // Create cart item
exports.addItemToCart = Model => {
  return catchAsync(async (req, res, next) => {
    const { cart_id, product_id, qty } = req.body;
    const doc = await Model.createOne(cart_id, product_id, qty);

    if (!doc) {
      return next(
        new AppError('No document found', 404)
      );
    };

    res.status(201).json({
      status: 'success',
      data: {
        doc
      }
    });
  });
};

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
