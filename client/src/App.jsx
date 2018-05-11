import React, { Component } from 'react'; 
import { Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/navBar.jsx'; 

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <NavBar /> 
      </div>
    ); 
  }
}

export default App; 