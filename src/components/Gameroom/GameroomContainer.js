import React, { Component } from "react";
import Gameroom from "./Gameroom";
import instance from "../../axios";
import axios from "axios";
import { connect } from "react-redux";
import { setPlayerChoice } from "../../actions/setPlayerChoice";

class GameroomContainter extends Component {
  state = {
    roomname: ""
  };

  onChoice = choice => {
    console.log("gamerooms props", this.props.gameRooms.players);
    console.log("gamerooms", this.props.gameRooms);

    try {
      const room = this.props.gameRooms.filter(
        room => room.id.toString() == this.props.match.params.id.toString()
      );
      console.log("room", room);
      console.log(this.props.gameRooms, this.props.match.params.id);
      const playerId = room[0].players.map(player => player.id);
      console.log("player id", playerId);
      // const room = this.props.gameRooms.filter(room => room.id === this.props.match.params)
      console.log("room ", room);
      console.log("choice", choice, `${instance}/player/${choice}`);
      this.props.setPlayerChoice(choice, playerId, room[0].id);
      // instance.put(`/player/${choice}`, {
      //   choice
      //   // playerId
      // });
    } catch (error) {
      throw error;
    }
  };

  render() {
    console.log("Gameroom props", this.props);
    return (
      <div>
        <Gameroom onChoice={this.onChoice} />
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
  GameroomContainter
);
