import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clickStatus: false
  }

  handleClick = () => {
    this.setState({
      clickStatus: !this.state.clickStatus
    })
  }

  render() {
    // debugger
    return (
      <Card>
        <div className="pokemon-card" onClick={this.handleClick}>

          <div>
            {this.state.clickStatus ?
              <div className="image">
                <img src={this.props.pokemon.sprites.back} alt={this.props.pokemon.name} />
              </div>
              :
              <div className="image">
              <img src={this.props.pokemon.sprites.front} alt={this.props.pokemon.name} />
            </div>            
            }
          </div>

          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>

          {/* <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.slice(-1)[0].value} hp
            </span>
          </div> */}

        </div>
      </Card>
    )
  }
}

export default PokemonCard
