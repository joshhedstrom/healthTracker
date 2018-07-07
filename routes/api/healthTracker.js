const express = require("express")

const router = express.Router()

const db = require("../../models");

router.post("/", (req, res) => {
    db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

router.get("/:username", (req, res) => {
})

module.exports = router