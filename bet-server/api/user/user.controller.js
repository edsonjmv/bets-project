/*jshint esversion: 6*/
const User = require('./user.model');

exports.editCashier = function(req, res, next) {
  const updates = {
    cashier: req.body.cashier
  };

  User.findByIdAndUpdate(req.params.id, updates, (err, updatedElement) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(req.body);
  });
};

exports.getAllUsers = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      return res.json(err);
    }
    return res.json(users);
  });
};

exports.deleteUser = function(req, res, next) {
  User.remove({
    _id: req.params.id
  }, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    return res.json({
      message: 'User has been removed!'
    });
  });
};
