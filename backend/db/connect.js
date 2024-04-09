const mongoose = require('mongoose')
const MMS = require('mongodb-memory-server')

// function to connect to mongo database
const connect = async () => {
    try {
        // create mongo database
        const mongod = await MMS.MongoMemoryServer.create()

        // get the connection string (address of the database)
        const uri = mongod.getUri()

        mongoose.set('strictQuery', true)

        // connect to mongo database
        mongoose.connect(uri)

        // log connected message with mongoDB url
        console.log(`database connected to ---> : ${uri}`)
    } catch (error) {
        // log error
        console.log(error)
        }
    }

module.exports = connect;