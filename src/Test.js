import React, { Component, Fragment } from "react";
import { Button } from 'antd';
import './App.css';
import { get, post } from './fetch';
// import { Header } from "antd/lib/layout/layout";
// import { DefaultHeader } from '@ant-design/pro-layout';
class Home extends Component {
  constructor ( props ) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <div className="header">
          <span>
            <span>Ant Design </span>
            <Button type="primary" onClick={this.setPost}>post</Button>
            <Button type="primary" onClick={this.setGet}>get</Button>
            <Button type="primary" onClick={this.detail}>联系我</Button>
          </span>
            

        </div>
      </Fragment>
      
    );
  }
  setPost = ( ev ) => { // dataList
    post('/dataList',{id: 1})
    post('/api3',{ee: '22244'}).then(res => {
      console.log(res)
    }).catch(error => {
      console.error(error)
    })

  }
  
  setGet = ( ev ) => {
    get('/api2',{ee: '22244'}).then(res => {
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


  
}

export default Home;
