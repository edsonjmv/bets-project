/*jshint esversion: 6*/
const _ = require('lodash');
const oddModel = require('./odd.model');
const upload = require('../../configs/multer');

exports.getAllOdds = function(req, res, next) {
  oddModel.find({}, function(err, odds) {
    if (err) {
      return res.json(err);
    }
    return res.json(odds);
  });
};

exports.getOdds = function(req, res, next) {
  leagueId = req.query.leagueId;
  oddModel.find({league_id: leagueId}, function(err, odds) {
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
    odds,
    image1,
    image2
  } = req.body;
  const newOdd = new oddModel({
    league_id:league_id,
    participants:participants,
    status:status,
    odds:odds,
    image1:image1,
    image2:image2
  });

  newOdd.save().then(odd => {
    return res.status(201).json(odd);
  });
};

exports.getSingle = function(req, res, next) {
  oddModel.findById(req.params.id, (err, theOdd) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(theOdd);
    });
};

exports.editOdd = function(req, res, next) {
  const updates = {
    participants: req.body.participants,
    odds: req.body.odds,
    image1: req.body.image1,
    image2: req.body.image2
  };

  oddModel.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'Odd updated successfully'
    });
  });
};

exports.deleteOdd = function(req, res, next) {
  oddModel.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    return res.json({
      message: 'Odd has been removed!'
    });
  });
};
