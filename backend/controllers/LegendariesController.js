const { EMLINK } = require('constants');
const fs = require('fs');
const path = require('path');
const listLegendaries = path.join(__dirname, '../legendaries.json');
const LegendariesService = require('../services/LegendariesService');


const controller = {
    index: (req, res) => {
        const { name } = req.query;

        const legendary = LegendariesService.listPokemonData(name);        

        return res.json(legendary);
    },

    create: (req, res) => {
        fs.readFile(listLegendaries, 'utf8', (err, jsonLegendaries) => {
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
            const insertLegendary = JSON.stringify(arrayLegendaries, null, 2);

            fs.writeFile(listLegendaries, insertLegendary, err => {
                if (err) throw err;
                console.log('Pokemon criado com sucesso !')
            });

            return res.json(legendary);
        })
    }, 

    read: (req, res) => {
        fs.readFile(listLegendaries, 'utf8', (err, jsonLegendaries) => {
            if (err) throw err;
            const legendariesList = JSON.parse(jsonLegendaries)
            return res.json(legendariesList);
        })
    },

    update: (req, res) => {
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
            specialDefense,
        } = req.body;

        fs.readFile(listLegendaries, 'utf8', (err, jsonLegendaries) => {
            if (err) throw err;
            
            const arrayLegendaries = JSON.parse(jsonLegendaries);

            let indexId = arrayLegendaries.findIndex(elem => elem.id == id)
            
            if(indexId == -1) return res.status(400).render('not-found');
            
            for(let legendary of arrayLegendaries) {
                if(legendary.id == id) {
                    legendary.name = name,  
                    legendary.description = description, 
                    legendary.type = type, 
                    legendary.healthPoints = healthPoints, 
                    legendary.specialAttack = specialAttack, 
                    legendary.defense = defense, 
                    legendary.attack = attack, 
                    legendary.experience = experience, 
                    legendary.specialDefense = specialDefense
                }     
            }
            
            let updateLegendary = arrayLegendaries[indexId];

            const updateList = JSON.stringify(arrayLegendaries, null, 2);
            fs.writeFile(listLegendaries, updateList, err => {
                if(err) throw err;
                console.log('Legendary atualizado com sucesso')
                
            })       
            
            return res.json(updateLegendary);
        })     
    },

    delete: (req, res) => {

        let { id } = req.params;
        
        fs.readFile(listLegendaries, 'utf8', (err, jsonLegendaries) => {
            if(err) throw err;
            
            let arrayLegendaries = JSON.parse(jsonLegendaries);

            const indexId = arrayLegendaries.findIndex(elem => elem.id == id);
            let newArray = arrayLegendaries.filter(elem => elem.id != id);
            
            if(indexId == -1) return res.status(400).render('not-found');
                            
            const newList = JSON.stringify(newArray, null, 2)
            
            fs.writeFile(listLegendaries, newList, err => {
                if (err) throw err;
                console.log('Pokemon excluído com sucesso')
            });
            
            return res.json(newList);
        });
    }
}


module.exports = controller;