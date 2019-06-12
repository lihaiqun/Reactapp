import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: ['men','women','baby','girl']
    }
    console.log(this.state)
  }
  render () {
    let arr = []
    this.state.list.map((item, index) => {
      arr.push(<li key = { index }>{ item }</li>)
    })
    console.log(arr)
    return (
      <ul>
        { arr }
      </ul>
    )
  }
}
export default App;