import React, { Component } from 'react'
import Gameroom from './Gameroom'
import instance from '../../axios'
import axios from 'axios'
import { connect } from 'react-redux'

class GameroomContainter extends Component {
  state = {
    roomname: ""
  };

  onChoice = (choice) => {
    console.log("gamerooms props", this.props.gameRooms.players)

    try {
      const room = this.props.gameRooms.filter(room => room.id == this.props.match.params.id)
      // const playerId = room.players.map(player => player.id)
      // console.log('player id', playerId
      // const room = this.props.gameRooms.filter(room => room.id === this.props.match.params)
      console.log('room ', room)

      axios
        .put(`${instance}/player/${choice}`,
          {
            choice
            // playerId
          })

    } catch (error) {
      throw error
    }
  }


  render() {
    console.log('Gameroom props', this.props)
    return (

      <div>
        <Gameroom
          onChoice={this.onChoice}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameRooms: state.lobby,
    user: state.auth
  };
};

export default connect(mapStateToProps)(GameroomContainter);
