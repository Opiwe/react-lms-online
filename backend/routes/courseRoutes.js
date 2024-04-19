const express = require('express');
const router = express.Router();

const { getAllCourses } = require('../controller/courseController');

router.get('/', getAllCourses);

module.exports = router;