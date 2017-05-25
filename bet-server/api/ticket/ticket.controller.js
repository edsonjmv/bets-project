/*jshint esversion: 6*/
const _ = require('lodash');
const ticketModel = require('./ticket.model');
const Ticket       = require('./ticket.model');

exports.createTicket = function(req, res, next) {
  const ticket = new Ticket({
    bets: req.body.bets,
    risk: req.body.risk,
    prize: req.body.prize
  });

  ticket.save((err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      ticket: ticket
    });
  });
};
