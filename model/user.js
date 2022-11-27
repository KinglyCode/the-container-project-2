const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        requred: [true, "Please provide an email..."],
        unique: [true, "Email already exists..."]
    },

    password: {
        type: String,
        required: [true, "Please provide a password..."],
        unique: false,
    }
})

module.exports = mongoose.model.Users || mongoose.model("Users", userSchema)