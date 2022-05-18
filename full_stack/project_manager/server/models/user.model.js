const mongoose = require("mongoose"); //import mongoose

//purpose of this file is to describe how our User table (collection) should look like

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Title must be at LEAST 3 characters long!"]
    },
    price: {
        type: Number,
        required: [true, "A price input is required!"],
        minlength: [0.01, "Price can't be lower than $0.01!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [5, "Description must be at LEAST 5 characters long!"]
    },
}, {timestamps: true})

const User = mongoose.model("User", UserSchema);

module.exports = User;