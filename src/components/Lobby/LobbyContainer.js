import React, { Component } from 'react'
import LobbyForm from './LobbyForm'

import { connect } from 'react-redux'

class LobbyContainer extends Component {
  state = {
    roomname: '',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('State log', this.state)
    this.props.dispatch(

    )
    this.setState({ roomname: '' })
  }
  render() {
    return (
      <div>
        <LobbyForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    roomCreated: state
  }
}

export default connect(mapStateToProps)(LobbyContainer)