'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class timetable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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