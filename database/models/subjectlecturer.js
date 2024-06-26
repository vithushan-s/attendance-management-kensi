'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subjectLecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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