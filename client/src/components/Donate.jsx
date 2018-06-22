import React, { Component } from 'react'; 
import axios from 'axios'; 
import Payment from './Stripe/Payment.jsx';
import {Elements} from 'react-stripe-elements';
import StripeCheckout from 'react-stripe-checkout';

class Donate extends Component {
  constructor() {
    super();
    this.state = {}
  }

  handleCheckout = async(token) => {
    try {
      console.log('HERE IS TOKEN FROM STRIPE =>', token)
      const body = {
        description: '', 
        source: token.id, 
        currency: '',
        amount: ''
      }
      const data = await axios.post('http://localhost:3000/api/stripe/checkout', body);
      console.log('data from Donate =>', data); 
    } catch (err) {
      console.log('Error from Donate =>', err); 
    } 
  }

    // onToken = (token) => {
    //   fetch('/save-stripe-token', {
    //     method: 'POST',
    //     body: JSON.stringify(token),
    //   }).then(response => {
    //     response.json().then(data => {
    //       alert(`We are in business, ${data.email}`);
    //     });
    //   });
    // }

  render() {
    return (
      // <Elements>
      //   <Payment />
      // </Elements>
      <div>
        <StripeCheckout
        name="Jijenge" // the pop-in header title
        description="Donate" // the pop-in header subtitle
        // image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
        token={this.handleCheckout}
        stripeKey="pk_test_tbFndORrRYzJjE2PVtiTnRRU"
        panelLabel="Donate"
      />
      </div>
    ); 
  }
}

export default Donate; 