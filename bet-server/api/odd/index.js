/*jshint esversion: 6*/
const express = require('express');
const controller = require('./odd.controller');
const oddRoutes = express.Router();

oddRoutes.get('/', controller.getSports);
oddRoutes.get('/mlb', controller.getMLB);
oddRoutes.get('/nba', controller.getNBA);
oddRoutes.get('/serie-a', controller.getSerieA);

module.exports = oddRoutes;
