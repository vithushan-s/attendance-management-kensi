const express = require('express');
const router = express.Router();

const {getAllFaculties,getFaculty,newFaculty,updateFaculty,deleteFaculty} = require('../controller/facultyController');

router.route('/api/faculties').get(getAllFaculties);
router.route('/api/faculty:id').get(getFaculty);
router.route('/api/faculty/new').post(newFaculty);
router.route('/api/faculty/update:id').put(updateFaculty);
router.route('/api/faculty/remove:id').delete(deleteFaculty);

module.exports = router;