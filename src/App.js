import React from "react";
import "./App.css";
import SignupFormContainer from "./components/SignUp/SignupFormContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import LobbyContainer from "./components/Lobby/LobbyContainer";

class App extends React.Component {
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      this.props.dispatch(action);
    };
  }

  render() {
    return (
      <div className="App">
        <div className="heading-primary">
          <h1>Rock, Paper, Scissors</h1>
        </div>

        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/lobby" component={LobbyContainer} />
      </div>
    );
  }
}

export default connect()(App);
