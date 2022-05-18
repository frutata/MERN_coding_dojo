const User = require("../models/user.model");



module.exports.test = (req, res) => {
    res.json({ msg: "testing User api" });
}

module.exports.findAllUser = (req, res) => {
    User.find()
        .then(allUser => {
            res.json({ results: allUser })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to find all User!", error: err })
        })
}
module.exports.createUser = (req, res) => {
    //req.body represents form information
    User.create(req.body)
        .then(createdUser => {
            res.json({ results: createdUser })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to create a User!", error: err })
        })
}
module.exports.findOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(foundUser => {
            console.log(foundUser);
            console.log(req.params.id);
            res.json({ results: foundUser })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to find one User!", error: err })
        })
}
module.exports.updateUser = (req, res) => {
    User.updateOne({ _id: req.params.id }, //specify which User to update
        req.body, //specify the form info to update the quote with
        { new: true, runValidators: true })
        .then(updatedUser => {
            res.json({ results: updatedUser })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to update a User!", error: err })
        })
}
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(deletedUser => {
            res.json({results: deletedUser})
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to delte a User!", error: err })
        })
}
