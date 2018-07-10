const db = require("../models")
module.exports = {

    //Day Controller
    createDay: function(req, res) {
        db.Day
        .create(req.body)
        .then(dbModel => {
            db.User.findByIdAndUpdate({username: req.body.username})
            .then((userModel) => {
                userModel.days.push(dbModel._id)
                userModel.save()
            })
        })
        .catch(err => res.status(422).json(err));
    },

    //Update Water for the day
    updateWater: function(req,res) {
        db.Day
        .findOneAndUpdate({ _id: req.params.id }, {water: req.body.water})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    //Update Nutrition for the day
    updateNutrition: function(req,res) {
        db.Day
        .findOneAndUpdate({ _id: req.params.id }, {nutrition: req.body.nutrition})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
}