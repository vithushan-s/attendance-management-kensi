'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('subjectLecturers',{
      fields:['subject_id'],
      type:'foreign key',
      name:'subjectLecture & subject association',
      references:{
        table:'subjects',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('subjectLecturers',{
      fields:['subject_id'],
      type:'foreign key',
      name:'subjectLecture & subject association',
      references:{
        table:'subjects',
        field:'id'
      }
    })
  }
};
