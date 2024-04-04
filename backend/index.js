require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@eduwise.47uodok.mongodb.net/?retryWrites=true&w=majority&appName=eduwise`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        //create a database and collections
        const database = client.db("eduwise");
        const usersCollection = database.collection("users"); 
        const classesCollection = database.collection("classes");
        const cartCollection = database.collection("cart");
        const paymentCollection = database.collection("payments");
        const enrolledCollection = database.collection("enrolled");
        const appliedCollection = database.collection("applied");

        //classes routes here
        app.post('/new-class', async (req, res) => {
            const {newClass} = req.body;
            // newClass.availableSeats = parseInt(newClass.availableSeats);
            const result = await classesCollection.insertOne(newClass); // Sending the inserted document as response
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Developer 2024!");
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log(`Server is running on ${port}`);
});

