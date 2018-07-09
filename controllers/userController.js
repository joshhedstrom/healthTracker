const db = require("../models")

module.exports = {
    // User controllers
    findUserById: function(req, res) {
        db.User
        .findById(req.params.id)
        .populate("days")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    createUser: function(req, res) {
        db.User
        .create(req.body)
        .then(userModel => res.json(userModel))
        .catch(err => res.status(422).json(err));
    },

    updateUser: function(req, res) {
        db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    
    removeUser: function(req, res) {
        db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
}