/*jshint esversion: 6*/
const express = require('express');
const controller = require('./user.controller');
const userRoutes = express.Router();

userRoutes.put('/:id', controller.editCashier);

module.exports = userRoutes;
