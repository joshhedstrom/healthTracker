<<<<<<< HEAD
const router = require("express").Router();
const healthTrackerController = require("../../controllers/healthTrackerController");

// Matches with "/api/healthTracker"
router.route("/")
//user
.get(healthTrackerController.findAllUsers)
.post(healthTrackerController.createUser)
//exercise  
.get(healthTrackerController.findAllExercises)
.post(healthTrackerController.createExercise);

// Matches with "/api/healthTracker/:id"
router
  .route("/:id")
  //user
  .get(healthTrackerController.findUserById)
  .put(healthTrackerController.updateUser)
  .delete(healthTrackerController.removeUser)
  //water
  .put(healthTrackerController.updateWater)
  //nutrition
  .put(healthTrackerController.updateNutrition)
  //day
  .put(healthTrackerController.updateDay)
  //exercise
  .put(healthTrackerController.updateExercise);

module.exports = router;
=======
const express = require("express")

const router = express.Router()

const db = require("../../models");

router.post("/", (req, res) => {
    db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

router.get("/:username", (req, res) => {
})

module.exports = router
>>>>>>> 9c522cd62cd26f37ca11271c1305a6bf3e4744cf
