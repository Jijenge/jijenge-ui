import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';

class OurWork extends Component {
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

export default OurWork; 