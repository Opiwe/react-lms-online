const Course = require('../model/courseModel');

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        return res.json({courses});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllCourses,
};