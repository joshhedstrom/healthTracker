const db = require("../models")

module.exports = {
    // Water Controllers
    createWater: function(req, res) {
        db.Water
        .create({_id: req.params.id}, req.body)
        .then(dbWater => res.json(dbWater))
        .catch(err => res.status(422).json(err))
    },

    updateWater: function(req, res) {
        db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    
}