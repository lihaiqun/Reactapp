import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
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
    console.log(this.state)
  }
  render () {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key = { index }>
                { item.kind }
                <ul>
                  {
                    item.data.map((ite, idx) => {
                      return (
                        <li key = {idx}>{ite}</li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
export default App;