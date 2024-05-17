'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('lecturers',{
      fields:['department_id'],
      type:'foreign key',
      name:'lecturer & department association',
      references:{
        table:'departments',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('lecturers',{
      fields:['department_id'],
      type:'foreign key',
      name:'lecturer & department association',
      references:{
        table:'departments',
        field:'id'
      }
    })
  }
};
