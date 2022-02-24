'use strict';


/**
 * Process checkout
 * Process cart products and payment and then create new order and save data to DB
 *
 * no response value expected for this operation
 **/
exports.cart_checkout = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete all
 * Delete all products from personal cart
 *
 * no response value expected for this operation
 **/
exports.cart_delete_all = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete product from cart
 * Delete one product form personal cart
 *
 * id String The id of the order.
 * no response value expected for this operation
 **/
exports.cart_delete_one = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get cart
 * Access all items inside users cart
 *
 * no response value expected for this operation
 **/
exports.cart_get_all = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one product from cart
 * Access one product inside personal cart
 *
 * id String The id of the order.
 * no response value expected for this operation
 **/
exports.cart_get_one = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update product in cart
 * Update product quantity inside personal cart
 *
 * id String The id of the order.
 * no response value expected for this operation
 **/
exports.cart_update_one = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

