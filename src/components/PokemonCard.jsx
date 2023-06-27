//import React from 'react'; : Cette ligne importe le module React, qui est nécessaire pour définir les composants React.
import React from 'react';

//import PropTypes from 'prop-types'; : Cette ligne importe le module PropTypes, qui permet de définir les types des props attendues par un composant. Cela permet de valider les données reçues et de détecter d'éventuelles erreurs.
import PropTypes from 'prop-types';

//const pokemonList = [...] : Cette partie du code définit une variable pokemonList qui contient un tableau d'objets représentant différents Pokémon. Chaque objet a une propriété name pour le nom du Pokémon et imgSrc pour l'URL de l'image correspondante.
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

//const PokemonCard = ({ pokemon }) => { : Cette ligne définit le composant PokemonCard en utilisant une fonction fléchée. Il prend une prop pokemon en tant que paramètre destructuré.
const PokemonCard = ({ pokemon }) => {
  return (

//figure : Cette balise HTML représente une figure qui contient le contenu de la carte Pokémon.
    <figure>

{/* {pokemon.imgSrc != null ? ( ... ) : ( ... )} : Cette ligne utilise une expression ternaire pour effectuer un rendu conditionnel. Si pokemon.imgSrc n'est pas nul (null), alors le premier bloc (...) est exécuté, sinon le second bloc (...) est exécuté. */}
      {pokemon.imgSrc != null ? (

//{/*  <img src={pokemon.imgSrc} alt={pokemon.name} /> : Si pokemon.imgSrc n'est pas nul, cette ligne affiche une balise img avec la source de l'image (src) définie sur pokemon.imgSrc et l'attribut alt défini sur pokemon.name.   */}   
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (

//{/* <p>???</p> : Si pokemon.imgSrc est nul, cette ligne affiche une balise p avec le texte "???". */}    
        <p>???</p>
      )}

//{/* <figcaption>{pokemon.name}</figcaption> : Cette ligne affiche le nom du Pokémon à l'intérieur d'une balise figcaption.*/} 
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

 //{/* PokemonCard.propTypes = { ... } : Cette partie du code définit les prop types attendues par le composant PokemonCard. On utilise PropTypes.shape pour spécifier que pokemon doit être un objet avec une structure spécifique.
// name: PropTypes.string.isRequired, : Cette ligne indique que la propriété name de l'objet pokemon doit être une chaîne de caractères requise.
// imgSrc: PropTypes.string, : Cette ligne indique que la propriété imgSrc de l'objet pokemon est une chaîne de caractères optionnelle.*/} 
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

//export default PokemonCard; : Cette ligne exporte le composant PokemonCard par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres parties de l'application.
export default PokemonCard;










/*
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
*/










/*
function pokemonCard({Pokemon}) {
 const pokemon = pokemonList[0]
console.log(pokemon); 
  return (
 //   <figure>
 // {pokemon.imgSrc != null ?(<img src={pokemon.imgSrc} alt={pokemon.name} />) :( <p>???</p> )}
 //     <figcaption>{pokemon.name}</figcaption>
 //   </figure>
  );
}
export default pokemonCard;
*/



