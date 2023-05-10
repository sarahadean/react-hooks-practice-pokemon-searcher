import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  //States
  const [pokemonState, setPokemon] = useState('')
  const [search, setSearch] = useState('')
  

  useEffect(() => {getPokemon()}, [])

  function getPokemon(){
    fetch ('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(pokemonState => setPokemon(pokemonState))
  }
  // console.log(pokemonState)

  //function to update pokemonState
  function updatePokemon(newMonster){
    setPokemon([
      ...pokemonState,
      newMonster
    ])
  }

function searchPokes(newSearch){
  setSearch(newSearch)
}


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm updatePokemon={updatePokemon} />
      <br />
      <Search searchPokes={searchPokes} search={search}/>
      <br />
      <PokemonCollection pokemonState={pokemonState} search={search}/>
    </Container>
  );
}

export default PokemonPage;
