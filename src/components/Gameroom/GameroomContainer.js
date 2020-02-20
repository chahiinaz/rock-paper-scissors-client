import React, { Component } from 'react'
import Gameroom from './Gameroom'
import { baseUrl } from '../../actions/auth'
import axios from 'axios'

class GameroomContainter extends Component {
  state = {
    roomname: ""
  };



  // onChoice = (event, choice) => {




  // }

  onChoice = (choice) => {
    try {
      axios
        .put(`${baseUrl}/player/choice`,
          { choice })

    } catch (error) {
      throw error
    }
  }



  // handleRockClick = () => { console.log('Rock') }
  // handlePaperClick = () => { console.log('Paper') }
  // handleScissorsClick = () => { console.log('Scissors') }

  render() {
    // const rock = 'rock';
    // const paper = 'paper';
    // const scissors = 'scissors';
    return (

      <div>
        <Gameroom
          onChoice={this.onChoice}
        />
      </div>
    )
  }
}


export default GameroomContainter