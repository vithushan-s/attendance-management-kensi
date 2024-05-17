'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('batches',{
      fields:['course_id'],
      type:'foreign key',
      name:'batch & course association',
      references:{
        table:'courses',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('batches',{
      fields:['course_id'],
      type:'foreign key',
      name:'batch & course association',
      references:{
        table:'courses',
        field:'id'
      }
    })
  }
};
