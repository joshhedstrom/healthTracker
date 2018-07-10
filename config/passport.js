const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
const User = require('../models/User');
const settings = require('../config/settings'); // get settings file

module.exports = passport => {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = settings.secret;
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findOne({ id: jwt_payload.id }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    })
  );
};
