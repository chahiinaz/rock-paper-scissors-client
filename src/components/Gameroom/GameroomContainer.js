import React, { Component } from 'react'
import Gameroom from './Gameroom'
import { baseUrl } from '../../actions/auth'
import axios from 'axios'

class GameroomContainter extends Component {
  state = {
    roomname: ""
  };

  onChoice = (choice) => {
    try {
      axios
        .put(`${baseUrl}/player/:choice`,
          { choice })

    } catch (error) {
      throw error
    }
  }


  render() {

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