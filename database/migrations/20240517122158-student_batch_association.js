'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('students',{
      fields:['batch_id'],
      type:'foreign key',
      name:'student & batch association',
      references:{
        table:'batches',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('students',{
      fields:['batch_id'],
      type:'foreign key',
      name:'student & batch association',
      references:{
        table:'batches',
        field:'id'
      }
    })
  }
};
