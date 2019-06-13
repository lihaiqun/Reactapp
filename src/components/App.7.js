import React, { Component } from 'react';
class Com extends Component {
  constructor(props) {
    super(props);
    this.changeFun = this.changeFn.bind(this,"I am the params")
    console.log(1, this)
  }
  changeFn (id) {
    console.log(2, id, this)
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