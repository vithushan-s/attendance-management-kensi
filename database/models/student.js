'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    
    static associate(models) {
      this.hasOne(models.course);
      this.hasOne(models.batch)
    }
  }
  student.init({
    index_no: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    course_id: DataTypes.INTEGER,
    batch_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};