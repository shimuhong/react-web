import React, { Component, Fragment } from "react";
import './App.css';
import src from "./images/100.png";
import beian from "./images/beian.png";
import { Footer } from "antd/lib/layout/layout";
class Home extends Component {

  constructor ( props ) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <div className="App">
          <img className="img" alt="is a images!" src={src} />
          
        </div>
        <Footer className="footer">
        <img alt="beian!" src={beian} />
        津ICP备18003125号
        </Footer>
      </Fragment>
    );
  }
  
}

export default Home;
