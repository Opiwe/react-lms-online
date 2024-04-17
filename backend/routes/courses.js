const express = require('express');
const router = express.Router();

const { getAllCourses } = require('../controller/courses');

router.get('/', getAllCourses);

module.exports = router;