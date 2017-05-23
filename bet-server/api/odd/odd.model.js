/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oddSchema = new mongoose.Schema({
  league_id: {
    type: String
  },
  participants: {
    type: Array
  },
  status: {
    type: String
  },
  odds: {
    type: Array
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Odd', oddSchema);
