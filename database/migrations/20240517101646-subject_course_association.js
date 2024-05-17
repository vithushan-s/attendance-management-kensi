'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('subjects',{
      fields:['course_id'],
      type:'foreign key',
      name:'subject & course association',
      references:{
        table:'courses',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('subjects',{
      fields:['course_id'],
      type:'foreign key',
      name:'subject & course association',
      references:{
        table:'courses',
        field:'id'
      }
    })
  }
};
