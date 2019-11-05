import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      hp: '',
      // sprites:
      //   {
      //     frontUrl: '',
      //     backUrl: ''
      //   },
      frontUrl: '',
      backUrl: ''
      // stats: [{
      //   value: 0,
      //   name: 'hp'
      // }]
    }
  }

  // [event.target.name]: event.target.value
  handleNameChange = event => {
    this.setState({
      name: event.target.value
    }, () => {console.log(this.state)})
  }

  handleHpChange = event => {
    this.setState({
      // stats: [{
      //   value: event.target.value,
      //   name: 'hp'
      // }]
      hp: event.target.value
    }, () => {console.log(this.state)})
  }

  handleFrontChange = event => {
    this.setState({
      frontUrl: event.target.value
      // sprites: { 
      //   ...this.state.sprites, 
      //   frontUrl: event.target.value
      // } 
    }, () => {console.log(this.state)})
  }

  handleBackChange = event => {
    this.setState({
      backUrl: event.target.value
      // sprites: { 
      //   ...this.state.sprites, 
      //   backUrl: event.target.value
      // } 
    }, () => {console.log(this.state)})
  }


  handleSubmit = event => {
    event.preventDefault()
    debugger
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        sprites: {
          frontUrl: this.state.frontUrl,
          backUrl: this.state.backUrl
        },
        stats: [{
          value: this.state.hp,
          name: 'hp'
        }]
      })
    })
      
    // this.props.addPokemon(this.state.text, this.state.eyes)
    this.setState({
      ...this.state
    }, () => {
      console.log(this.state)
    })
    
    // this.props.getPokemons()
  
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" 
            value={this.state.name} 
            onChange={this.handleNameChange}/>

            <Form.Input fluid label="hp" placeholder="hp" name="hp" 
            value={this.state.hp}
            onChange={this.handleHpChange}/>

            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" 
            // value={this.state.sprites.frontUrl}
            value={this.state.frontUrl}
            onChange={this.handleFrontChange}/>

            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" 
            // value={this.state.sprites.backUrl}
            value={this.state.backUrl}
            onChange={this.handleBackChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
