'use strict';

var utils = require('../utils/writer.js');
var MyAccount = require('../service/MyAccountService');

module.exports.cart_checkout = function cart_checkout (req, res, next) {
  MyAccount.cart_checkout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cart_delete_all = function cart_delete_all (req, res, next) {
  MyAccount.cart_delete_all()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cart_delete_one = function cart_delete_one (req, res, next, id) {
  MyAccount.cart_delete_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cart_get_all = function cart_get_all (req, res, next) {
  MyAccount.cart_get_all()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cart_get_one = function cart_get_one (req, res, next, id) {
  MyAccount.cart_get_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cart_update_one = function cart_update_one (req, res, next, id) {
  MyAccount.cart_update_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.myAccount_delete = function myAccount_delete (req, res, next) {
  MyAccount.myAccount_delete()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.myAccount_get = function myAccount_get (req, res, next) {
  MyAccount.myAccount_get()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.myAccount_update = function myAccount_update (req, res, next) {
  MyAccount.myAccount_update()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};