import React from "react";

const NavBar = ({ pokemonList, onPokemonSelect }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => onPokemonSelect(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};








{/*
const NavBar = ({pokemonList}) => {
  return (
    <div>
      <button onClick={onPrecedent}>Précédent</button>
      <button onClick={onSuivant}>Suivant</button>
    </div>
  );
};
*/}
export default NavBar;