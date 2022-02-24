'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.cart_checkout = function cart_checkout (req, res, next) {
  Cart.cart_checkout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cart_delete_all = function cart_delete_all (req, res, next) {
  Cart.cart_delete_all()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cart_delete_one = function cart_delete_one (req, res, next, id) {
  Cart.cart_delete_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cart_get_all = function cart_get_all (req, res, next) {
  Cart.cart_get_all()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cart_get_one = function cart_get_one (req, res, next, id) {
  Cart.cart_get_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cart_update_one = function cart_update_one (req, res, next, id) {
  Cart.cart_update_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
