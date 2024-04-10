require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const connect = require("./db/connect");
const { mockCoursesTest } = require('./controller/mockCoursesTest');


const port = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());


app.use("/api/v1/addTesting", mockCoursesTest);

app.get('/', (req, res) => {
    res.send("Server is running...");
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



