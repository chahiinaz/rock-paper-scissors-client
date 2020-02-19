import React, { Component } from "react";
import LobbyForm from "./LobbyForm";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createRoom, joinRoom } from "../../actions/gameroom";

class LobbyContainer extends Component {
  state = {
    roomname: ""
  };

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
      this.props.dispatch(createRoom(this.state.roomname));
      // console.log("this.props.user", this.props.user);

      this.reset();
      // console.log("response test handelSubmit", response);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  onClick = async gameroomId => {
    console.log("this button does something! and this is the id: ", this.props);
    // console.log("gameroom", gameroom);
    try {
      this.props.dispatch(joinRoom(gameroomId));
    } catch (error) {
      console.warn("error test:", error);
    }
  };
  render() {
    const { gameRooms } = this.props;
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
            <h2>Do you wanna play a game? Join a room!</h2>
            {gameRooms.map((gameroom, index) => {
              return (
                <div key={index}>
                  <h2>Roomname: {gameroom.name}</h2>
                  <Link to={`/gameroom/${gameroom.id}`}>
                    <button onClick={() => this.onClick(gameroom.id)}>
                      Join Room
                    </button>{" "}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
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

export default connect(mapStateToProps)(LobbyContainer);
