'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class department extends Model {
    
    static associate(models) {
      this.hasMany(models.course);
      this.hasMany(models.lecturer);
      this.belongsTo(models.faculty)
    }
  }
  department.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    faculty_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'department',
  });
  return department;
};