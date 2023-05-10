import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonState, search }) {

  const filteredPokes = [...pokemonState].filter(el =>
    el.name.toLowerCase().includes(search.toLowerCase()))

  const pokeMap = filteredPokes.map(el =>
    <PokemonCard 
    key={el.id}
    name={el.name}
    hp={el.hp}
    frontSprite={el.sprites.front}
    backSprite={el.sprites.back}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {pokeMap}
    </Card.Group>
  );
}

export default PokemonCollection;
