'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class faculty extends Model {
    
    static associate(models) {
      this.hasMany(models.department)
    }
  }
  faculty.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'faculty',
  });
  return faculty;
};