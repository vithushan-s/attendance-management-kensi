'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    
    static associate(models) {
      this.belongsTo(models.department);
      this.belongsTo(models.student);
      this.hasMany(models.subject);
      this.hasMany(models.batch);
    }
  }
  course.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    department_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};