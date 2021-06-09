const fs = require('fs');
const path = require('path');
const listLegendaries = path.join(__dirname, '../legendaries.json');
const LegendariesService = require('../services/LegendariesService');
const {validationResult} = require('express-validator');

const controller = {
    indexId: async (req, res) => {
        const { id } = req.params
        const legendary = await LegendariesService.getById(id)

        if(!legendary) {
            return res. status(404).json({error: `Legendary ${id} not found`})
        }

        return res.json(legendary)

    },

    indexIdAndAttribute: async (req, res) => {
        const { id, attribute} = req.params

        const legendary = await LegendariesService.getByAttribute(id, attribute)

        if(!legendary) {
            return res. status(404).json({error: `Legendary ${id} not found`})
        }

        return res.json(legendary)
    },

    index: (req, res) => {
        const { name } = req.query;

        const legendary = LegendariesService.listPokemonData(name);        

        return res.json(legendary);
    },

    create: async (req, res) => {           
            const {
                name,  
                description, 
                type, 
                healthPoints, 
                specialAttack, 
                defense, 
                attack, 
                experience, 
                specialDefense,
            } = req.body;

            const legendary = await LegendariesService.createLegendary(
                name,  
                description, 
                type, 
                healthPoints, 
                specialAttack, 
                defense, 
                attack, 
                experience, 
                specialDefense,
            )
            return res.json(legendary);

    }, 

    read: async (req, res) => {
        const list = await LegendariesService.getLegendaryList();
        return res.json(list);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const {
            name,  
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense
        } = req.body;

        const updateLegendary = await LegendariesService.updateLegendary(
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
        )              
            return res.json(updateLegendary);
   
    },

    delete: async (req, res) => {

        let { id } = req.params;

        const newArray = await LegendariesService.destroyLegendary(id)
        
        // fs.readFile(listLegendaries, 'utf8', (err, jsonLegendaries) => {
        //     if(err) throw err;
            
        //     let arrayLegendaries = JSON.parse(jsonLegendaries);

        //     const indexId = arrayLegendaries.findIndex(elem => elem.id == id);
        //     let newArray = arrayLegendaries.filter(elem => elem.id != id);
            
        //     if(indexId == -1) return res.status(400).render('not-found');
                            
        //     const newList = JSON.stringify(newArray, null, 2)
            
        //     fs.writeFile(listLegendaries, newList, err => {
        //         if (err) throw err;
        //         console.log('Pokemon excluído com sucesso')
        //     });
            
            return res.json(newArray);
        // });
    }
}


module.exports = controller;