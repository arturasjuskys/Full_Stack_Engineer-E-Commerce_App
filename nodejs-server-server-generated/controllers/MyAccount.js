'use strict';

var utils = require('../utils/writer.js');
var MyAccount = require('../service/MyAccountService');

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
