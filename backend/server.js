require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./config/connect');
const courses = require('./routes/courseRoutes');
const addTestingCourses = require('./config/mockCoursesTest');


connect(); // Connect to MongoDB.

const port = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());

app.use('/api/courses', courses);

app.use('/addTesting', addTestingCourses);

app.get('/', (req, res) => {
    res.status(200).json({message: 'API server updated'});
});

app.listen(port, () => {
    console.log(`Server running on port at http://localhost:${port}`);
})