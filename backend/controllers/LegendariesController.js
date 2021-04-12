const { EMLINK } = require('constants');
const fs = require('fs');
const listLegendaries = require('../legendaries.json')
const LegendariesService = require('../services/LegendariesService');


const controller = {
    index: (req, res) => {
        const { name } = req.query;

        const legendary = LegendariesService.listPokemonData(name);        

        return res.json(legendary);
    },

    create: (req, res) => {
        fs.readFile('../legendaries.json', 'utf8', (err, jsonLegendaries) => {
            if (err) throw err;
            
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

            const legendary = LegendariesService.createLegendary(
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
                
            let arrayLegendaries = JSON.parse(jsonLegendaries);

            arrayLegendaries.push(legendary);           
            const legendariesList = () => JSON.stringify(arrayLegendaries, null, 2);

            fs.writeFile('../legendaries.json', legendariesList(), err => {
                if (err) throw err;
                console.log('Pokemon criado com sucesso !')
            });

            return res.json(legendary);
        })
    }, 

    read: (req, res) => {
        fs.readFile('../legendaries.json', 'utf8', (err, jsonLegendaries) => {
            if (err) throw err;
            const legendariesList = JSON.parse(jsonLegendaries)
            return res.json(legendariesList);
        })
    },

    update: (req, res) => {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({error: 'ID is required'})
        }

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

        fs.readFile('../legendaries.json', 'utf8', (err, jsonLegendaries) => {
            if (err) throw err;
            const arrayLegendaries = JSON.parse(jsonLegendaries);

            arrayLegendaries.foreach(elem => {
                if(elem.id === id) {
                    elem.name = name;
                    elem.description = description;
                    elem.type = type;
                    elem.healthPoints = healthPoints; 
                    elem.specialAttack = specialAttack; 
                    elem.defense = defense;
                    elem.attack = attack;
                    elem.experience = experience;
                    elem.specialDefense = specialDefense;
                }

            let legendariesList = () => JSON.stringify(arrayLegendaries, null, 2);
            fs.writeFile('../legendaries.json', legendariesList(), err =>{
                if(err) throw err;
                console.log('Legendary deletado com sucesso')
            })
    
            return res.json(legendariesList());
            })
        })        
    },

    delete: (req, res) => {

        let { id } = req.params;

        if(!id) {
            return res.status(400).json({error: 'ID is required'})
        }

        fs.readFile('../legendaries.json', 'utf8', (err, jsonLegendaries) => {
            if(err) throw err;

            let arrayLegendaries = JSON.parse(jsonLegendaries);
            
            arrayLegendaries.filter(elem => elem.id !== id);
            const legendariesList = () => JSON.stringify(arrayLegendaries, null, 2)
            
            fs.writeFile('../legendaries.json', legendariesList(), err => {
                if (err) throw err;
                console.log('Pokemon excluído com sucesso')
            });

            res.json(legendariesList());
        });
    }
}


module.exports = controller;