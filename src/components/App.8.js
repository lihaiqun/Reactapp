import React, { Component } from 'react';
class Com extends Component {
  constructor(props) {
    super(props);
    console.log(1, this)
  }
  changeFn () {
    console.log(2, this)
  }
  render () {
    return (
      <div>
        {
          <button onClick={ this.changeFn.bind(this) }>click me</button>
        }
      </div>
    )
  }
}
export default Com;