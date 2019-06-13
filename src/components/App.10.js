import React, { Component } from 'react';
class Com extends Component {
  constructor(props) {
    super(props);
    console.log("constructor",this)
  }
  changeFn (event,id) {
    console.log("function", event, id, this)
  }
  render () {
    const _this = this
    return (
      <div>
        <button onMouseEnter={ function(e){return _this.changeFn(e,111)}}>click me</button>
        <button onMouseEnter={ (e) => this.changeFn(e,222)}>click me</button>
      </div>
    )
  }
}
export default Com;