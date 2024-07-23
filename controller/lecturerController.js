const Models = require('../database/models/index');
const fnCrud = require('../Util/dbCrud');

const getAllLecturers = fnCrud.getAllRecords(Models.lecturer);
const getLecturer = fnCrud.getRecord(Models.lecturer);
const newLecturer = fnCrud.newRecord(Models.lecturer);
const updateLecturer = fnCrud.updateRecord(Models.lecturer);
const deleteLecturer = fnCrud.deleteRecord(Models.lecturer);

module.exports ={
    getAllLecturers,
    getLecturer,
    newLecturer,
    updateLecturer,
    deleteLecturer
}