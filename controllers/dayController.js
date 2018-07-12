const db = require("../models")
module.exports = {

    //Day Controller
    createDay: function(req, res) {
        db.Day.findOne({date: req.body.date, userId: req.body.userId})
        .then(dbDay => {
            if (dbDay) {
                return res.json(dbDay)
            } else {
                db.Day.create(req.body)
                .then(newDbDay => {
                    db.User.findById({_id: req.body.userId})
                    .then(dbUser => {
                        dbUser.days.push(newDbDay._id)
                        dbUser.save()
                    })
                    return res.json(newDbDay)
                })
            }
        })
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

