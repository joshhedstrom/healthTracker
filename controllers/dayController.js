const db = require("../models")
module.exports = {

    //Day Controller
    createDay: function(req, res) {
        db.Day
        .create(req.body)
        .then(dbModel => {
            db.User.findByIdAndUpdate({_id: req.body.id})
            .then((userModel) => {
                userModel.days.push(dbModel._id)
                userModel.save()
            })
        return res.send("Day has been added")
        })
        .catch(err => res.status(422).json(err));
    },
}
