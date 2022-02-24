'use strict';

var utils = require('../utils/writer.js');
var Orders = require('../service/OrdersService');

module.exports.orders_delete_one = function orders_delete_one (req, res, next, id) {
  Orders.orders_delete_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orders_get_all = function orders_get_all (req, res, next) {
  Orders.orders_get_all()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orders_get_one = function orders_get_one (req, res, next, id) {
  Orders.orders_get_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orders_new = function orders_new (req, res, next) {
  Orders.orders_new()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orders_update_one = function orders_update_one (req, res, next, id) {
  Orders.orders_update_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
