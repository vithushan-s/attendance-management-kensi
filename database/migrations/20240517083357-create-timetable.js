'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('timetables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      batch_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      subject_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      time_slot: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      day: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('timetables');
  }
};