const db = require("../models")

module.exports = {
    //Exercise Controllers
    createExercise: function(req, res) {
        db.Exercise
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    updateExercise: function(req, res) {
        db.Exercise
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    
    removeExercise: function(req, res) {
        db.Exercise
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

}