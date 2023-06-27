//Ce code est écrit en utilisant la bibliothèque React pour créer une application web. L'application affiche une liste de cartes Pokémon et permet de naviguer entre elles à l'aide de deux boutons "Précédent" et "Suivant".

//Commençons par les importations. La première ligne importe React et useState depuis la bibliothèque React. Ensuite, PokemonCard est importé depuis un fichier de composant local ./components/PokemonCard. Ces importations permettent d'utiliser les fonctionnalités de React dans le code.
import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';


//Ensuite, une variable pokemonList est définie. Elle contient un tableau d'objets représentant différents Pokémon. Chaque objet contient le nom et l'URL de l'image du Pokémon. Notez que le dernier objet, représentant le Pokémon "mew", n'a pas d'URL d'image.
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


//Ensuite, le composant App est défini. Il utilise le hook useState pour gérer un état local pokemonIndex, qui représente l'index du Pokémon actuellement affiché dans la liste.
const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);


 // Deux fonctions buttonPrecedent et buttonSuivant sont définies pour mettre à jour l'index pokemonIndex lorsque les boutons "Précédent" et "Suivant" sont cliqués. Si l'index est dans les limites du tableau pokemonList, il est mis à jour en conséquence.
  const buttonPrecedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const buttonSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };


//  Ensuite, la variable currentPokemon est définie en utilisant l'index pokemonIndex pour accéder au Pokémon correspondant dans le tableau pokemonList. 
  const currentPokemon = pokemonList[pokemonIndex];


//  Enfin, dans le rendu du composant App, on trouve deux boutons "Précédent" et "Suivant" qui appellent respectivement les fonctions buttonPrecedent et buttonSuivant lorsqu'ils sont cliqués. La carte Pokémon actuelle est affichée en utilisant le composant PokemonCard en lui passant le Pokémon correspondant en tant que prop.
  return (
    <div>
      <button onClick={buttonPrecedent}>Précédent</button>
      <button onClick={buttonSuivant}>Suivant</button>
      <PokemonCard pokemon={currentPokemon} />
    </div>
  );
};


// Le code exporte ensuite le composant App par défaut, ce qui signifie qu'il peut être utilisé ailleurs dans l'application ou dans d'autres fichiers.
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

















