const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const databaseConnect = require("./config/database")
const bcrypt = require("bcrypt")
const User = require("./model/user");

databaseConnect()

// body parser configuration
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.json({ message: "Hey! This is your server response!" });
  next();
});

app.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        email: req.body.email,
        password: hashedPassword,
      })
      user.save().then((result) => {
        res.status(201).send({
          message: "User Has Been Created Successfully...",
          result,
        })
      })
      .catch((error) => {
        res.status(500).send({
          message: "Error Creating This User..."
        })
      })
    })
    .catch((e) => {
      res.status(500).send({
        message: "Password was not hashed successfull",
        e,
      })
    })
})


module.exports = app;
