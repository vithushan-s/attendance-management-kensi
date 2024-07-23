'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class timetable extends Model {
    static associate(models) {
      // define association here
    }
  }
  timetable.init({
    course_id: DataTypes.INTEGER,
    batch_id: DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER,
    time_slot: DataTypes.STRING,
    day: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'timetable',
  });
  return timetable;
};