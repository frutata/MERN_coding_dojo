const Author = require("../models/author.model");

module.exports.test = (req, res) => {
    res.json({
        msg: "Testing Author API"
    });
}

module.exports.findAllAuthor = (req, res) => {
    Author.find()
        .then(allAuthor => {
            res.json({ results: allAuthor })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to find all Author!", error: err })
        })
}
module.exports.createAuthor = (req, res) => {
    //req.body represents form information
    Author.create(req.body)
        .then(createdAuthor => {
            res.json({ results: createdAuthor })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to create a Author!", error: err })
        })
}
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(foundAuthor => {
            console.log(foundAuthor);
            console.log(req.params.id);
            res.json({ results: foundAuthor })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to find one Author!", error: err })
        })
}
module.exports.updateAuthor = (req, res) => {
    Author.updateOne({ _id: req.params.id }, //specify which Author to update
        req.body, //specify the form info to update the quote with
        { new: true, runValidators: true })
        .then(updatedAuthor => {
            res.json({ results: updatedAuthor })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to update a Author!", error: err })
        })
}
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => {
            res.json({ results: deletedAuthor })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to delte a Author!", error: err })
        })
}
