import React, { Component, Fragment } from "react";
import './App.css';
import src from "./images/100.png";
import beian from "./images/beian.png";
// import { Footer } from "antd/lib/layout/layout";
// import { DefaultFooter } from '@ant-design/pro-layout';
import Test from './Test';
class Home extends Component {

  constructor ( props ) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <div className="App">
          <Test history={this.props.history} />
          <div className="content">正在准备上线更新内容,敬请期待!</div>
          <img className="img" alt="is a images!" src={src} />
          
        </div>
        <div className="footer">
          <img alt="beian!" src={beian} />
          <span className="beianText" onClick={this.goGov}>津ICP备18003125号</span>
        </div>
      </Fragment>
    );
  }

  goGov = ( ev ) => { // 
    window.location.href = 'https://beian.miit.gov.cn/';
  }
  
}

export default Home;
