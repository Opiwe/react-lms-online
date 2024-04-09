require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const connect = require("./db/connect");


const port = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());

// //mongodb connection
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@eduwise.47uodok.mongodb.net/?retryWrites=true&w=majority&appName=eduwise`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
//     });

//     async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();

//         //create a database and collections
//         const database = client.db("eduwise");
//         const usersCollection = database.collection("users"); 
//         const classesCollection = database.collection("classes");
//         const cartCollection = database.collection("cart");
//         const paymentCollection = database.collection("payments");
//         const enrolledCollection = database.collection("enrolled");
//         const appliedCollection = database.collection("applied");

//         // //classes routes here
//         // app.post('/new-class', async (req, res) => {
//         //     const {newClass} = req.body;
//         //     // newClass.availableSeats = parseInt(newClass.availableSeats);
//         //     const result = await classesCollection.insertOne(newClass); // Sending the inserted document as response
//         // });


//         // Define a route to handle inserting a new class
//         app.post('/new-class', async (req, res) => {
//             try {
//                 // Extract the newClass object from the request body
//                 const { newClass } = req.body;

//                 // Insert the newClass document into the classes collection
//                 const result = await classesCollection.insertOne(newClass);

//                 // Sending the inserted document as response
//                 res.status(200).json(result.ops[0]); // ops[0] contains the inserted document
//             } catch (error) {
//                 console.error('Error inserting document:', error);
//                 res.status(500).json({ error: 'An error occurred while inserting the document' });
//             }
//         });

//         app.get('/classes', async (req, res) => {
//             const query = { status: 'approved'};
//             const result = await classesCollection.find().toArray();
//             res.send(result);
//         });

//         //get classes by instructor email address
//         app.get('/classes/:email', async (req, res) => {
//             const { email } = req.params.email;
//             const query = { instructorEmail: email };
//             const result = await classesCollection.find(query).toArray();
//             res.send(result);
//         });

//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("Hello Developer 2024!");
});


const startMyServer = async () => {
    try {
        //connect to DB function
        await connect();

        //start the server
        app.listen(port, (req, res) => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

//call the function that the connect to the DB and start server
startMyServer();



