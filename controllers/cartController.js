const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

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
