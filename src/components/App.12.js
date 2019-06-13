import React, { Component } from 'react';
class Com extends Component {
  constructor(props) {
    super(props);
    this.changeFn = this.changeFn.bind(this)
    this.state = {
      msg: 'Can I change'
    }
  }
  changeFn () {
    this.setState({
      msg: 'no you can not do like that'
    })
  }
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick={ this.changeFn }>click me</button>
      </div>
    )
  }
}
export default Com;