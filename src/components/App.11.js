import React, { Component } from 'react';
class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Can I change'
    }
  }
  changeFn () {
    this.setState({
      msg: 'off course, do it'
    })
  }
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick={ this.changeFn.bind(this) }>click me</button>
      </div>
    )
  }
}
export default Com;