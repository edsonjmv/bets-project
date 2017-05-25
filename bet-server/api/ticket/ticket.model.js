/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new mongoose.Schema({
  bets: Array,
  risk: Number,
  prize: Number
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Ticket', ticketSchema);
