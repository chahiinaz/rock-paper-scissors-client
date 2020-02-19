import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Toolbar extends Component {
  render() {
    console.log("this.props.toolbar", this.props);

    return (
      <div>
        <nav>
          <Link to="/signup">Sign up</Link>
        </nav>
        <nav>
          <Link to="/login">Log in</Link>
        </nav>
        <nav>
          <Link to="/lobby">lobby!</Link>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("reduxState in toolbar", state);
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Toolbar);
