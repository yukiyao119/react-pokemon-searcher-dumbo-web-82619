import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import { loadavg } from 'os'

class PokemonPage extends React.Component {

  state = {
    pokemonsArr: [],
    query: "",
  }

  componentDidMount(){
    this.getPokemons()
  }

  getPokemons = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then( data => {
        this.setState({
          pokemonsArr: data
        })
      })
  }

  handleSearch = (evt) => {
    console.log(this.state.pokemonsArr);
    // evt.persist()
    this.setState(
      {query: evt.target.value},
      () => {console.log(this.state.query)}
    )
  }

  resultPokemon = () => {
    if (this.state.query){
      return this.state.pokemonsArr.filter(pokemon => pokemon.name.includes(this.state.query))
    } else {
      return this.state.pokemonsArr
    }
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
        getPokemons={this.getPokemons}
        />
        <br />
        <Search 
        // _.debounce(() => console.log('🤔'), 500)
        onSearchChange={this.handleSearch} 
        showNoResults={false} 
        type='text' />
        <br />
        <PokemonCollection 
        pokemons={this.resultPokemon()} />
      </div>
    )
  }



}

export default PokemonPage
