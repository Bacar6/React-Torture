import React from 'react';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const App = () => {
  const Pokemon = pokemonList[0];

  return <PokemonCard pokemon={pokemonList} />;
};

export default App;















/*
import React from 'react';
import PokemonCard from './components/PokemonCard';
const App = () => {
//  return  <PokemonCard />;
};

export default App;
*/








/*
import React from 'react';
import PokemonCard from './components/PokemonCard';
const App = () => {
  return (
 //  <PokemonCard />
  );
};

export default App;
*/

















