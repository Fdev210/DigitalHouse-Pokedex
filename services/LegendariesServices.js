const LegendaryModel = require('../models/LegendaryModel');

const legendariesService = {
    listLegendaries: () => {
        // const pineco = new LegendaryModel(1, 'Pineco', 'Melhor legendery que existe', 'bug');
        // const pikachu = new LegendaryModel(2, 'Pikachu', 'segundo melhor legendery que existe', 'electric');
        const mew = new LegendaryModel(
            3,
            'mew',
            'Mew é uma espécie de Pokémon, pertencente à franquia de mídia Pokémon da Nintendo.',
            'pshicic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000');
    
        const moltres = new LegendaryModel(
            4,
            'moltres',
            'Description',
            'pshicic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000'
        );
        

        const articuno = new LegendaryModel(
            4,
            'moltres',
            'Description',
            'pshicic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000'
        );

        const zapdos = new LegendaryModel(
            4,
            'moltres',
            'Description',
            'pshicic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000'
        );

        const diance = new LegendaryModel(
            4,
            'moltres',
            'Description',
            'pshicic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000'
        );

        const xerneas = new LegendaryModel(
            4,
            'moltres',
            'Description',
            'pshicic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000'
        );

        return [mew, moltres, articuno, zapdos, diance, xerneas];
},

    listPokemonData: (pokemonName) => {
        const pokemonList = legendariesService.listLegendaries();
        const pokemon = pokemonList.find(item => item.name === pokemonName);
        return pokemon;
    }
}
module.exports = legendariesService