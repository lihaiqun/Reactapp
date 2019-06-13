import React, { Component } from 'react';
class Com extends Component {
  constructor(props) {
    super(props);
    this.changeFun = this.changeFn.bind(this)
    console.log(1, this)
  }
  changeFn () {
    console.log(2, this)
  }
  render () {
    return (
      <div>
        {
          <button onClick={ this.changeFun }>click me</button>
        }
      </div>
    )
  }
}
export default Com;