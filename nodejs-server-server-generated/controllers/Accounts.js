'use strict';

var utils = require('../utils/writer.js');
var Accounts = require('../service/AccountsService');

module.exports.accounts_delete_one = function accounts_delete_one (req, res, next, id) {
  Accounts.accounts_delete_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accounts_get_all = function accounts_get_all (req, res, next) {
  Accounts.accounts_get_all()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accounts_get_one = function accounts_get_one (req, res, next, id) {
  Accounts.accounts_get_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accounts_new = function accounts_new (req, res, next) {
  Accounts.accounts_new()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accounts_update_one = function accounts_update_one (req, res, next, id) {
  Accounts.accounts_update_one(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
