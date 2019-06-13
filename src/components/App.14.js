import React, { Component } from 'react';
class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Can I change'
    }
  }
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick={ () => {this.setState({
          msg: 'Do what you want to do'
        })} }>click me</button>
      </div>
    )
  }
}
export default Com;