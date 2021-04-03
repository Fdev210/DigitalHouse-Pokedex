const legendariesService = require('../services/LegendariesServices')

const controller = {
    index: (req, res) => {

        const { name } = req.query;

        const legendary = legendariesService.listPokemonData(name);

        return res.render('legendaries', {
            legendary
        });

        // const legendariesList = legendariesService.listLegendaries();
        // res.json(legendariesList);
    }
};

module.exports = controller;