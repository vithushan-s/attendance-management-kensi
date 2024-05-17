'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('subjectLecturers',{
      fields:['lecturer_id'],
      type:'foreign key',
      name:'subjectLecture & lecturer association',
      references:{
        table:'lecturers',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('subjectLecturers',{
      fields:['lecturer_id'],
      type:'foreign key',
      name:'subjectLecture & lecturer association',
      references:{
        table:'lecturers',
        field:'id'
      }
    })
  }
};
