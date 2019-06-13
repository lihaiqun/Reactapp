import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[
        {
          kind: 'animal',
          data: ['cat','dog','pig']
        }, 
        {
          kind: 'people',
          data: ['men','women','baby','girl']
        }
      ]
    }
  }
  render () {
    let arr = []
    this.state.list.map((item, index) => {
      let arrSmall = [];
      item.data.map((itm, idx) => {
        arrSmall.push(<li key = { idx }>{ itm }</li>)
      })
      arr.push(<li key = { index }>{ item.kind }<ul>{ arrSmall }</ul></li>)
    })
    return (
      <ul>
        { arr }
      </ul>
    )
  }
}
export default App;