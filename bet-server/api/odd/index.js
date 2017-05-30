/*jshint esversion: 6*/
const express = require('express');
const controller = require('./odd.controller');
const oddRoutes = express.Router();

oddRoutes.get('/', controller.getOdds);
oddRoutes.get('/all', controller.getAllOdds);
oddRoutes.get('/:id', controller.getSingle);
oddRoutes.post('/', controller.createOdd);
oddRoutes.delete('/:id', controller.deleteOdd);
oddRoutes.put('/:id', controller.editOdd);

module.exports = oddRoutes;
