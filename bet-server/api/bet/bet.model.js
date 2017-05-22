/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new mongoose.Schema({
  match: {
    type: String
  },
  oddName: {
    type: Array
  },
  oddValue: {
    type: Number
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Bet', betSchema);
