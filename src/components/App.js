import React, { Component } from 'react';
import store from '@/store';
import '@/main';
class Com extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: []
  //   }
  // }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      store.dispatch({
        type: "changeProlist",
        data: data
      })
    })
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      console.log(data)
      store.dispatch({
        type: "changeBannerlist",
        data: data
      })
    })
  }
  render () {
    return (
      <ul className="list">
        { store.getState().prolist.map(item => {
          return (<li key={ item.id }>{ item.title }</li>)
        }) }
      </ul>
    )
  }
}
export default Com;