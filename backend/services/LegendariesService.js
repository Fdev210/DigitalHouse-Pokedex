const LegendaryModel = require('../models/LegendaryModel');
const { v4: uuidv4 } = require('uuid');

const database = require('../database/models/index');

const LegendariesService = {
    createLegendary: async (
        name,  
        description, 
        type, 
        healthPoints, 
        specialAttack, 
        defense, 
        attack, 
        experience, 
        specialDefense,
    ) => {
        const newLegendary = await database.Legendary.create({
            name,  
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense,
        })
        return newLegendary;
    },

    getLegendaryList: async () => {
        // const listLegendaries = await database.Legendary.findAll({
        //    attiributes: ['name', 'description']
        //})
        const listLegendaries = await database.sequelize.query("select name, description from legendaries where id = :id", {
            type: database.Sequelize.QueryTypes.SELECT
        })
        return listLegendaries
    },

    updateLegendary: async (
        id, 
        name,  
        description, 
        type, 
        healthPoints, 
        specialAttack, 
        defense, 
        attack, 
        experience, 
        specialDefense
    ) => {
        const newValues = await database.Legendary.update({
        name,  
        description, 
        type, 
        healthPoints, 
        specialAttack, 
        defense, 
        attack, 
        experience, 
        specialDefense
        }, {
            where: { id },
        })

        const values = await database.Legendary.findByPk(id)
        return values.dataValues
    },

    destroyLegendary: async (id) => {
        const targetValues = await database.Legendary.findByPk(id)
        const target = await database.Legendary.destroy({
            where: { id }
        });
        
        return targetValues.dataValues
    },

    getById: async (id) => {
        return await database.Legendary.findByPk(id)
    },

    getByAttribute: async (id, attribute) => {
        return await database.Legendary.findByPk(id, {
            attributes: [attribute]
        })
    }
}

module.exports = LegendariesService;