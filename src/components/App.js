import React from "react";
import PokemonPage from "./PokemonPage";

/*Project Goals:
1. Create an index displaying Pokemon 'cards'
2. Render each Pokemon name, sprite, and hp in a card
3. When clicked, the card should toggle between displaying the front and back sprites

4. FORM - SEARCH: Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page

5. Wire up the form to add a missing Pokemon (Bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a POST request, etc. When a new Pokemon is added, it should show on the page without having to refresh.

Hierarchy:
App
  |
PokemonPage(will hold pokemonState, searchState)
  |
  PokemonForm
  Search
  PokemonCollection
            |
            PokemonCard


*/


function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
