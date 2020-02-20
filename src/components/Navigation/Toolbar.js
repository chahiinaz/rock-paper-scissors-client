import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Toolbar extends Component {
  render() {
    console.log("this.props.toolbar", this.props);

    return (
      <div className="header">
        <div className="heading-primary">
          <h1>Rock, Paper, Scissors</h1>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/"><button>HOME</button></Link>
          </nav>
          <nav>
            <Link to="/signup"><button>Sign up</button></Link>
          </nav>
          <nav>
            <Link to="/login"><button>Log in</button></Link>
          </nav>
          <nav>
            <Link to="/lobby"><button>lobby!</button></Link>
          </nav>
        </div>

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
