const Models = require('../database/models/index');
const fnCrud = require('../Util/dbCrud');

const getAllDepartments = fnCrud.getAllRecords(Models.department);
const getDepartment = fnCrud.getRecord(Models.department);
const newDepartment = fnCrud.newRecord(Models.department);
const updateDepartment = fnCrud.updateRecord(Models.department);
const deleteDepartment = fnCrud.deleteRecord(Models.department);

module.exports ={
    getAllDepartments,
    getDepartment,
    newDepartment,
    updateDepartment,
    deleteDepartment
}