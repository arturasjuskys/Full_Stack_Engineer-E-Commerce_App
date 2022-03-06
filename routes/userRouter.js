const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');
const User = new UserModel();
const userController = require('../controllers/userController');
const { Router } = require('express');

router.route('/')
  .post(userController.createOne(User))

router.route('/:id')
  .get(userController.getOneById(User))
  .put(userController.updateOne(User))
  
  router.route('/email/:email')
  .get(userController.getOneByEmail(User))

module.exports = router;
