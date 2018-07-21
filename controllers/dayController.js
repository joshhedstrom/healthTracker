const db = require("../models")
module.exports = {

    //Day Controller
    createDay: function(req, res) {
        db.Day.findOne({date: req.body.date, userId: req.body.userId, weight: req.body.weight})
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
    addWater: function(req, res) {
        db.Day
        .findOne({ _id: req.body.id })
        .then(dbModel => {
            dbModel.water = req.body.water
            dbModel.save()
            return res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    },

    //Update Nutrition for the day
    updateNutrition: function(req,res) {
        db.Day
        .findOneAndUpdate({ _id: req.params.id }, {nutrition: req.body.nutrition})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findDayByuserId: function(req, res) {
        db.Day
        .find({userId: req.params.userId}, null, {sort: {date: -1}, limit: 7} ) 
        .then(dbDays => {
            return res.json(dbDays)
        })
        .catch(err => res.status(422).json(err));
    },

    findDayWeightByuserId: function(req, res) {
        db.Day
        .find({userId: req.params.userId}, null, {sort: {date: -1}, limit: 30} ) 
        .then(dbDays => {
            return res.json(dbDays)
        })
        .catch(err => res.status(422).json(err));
    }


}

