const mongoose = require('mongoose')
require('dotenv').config()

async function databaseConnect() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
    })
    .then(() => { 
        console.log("Successfully Connected to MongoDB") 
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB")
        console.error(error)
    })

}

module.exports = databaseConnect