const mongoose = require("mongoose"); //import mongoose

//purpose of this file is to describe how our jokes table (collection) should look like

const JokesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Joke name is required!"],
        minlength: [3, "Joke name must be at LEAST 3 characters long!"]
    },
    content: {
        type: String,
        required: [true, "Joke is required!"],
        minlength: [10, "Joke must be at LEAST 10 characters long!"]
    },
    rating: {
        type: Number,
        minlength: [1, "Rating must be at LEAST 1!"],
        maxlength: [5, "Rating cannot excede 5!"]
    }
}, {timestamps: true})

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;