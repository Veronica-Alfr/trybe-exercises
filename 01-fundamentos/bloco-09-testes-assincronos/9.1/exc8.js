// Complete a chamada da função getPokemonDetails de modo que ela imprima no 
// console os detalhes do pokémon que você escolheu. 
// PS: é possível que o sistema do Professor Carvalho apresente erros caso o pokémon não exista
// no banco de dados, então não se esqueça de tratá-los também, combinado?

const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grass',
      ability: 'Razor Leaf',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      ability: 'Ember',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      ability: 'Water Gun',
    },
  ];
  
  function getPokemonDetails(filter, callback) {
    setTimeout(() => {
      if (pokemons.find(filter) === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
      const pokemon = pokemons.find(filter);
  
      const { name, type, ability } = pokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
// Aqui foi necessário criar uma hof para o find que esta na linha 23
const filtro = (pokemon) => pokemon.name === pokemon;

const retornos = (param1, param2) => {
  if (!param1) {
    console.log(param2);
  }
  if (!param2) {
    console.log(param1);
  }
};

  getPokemonDetails(filtro, retornos());
  
  module.exports = {
    getPokemonDetails,
  };