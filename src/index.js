// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '@/components/App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/App';
import store from '@/store';
function renderFn () {
  ReactDOM.render(
    <App />,
    document.querySelector("#root")
  )
}
renderFn();
store.subscribe(renderFn);