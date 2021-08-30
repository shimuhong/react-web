import React, { Component, Fragment } from "react";
import { Button } from 'antd';
import './App.css';
import { get, post } from './fetch';
import { Header } from "antd/lib/layout/layout";
class Home extends Component {
  constructor ( props ) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <Header className="header">
          <span>正在准备上线更新内容,敬请期待!</span>
          <span>
            <sapn>Ant Design 测试 </sapn>
            <Button type="primary" onClick={this.setPost}>post请求</Button>
            <Button type="primary" onClick={this.setGet}>get请求</Button>
            <Button type="primary" onClick={this.detail}>跳转详情页</Button>
          </span>
            

        </Header>
      </Fragment>
      
    );
  }
  setPost = ( ev ) => {

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
