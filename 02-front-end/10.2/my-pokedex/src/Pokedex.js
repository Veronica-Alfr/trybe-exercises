import pokemons from './data';
import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (pokemons.map((pokemon) => <Pokemon data={pokemon} key={pokemon.id}/>))
    }
}

export default Pokedex;