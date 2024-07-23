'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class batch extends Model {
    
    static associate(models) {
      this.belongsTo(models.course);
      this.belongsTo(models.student);
    }
  }
  batch.init({
    register_year: DataTypes.INTEGER,
    academic_start_date: DataTypes.DATE,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'batch',
  });
  return batch;
};