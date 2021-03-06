/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  name: {
    type: String
  },
  last_name: {
    type: String
  },
  cashier: {
    type: Number
  },
  image: {
    type: String
  },
  admin: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
