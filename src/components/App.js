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
      msg: 'It is none of my business'
    })
  }
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick={ () => this.changeFn() }>click me</button>
      </div>
    )
  }
}
export default Com;