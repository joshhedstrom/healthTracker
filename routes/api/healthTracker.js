const router = require("express").Router();
const db = require("../../controllers");

// Matches with "/api/healthTracker"
router.post("/newUser", (req, res) => {
  db.User.createUser(req, res)
})

router.post("/newDay", (req, res) => {
  db.Day.createDay(req, res)
})

router.post("/newExercise", (req, res) => {
  db.Exercise.addExercise(req, res)
})

router.get("/:id", (req, res) => {
  db.User.findUserById(req, res)
})

module.exports = router;
