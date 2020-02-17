import React from "react";
import "./App.css";
import SignupFormContainer from "./components/SignUp/SignupFormContainer";
import LoginContainer from "./components/Login/LoginContainer";

import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="heading-primary">
          <h1>Rock, Paper, Scissors</h1>
          <Route exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
