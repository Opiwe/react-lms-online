const mongoose = require('mongoose')
const MMS = require('mongodb-memory-server')

// function to connect to MongoDB database
const connect = async () => {
    try {
        // create MongoDB database
        const mongod = await MMS.MongoMemoryServer.create()

        // get the connection string (address of the database)
        const uri = mongod.getUri();

        // MongoDB username and password
        const username = 'jnkqubela';
        const password = '4j4BBxbYaoD3Rc7K';

        // Modified URI with username and password
        const uriWithAuth = uri.replace(`mongodb+srv://${username}:${password}@eduwise.47uodok.mongodb.net/?retryWrites=true&w=majority&appName=eduwise`);

        // connect to MongoDB database with authentication
        await mongoose.connect(uriWithAuth, { useNewUrlParser: true, useUnifiedTopology: true });

        // log connected message with MongoDB URL
        console.log(`Database connected to: ${uri}`);
        } catch (error) {
        // log error
        console.log(error)
        }
    }

module.exports = connect;