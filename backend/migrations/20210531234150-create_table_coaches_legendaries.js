'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.createTable('coach', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      coachId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'coaches',
          key: 'id'
        }
      },

      legendaryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'legendaries',
          key: 'id'
        }
      }
    });
  
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.dropTable('users');
  }
};
