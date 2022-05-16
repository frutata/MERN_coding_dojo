const Jokes = require("../models/joke.model");



module.exports.test = (req, res) => {
    res.json({ msg: "testing jokes api" });
}

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => {
            res.json({ results: allJokes })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to find all jokes!", error: err })
        })
}
module.exports.createJokes = (req, res) => {
    //req.body represents form information
    Jokes.create(req.body)
        .then(createdJokes => {
            res.json({ results: createdJokes })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to create a joke!", error: err })
        })
}
module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({ id: req.params.id })
        .then(foundJoke => {
            res.json({ results: foundJoke })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to find one joke!", error: err })
        })
}
module.exports.updateJoke = (req, res) => {
    Jokes.updateOne({ id: req.params.id }, //specify which joke to update
        req.body, //specify the form info to update the quote with
        { new: true, runValidators: true })
        .then(updatedJoke => {
            res.json({ results: updatedJoke })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to update a joke!", error: err })
        })
}
module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ id: req.params.id })
        .then(deletedJoke => {
            res.json({results: deletedJoke})
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to delte a joke!", error: err })
        })
}
