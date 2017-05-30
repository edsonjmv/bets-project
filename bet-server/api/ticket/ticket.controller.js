/*jshint esversion: 6*/
const _ = require('lodash');
const ticketModel = require('./ticket.model');
const Ticket = require('./ticket.model');

exports.createTicket = function(req, res, next) {
  const ticket = new Ticket({
    bets: req.body.bets,
    risk: req.body.risk,
    prize: req.body.prize,
    user_id: req.body.user_id
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

exports.getTickets = function(req, res, next) {
  ticketModel.find({}, function(err, tickets) {
    if (err) {
      return res.json(err);
    }
    return res.json(tickets);
  });
};
