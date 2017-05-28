/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new mongoose.Schema({
  name: {
    type: String
  },
  display_name: {
    type: String
  },
  sport_group: {
    type: String
  },
  image: {
    type: String
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('League', leagueSchema);
