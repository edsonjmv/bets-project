/*jshint esversion: 6*/
const express = require('express');
const controller = require('./ticket.controller');
const ticketRoutes = express.Router();

ticketRoutes.post('/', controller.createTicket);
ticketRoutes.get('/', controller.getTickets);

module.exports = ticketRoutes;
