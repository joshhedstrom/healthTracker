const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User.js');

router.post('/register', (req, res) => {
  console.log('register route reached')
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: 'Please pass username and password.' });
  } else {
    let newUser = new User({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      weight: req.body.weight
    });
    newUser.save(err => {
      const token = jwt.sign(user.toJSON(), settings.secret);
      if (err) {
        return res.json({ success: false, msg: 'Username already exists.' });
      }
      res.json({
        success: true,
        msg: 'Successful created new user.',
        token: 'JWT' + token
      });
    });
  }
});

router.post('/login', (req, res) => {
  console.log('login route reached')
  User.findOne(
    {
      username: req.body.username
    },
    (err, user) => {
      if (err) throw err;
      console.log('USER INFO::::>>> ', user)

      if (!user) {
        res.status(401).send({
          success: false,
          msg: 'Authentication failed. User not found.'
        });
      } else {
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            const token = jwt.sign(user.toJSON(), settings.secret);
            res.json({ success: true, token: 'JWT ' + token, userId: user._id });
          } else {
            res.status(401).send({
              success: false,
              msg: 'Authentication failed. Wrong password.'
            });
          }
        });
      }
    }
  );
});

module.exports = router;
