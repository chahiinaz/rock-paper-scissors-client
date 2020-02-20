import React from "react";
import "./css/style.css";
import SignupFormContainer from "./components/SignUp/SignupFormContainer";
import LoginContainer from "./components/Login/LoginContainer";
import GameroomContainer from "./components/Gameroom/GameroomContainer";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LobbyContainer from "./components/Lobby/LobbyContainer";
import Toolbar from "./components/Navigation/Toolbar";


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
        <header>
          <Toolbar />
        </header>

        <Switch>
          <Route exact path="/gameroom/:id" component={GameroomContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/lobby" component={LobbyContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
