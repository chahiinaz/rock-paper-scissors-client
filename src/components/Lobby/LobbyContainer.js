import React, { Component } from "react";
import LobbyForm from "./LobbyForm";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class LobbyContainer extends Component {
  state = {
    roomname: ""
  };
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  reset = () => {
    this.setState({ roomname: "" });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log("State log", this.state);
    try {
      const response = await axios.post(`${this.url}/gameroom`, {
        name: this.state.roomname
      });
      this.reset();
      console.log("response test", response);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  render() {
    // console.log("gameroom props", this.props.gameRooms);
    const title = "Do you wanna play a game?";
    const { gameRooms } = this.props;
    const list = gameRooms.map(gameroom => (
      <p key={gameroom.id}>
        <Link to={`/gameroom/${gameroom.id}`}>{gameroom.name}</Link>
      </p>
    ));
    const loading = !this.props.gameRooms;

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <LobbyForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              values={this.state}
            />
            <h2>Click on the title to see gameroom</h2>
            {list}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameRooms: state.lobby
  };
};

export default connect(mapStateToProps)(LobbyContainer);
