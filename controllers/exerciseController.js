const db = require("../models")

module.exports = {
    //Exercise Controllers
    addExercise: function(req, res) {
        db.Exercise
        .create({exercise: req.body.exercise, duration: req.body.duration})
        .then(exerciseModel => {
            db.Day.findById({_id: req.body.id})
            .then(dayModel => {
                dayModel.exercises.push(exerciseModel._id)
                dayModel.save()
                return res.send("Exercise Added")
            })
            .catch(err => res.status(422).json(err))
            return res.send("Exercise Added")
        })
        .catch(err => res.status(422).json(err));
    },

}