'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.products_delete_one = function products_delete_one (req, res, next, id) {
  Products.products_delete_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.products_get_all = function products_get_all (req, res, next) {
  Products.products_get_all()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.products_get_one = function products_get_one (req, res, next, id) {
  Products.products_get_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.products_new = function products_new (req, res, next) {
  Products.products_new()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.products_update_one = function products_update_one (req, res, next, id) {
  Products.products_update_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
