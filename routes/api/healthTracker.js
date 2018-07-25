const router = require('express').Router();
const db = require('../../controllers');
const passport = require('passport');
require('../../config/passport')(passport);

// Matches with "/api/healthTracker"
router.post('/newUser', passport.authenticate('jwt', { session: false }), (req, res) => {
    const token = getToken(req.headers);
    if (token) {
      console.log('user is loggd in to the post route newUser');
      db.User.createUser(req, res);
    } else {
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  }
);

// Creates a new day with default values
router.post('/newDay', passport.authenticate('jwt', { session: false }), (req, res) => {
    const token = getToken(req.headers);
    if (token) {
      console.log('user is loggd in to the post route for newDay');
      db.Day.createDay(req, res);
    } else {
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
  }
);

// Adds exercise to the given day, !! NEEDS WORK !!
router.post('/newExercise', passport.authenticate('jwt', { session: false }), (req, res) => {
  const token = getToken(req.headers);
  if (token) {
    console.log('user is loggd in to the post route for NewExercise');
    db.Exercise.addExercise(req, res);
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
 }
);

// Gets all the user data for a given userId
router.get('/user/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const token = getToken(req.headers);
  if (token) {
    console.log('user is loggd in to the get route user:id');
    db.User.findUserById(req, res);
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
 }
);

// Get Water route -- Gets a specific day by the dayId
router.get('/day/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const token = getToken(req.headers);
  if (token) {
    console.log('user is loggd in to the get route for day:id');
    db.Day.addWater(req, res)
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
 }
);

// Get Nutrition route -- Gets a specific day by the dayId  
router.get('/day/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const token = getToken(req.headers);
  if (token) {
    console.log('user is loggd in to the get route for day:id');
    db.Day.updateNutrition(req, res)
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
 }
);

// Adds water to the given day.
router.post('/newWater', passport.authenticate('jwt', { session: false}), (req, res) => {
  const token = getToken(req.headers);
  if (token) {
    console.log('Water is being added');
    db.Day.addWater(req, res);
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
 }
)
;
// Updates nutrition to the given day.
router.post('/updateNutrition', passport.authenticate('jwt', { session: false}), (req, res) => {
  const token = getToken(req.headers);
  if (token) {
    console.log('Nutrition is being added');
    db.Day.updateNutrition(req, res);
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
 }
);

// Updates user's weight for a given date
router.post('/updateWeight', passport.authenticate('jwt', { session: false}), (req, res) => {
  const token = getToken(req.headers);
  if (token) {
    console.log("Weight is being updated");
    db.Day.updateWeight(req, res)
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
 }
);


// Gets all the days for a given userId
router.get('/getDays/:userId', passport.authenticate('jwt', { session: false }), (req, res) => {
  const token = getToken(req.headers);
  if (token) {
    console.log('user is loggd in to the get route for day:id');
    db.Day.findDayByuserId(req,res)
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
 }
);

// Gets last 30 days for a given userId
router.get('/getDaysWeight/:userId', passport.authenticate('jwt', { session: false }), (req, res) => {
  const token = getToken(req.headers);
  if (token) {
    console.log('user is loggd in to the get route for day:id');
    db.Day.findDayWeightByuserId(req,res)
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
 }
);

getToken = function(headers) {	
  if (headers && headers.authorization) {	
    let parted = headers.authorization.split(' ');	
    if (parted.length === 2) {	
      return parted[1];	
    } else {	
      return null;	
    }	
  } else {
    return null;	   
  }	   
};
module.exports = router;
