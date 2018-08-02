import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';

class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
      </div>
    ); 
  }
}

export default About; 