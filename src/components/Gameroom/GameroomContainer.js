import React, { Component } from "react";
import Gameroom from "./Gameroom";
import instance from "../../axios";
// import axios from "axios";
import { connect } from "react-redux";
import { setPlayerChoice } from "../../actions/setPlayerChoice";

class GameroomContainer extends Component {
  state = {
    roomname: "",
    choice: ""

  };

  onChoice = choice => {
    // console.log("gamerooms props", this.props.gameRooms.players);
    // console.log("gamerooms", this.props.gameRooms);
    this.setState({
      ...this.state, choice: choice
    })
    try {
      const room = this.props.gameRooms.filter(
        room => room.id.toString() === this.props.match.params.id.toString()
      );
      // console.log("room", room);
      // console.log(this.props.gameRooms, this.props.match.params.id);
      const playerId = room[0].players.map(player => player.id);
      // console.log("player id", playerId);
      // const room = this.props.gameRooms.filter(room => room.id === this.props.match.params)
      // console.log("room ", room);
      // console.log("choice", choice, `${instance}/player/${choice}`);
      this.props.setPlayerChoice(choice, playerId, room[0].id);
      // instance.put(`/player/${choice}`, {
      //   choice
      //   // playerId
      // });
      // console.log('Choice!!!!', choice)

    } catch (error) {
      throw error;
    }
  };


  render() {
    // console.log("Player Choise", this.props.setPlayerChoice(choice, playerId, room[0].id);)
    // console.log("Gameroom props", this.props);
    // console.log("gameroomcontainer choice", this.props.choice)
    return (
      <div>
        <Gameroom
          onChoice={this.onChoice}
          choice={this.state.choice}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameRooms: state.lobby,
    user: state.auth
  };
};

export default connect(mapStateToProps, { setPlayerChoice })(
  GameroomContainer
);
