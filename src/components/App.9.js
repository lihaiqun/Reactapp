import React, { Component } from 'react';
class Com extends Component {
  constructor(props) {
    super(props);
    console.log("constructor",this)
  }
  changeFn (par) {
    console.log("function", par, this)
  }
  render () {
    return (
      <div>
        {
          <button onMouseEnter={ this.changeFn.bind(this,"u are not the params from constructor")}>come here</button>
        }
      </div>
    )
  }
}
export default Com;