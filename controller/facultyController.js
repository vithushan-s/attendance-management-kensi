const Models = require('../database/models/index');
const fnCrud = require('../Util/dbCrud');

const getAllFaculties = fnCrud.getAllRecords(Models.faculty);
const getFaculty = fnCrud.getRecord(Models.faculty);
const newFaculty = fnCrud.newRecord(Models.faculty);
const updateFaculty = fnCrud.updateRecord(Models.faculty);
const deleteFaculty = fnCrud.deleteRecord(Models.faculty);

module.exports ={
    getAllFaculties,
    getFaculty,
    newFaculty,
    updateFaculty,
    deleteFaculty
}