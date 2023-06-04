import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const currentPokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <button onClick={handlePrevious}>Précédent</button>
      <button onClick={handleNext}>Suivant</button>
      <PokemonCard pokemon={currentPokemon} />
    </div>
  );
};

export default App;

















/*
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

 // return <PokemonCard pokemon={pokemonList} />;
};

export default App;

*/













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

















