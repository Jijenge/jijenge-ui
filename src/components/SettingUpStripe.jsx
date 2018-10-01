import React, { Component } from 'react';  
import { Elements } from 'react-stripe-elements';
import Donate from './Donate.jsx';

class SettingUpStripe extends Component {
  constructor() {
    super();
  }

  render() {
  return (
    <div>
      <Elements>
        <Donate history={this.props.history} /> 
      </Elements>
    </div> 
    );
  }
}

export default SettingUpStripe;