const express = require('express');
const router = express.Router();

const {getAllCourses,getCourse,newCourse,updateCourse,deleteCourse} = require('../controller/courseController');

router.route('/courses').get(getAllCourses);
router.route('/course:id').get(getCourse);
router.route('/course/new').post(newCourse);
router.route('/course/update:id').put(updateCourse);
router.route('/course/remove:id').delete(deleteCourse);


module.exports = router;