'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('courses',{
      fields:['department_id'],
      type:'foreign key',
      name:'course & department association',
      references:{
        table:'departments',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('courses',{
      fields:['department_id'],
      type:'foreign key',
      name:'course & department association',
      references:{
        table:'departments',
        field:'id'
      }
    })
  }
};
