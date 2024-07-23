'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subject extends Model {
    
    static associate(models) {
      this.belongsTo(models.course)
      this.hasMany(models.subjectLecturer)
    }
  }
  subject.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    credit: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    semester: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'subject',
  });
  return subject;
};