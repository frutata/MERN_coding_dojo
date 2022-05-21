const mongoose = require("mongoose"); //import mongoose

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Author name is REQUIRED!"],
        minlength: [3, "Name must be at LEAST 3 characters long!"]
    },
    bestSeller: {
        type: Boolean
    }
}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;