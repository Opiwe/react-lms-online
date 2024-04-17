const CourseModel = require("../model/courseModel");

// Get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await CourseModel.find();
        res.json({ message: "Get all courses", data: courses });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Add new course 
const addNewCourse = async (req, res) => {
    try {
        const course = await CourseModel.create(req.body); // Use create method to add new course
        res.json({ message: "Add new course", course: course });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getAllCourses,
    addNewCourse
};
