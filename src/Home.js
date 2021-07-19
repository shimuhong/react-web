import React, { Component, Fragment } from "react";
import './App.css';
import src from "./images/100.png";
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
        
      </Fragment>
    );
  }
  
}

export default Home;
