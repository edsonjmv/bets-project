/*jshint esversion: 6*/
const _ = require('lodash');
const leagueModel = require('./league.model');

exports.getLeagues = function(req, res, next) {
  leagueModel.find({}, function(err, leagues) {
    if (err) {
      return res.json(err);
    }
    return res.json(leagues);
  });
};

exports.createLeague = function(req, res, next) {
  const {
    name,
    display_name,
    sport_group,
    image
  } = req.body;
  const newLeague = new leagueModel({
    name: name,
    display_name: display_name,
    sport_group: sport_group,
    image: image
  });

  newLeague.save().then(league => {
    return res.status(201).json(league);
  });
};
