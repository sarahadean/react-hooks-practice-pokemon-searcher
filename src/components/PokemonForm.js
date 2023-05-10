import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ updatePokemon }) {
  const formOutline = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }
  const [form, setForm] = useState(formOutline)

function handleChange(e){
 setForm({...form, 
  [e.target.name]: e.target.value})
}

function handleSubmit(e){
  e.preventDefault()
  fetch('http://localhost:3001/pokemon',{
    method: 'POST',
    body: JSON.stringify({
      name: form.name,
      hp: form.hp,
      sprites: {front: form.frontUrl,
      back: form.backUrl}
    }),
    headers:{
      'content-type':'application/json'
    }
  })
.then(r => r.json())
.then(newPoke => {
  updatePokemon(newPoke)
  setForm(formOutline)
})
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {handleSubmit(e)}}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" 
          value={form.name}
          onChange={(e) => handleChange(e)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp"
          value={form.hp}
          onChange={(e) => handleChange(e)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={form.frontUrl}
            onChange={(e) => handleChange(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={form.backUrl}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
