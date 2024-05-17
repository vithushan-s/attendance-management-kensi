const express = require('express');
const router = express.Router();

const {getAllDepartments,getDepartment,newDepartment,updateDepartment,deleteDepartment} = require('../controller/departmentController');


router.route('/departments').get(getAllDepartments);
router.route('/department:id').get(getDepartment);
router.route('/department/new').post(newDepartment);
router.route('/department/update:id').put(updateDepartment);
router.route('/department/remove:id').delete(deleteDepartment);

module.exports = router;