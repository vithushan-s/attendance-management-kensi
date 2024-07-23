const express = require('express');
const router = express.Router();

const {getAllLecturers,getLecturer,newLecturer,updateLecturer,deleteLecturer} = require('../controller/lecturerController');

router.route('/lecturers').get(getAllLecturers);
router.route('/lecturer:id').get(getLecturer);
router.route('/lecturer/new').post(newLecturer);
router.route('/lecturer/update:id').put(updateLecturer);
router.route('/lecturer/remove:id').delete(deleteLecturer);

module.exports = router;