const express = require('express');
const router = express.Router();

const {getAllFaculties,getFaculty,newFaculty,updateFaculty,deleteFaculty} = require('../controller/facultyController');


router.route('/faculties').get(getAllFaculties);
router.route('/faculty:id').get(getFaculty);
router.route('/faculty/new').post(newFaculty);
router.route('/faculty/update:id').put(updateFaculty);
router.route('/faculty/remove:id').delete(deleteFaculty);

module.exports = router;