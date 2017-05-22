/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new mongoose.Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  bets: {
    type: Array
  },
  risk: {
    type: Number,
    required: true
  },
  prize: {
    type: Number,
    required: true
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Ticket', ticketSchema);
