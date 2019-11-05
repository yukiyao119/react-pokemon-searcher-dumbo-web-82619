import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  scrollContainerRef = React.createRef()

  componentDidUpdate() {
    console.log("cdu in pokemon collection")
    // this.scrollContainerRef.current.scrollTop = 99999999999
  }

  render() {
    return (
      // ref={ this.scrollContainerRef }
      <Card.Group itemsPerRow={6} ref={ this.scrollContainerRef }>
      
        <br/>
        {
          this.props.pokemons.map(pokemon => {
            return <PokemonCard 
            pokemon={pokemon} 
            pokemons={this.props.pokemons}/>
          }
        )}
      </Card.Group>
    )

  
  }

}

export default PokemonCollection
