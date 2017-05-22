/*jshint esversion: 6*/
const $ = require("jquery");
const fs = require("fs");

function readJSONFile(filename, callback) {
  require("fs").readFile(filename, function(err, data) {
    if (err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch (exception) {
      callback(exception);
    }
  });
}

exports.getSports = function(req, res, next) {
  readJSONFile('./fake-api/sports.json', function(err, json) {
    if (err) {
      return res.json(err);
    }
    return res.json(json);
  });
};

exports.getMLB = function(req, res, next) {
  readJSONFile('./fake-api/MLB.json', function(err, json) {
    if (err) {
      return res.json(err);
    }
    return res.json(json);
  });
};

exports.getNBA = function(req, res, next) {
  readJSONFile('./fake-api/NBA.json', function(err, json) {
    if (err) {
      return res.json(err);
    }
    return res.json(json);
  });
};

exports.getSerieA = function(req, res, next) {
  readJSONFile('./fake-api/SERIE_A.json', function(err, json) {
    if (err) {
      return res.json(err);
    }
    return res.json(json);
  });
};
