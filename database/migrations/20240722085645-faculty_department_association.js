'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('departments',{
      fields:['faculty_id'],
      type:'foreign key',
      name:'faculty & department association',
      references:{
        table:'faculties',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('departments',{
      fields:['faculty_id'],
      type:'foreign key',
      name:'faculty & department association',
      references:{
        table:'faculties',
        field:'id'
      }
    })
  }
};
