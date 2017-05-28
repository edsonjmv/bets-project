/*jshint esversion: 6*/
const express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// Our user model
const User = require('../api/user/user.model');

const authRoutes = express.Router();

authRoutes.post("/signup", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let name = req.body.name;
  let last_name = req.body.last_name;
  let image = req.body.image;
  let cashier = req.body.cashier;

  if (!username || !password) {
    res.status(400).json({
      message: "Provide username and password"
    });
    return;
  }

  User.findOne({
    username
  }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({
        message: "The username already exists"
      });
      return;
    }

    var salt = bcrypt.genSaltSync(bcryptSalt);
    var hashPass = bcrypt.hashSync(password, salt);

    var newUser = User({
      username,
      password: hashPass,
      name,
      last_name,
      image,
      cashier
    });

    newUser.save((err) => {
      if (err) {
        res.status(400).json({
          message: "Something went wrong"
        });
      } else {
        req.login(newUser, function(err) {
          if (err) {
            return res.status(500).json({
              message: 'something went wrong :('
            });
          }
          res.status(200).json(req.user);
        });
      }
    });
  });
});

authRoutes.post("/login", function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json(info);
    }

    req.login(user, function(err) {
      if (err) {
        return res.status(500).json({
          message: 'something went wrong :('
        });
      }
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

authRoutes.post("/logout", function(req, res) {
  req.logout();
  res.status(200).json({
    message: 'Success'
  });
});

authRoutes.get("/loggedin", function(req, res) {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }
  res.status(403).json({
    message: 'Unauthorized'
  });
});

authRoutes.get("/private", (req, res) => {
  console.log(req.session);
  if (req.isAuthenticated()) {
    return res.json({
      message: 'This is a private message'
    });
  }

  return res.status(403).json({
    message: 'Unauthorized'
  });
});

module.exports = authRoutes;
