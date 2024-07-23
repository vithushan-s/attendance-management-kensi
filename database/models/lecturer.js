'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lecturer extends Model {
    
    static associate(models) {
      this.belongsTo(models.department);
      this.hasMany(models.subjectLecturer)
    }
  }
  lecturer.init({
    emp_no: DataTypes.STRING,
    title: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile_no: DataTypes.STRING,
    designation: DataTypes.STRING,
    department_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lecturer',
  });
  return lecturer;
};