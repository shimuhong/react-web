import React, { Component, Fragment } from "react";
import { Button } from 'antd';
import './App.css';
import { get, post } from './fetch';
class Home extends Component {

  antdclk = ( ev ) => {
    console.log(this)
    console.log(window)
    get('/api2',{ee: '22244'}).then(res => {
      console.log(res)
    }).catch(error => {
      console.error(error)
    })
    post('/api3',{ee: '22244'}).then(res => {
      console.log(res)
    }).catch(error => {
      console.error(error)
    })

  }
  
  detail = ( ev ) => {
    this.props.history.push({
      pathname: '/detail',
        state: {
            id: 3
        }
      })

  }

  constructor ( props ) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <div className="App">
          <div>
            <Button type="primary" onClick={this.antdclk}>antd点击</Button>
          </div>
          <div>
            <Button type="primary" onClick={this.detail}>详情页</Button>
          </div>
          
        </div>
      </Fragment>
      
    );
  }
  
}

export default Home;
