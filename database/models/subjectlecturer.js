'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subjectLecturer extends Model {
    
    static associate(models) {
     
      this.belongsTo(models.subject);
      this.belongsTo(models.lecturer);
    }
  }
  subjectLecturer.init({
    subject_id: DataTypes.INTEGER,
    lecturer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'subjectLecturer',
  });
  return subjectLecturer;
};