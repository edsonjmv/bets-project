/*jshint esversion: 6*/
const express = require('express');
const controller = require('./user.controller');
const userRoutes = express.Router();

userRoutes.put('/:id', controller.editCashier);
userRoutes.get('/all', controller.getAllUsers);
userRoutes.delete('/:id', controller.deleteUser);

module.exports = userRoutes;
