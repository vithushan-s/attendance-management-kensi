'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('students',{
      fields:['course_id'],
      type:'foreign key',
      name:'student & course association',
      references:{
        table:'courses',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('students',{
      fields:['course_id'],
      type:'foreign key',
      name:'student & course association',
      references:{
        table:'courses',
        field:'id'
      }
    })
  }
};
