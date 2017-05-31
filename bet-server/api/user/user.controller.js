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
