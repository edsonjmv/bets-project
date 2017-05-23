/*jshint esversion: 6*/
const express = require('express');
const controller = require('./league.controller');
const leaguesRoutes = express.Router();

leaguesRoutes.get('/', controller.getLeagues);
leaguesRoutes.post('/', controller.createLeague);

module.exports = leaguesRoutes;
