const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
    listLegendaries: () => {
        const mew = new LegendaryModel(
            1, 
            'mew',
            'images/mew.svg', 
            "Its DNA is almost the same as Mew's. However, its size and disposition are vastly different.",
            'Psychic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000'); 

        const moltres =  new LegendaryModel(
            2, 
            'moltres',
            'images/moltres.svg',
            "It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
            'Flame',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000');
            
        const articuno =  new LegendaryModel(
            2, 
            'articuno', 
            'images/articuno.svg',
            "One of the legendary bird Pokémon, it chills moisture in the atmosphere to create snow while flying.",
            'ice',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000');

        const zapdos =  new LegendaryModel(
            2, 
            'zapdos', 
            'images/zapdos.svg',
            "A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts.",
            'eletric',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000');

        const diance =  new LegendaryModel(
            2, 
            'diancie', 
            'images/diance.svg',
            "It can instantly create many diamonds by compressing the carbon in the air between its hands",
            'Flame',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000');

        const xerneas =  new LegendaryModel(
            2, 
            'xerneas', 
            'images/xerneas.svg',
            "It’s one of the legendary bird Pokémon. Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.",
            'Flame',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000');

        return [mew, moltres, articuno, zapdos, diance, xerneas];
    },

    listPokemonData: (pokemonName) => {
        const pokemonList = LegendariesService.listLegendaries(); 
        const pokemon = pokemonList.find(item => item.name === pokemonName);
        return pokemon;
    }
}

module.exports = LegendariesService;