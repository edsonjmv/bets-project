/*jshint esversion: 6*/
const _ = require('lodash');
const oddModel = require('./odd.model');

exports.getOdds = function(req, res, next) {
  oddModel.find({}, function(err, odds) {
    if (err) {
      return res.json(err);
    }
    return res.json(odds);
  });
};

exports.createOdd = function(req, res, next) {
  const {
    league_id,
    participants,
    status,
    odds
  } = req.body;
  const newOdd = new oddModel({
    league_id:league_id,
    participants:participants,
    status:status,
    odds:odds
  });

  newOdd.save().then(odd => {
    return res.status(201).json(odd);
  });
};
