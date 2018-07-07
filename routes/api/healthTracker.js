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
