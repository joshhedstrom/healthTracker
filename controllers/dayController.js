const db = require("../models")
module.exports = {

    //Day Controller
    createDay: function(req, res) {
        db.Day
        .create(req.body)
        .then(dbModel => {
            db.User.findOne({username: req.body.username})
            .then((userModel) => {
                userModel.days.push(dbModel._id)
                userModel.save()
            })
        })
        .catch(err => res.status(422).json(err));
    },
}
