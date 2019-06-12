// import React from 'react';

// class App extends React.Component {
//   render () {
//     return (
//       <div>hello react</div>
//     )
//   }
// }

// const App = function () {
//   return (
//     <div>hello react function</div>
//   )
// }

// const App = () => {
//   return (
//     <div>hello react function1</div>
//   )
// }

// const App = () => (<div>hello react function2</div>)


import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello guys, long time no see'
    }
  }
  render () {
   return (
     <div>
       <h1>look at there</h1>
       { this.state.msg }
     </div>
   ) 
  }
}
export default App;