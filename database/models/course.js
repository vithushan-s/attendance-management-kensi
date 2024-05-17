'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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