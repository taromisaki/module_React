import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'home'
    }
  }

  render () {
    return (
      <div>
        <p className="home">{this.state.msg}</p>
        <p>{this.props.home.list}</p>
      </div>
    )
  }
}

export default connect(state => ({
  home: state.home
}))(Home)