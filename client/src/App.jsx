import React, { Component } from 'react'; 
import { Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/navBar.jsx'; 
import mp4 from '../videos/sunset.mp4';
import webm from '../videos/sunset.mp4';


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <NavBar /> 
      <div className="bg-video">
      <video className="bg-video__content">
        <source src={require("../videos/sunset.mp4")} type="video/mp4" />
        <source src={require("../videos/sunset.webm")} type="video/webm" />
      </video>
      </div>
      </div>
    ); 
  }
}

export default App; 