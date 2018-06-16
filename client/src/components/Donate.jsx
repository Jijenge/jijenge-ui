import React, { Component } from 'react'; 
import axios from 'axios'; 

class Donate extends Component {
  constructor() {
    super();
    this.state = {}
  }

  handleCheckout = async(e) => {
    e.preventDefault(); 
    try {
      const data = await axios.post('http://localhost:3000/api/stripe/checkout');
      console.log('data from Donate =>', data); 
    } catch (err) {
      console.log('Error from Donate =>', err); 
    }

  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleCheckout}>
        <script
          src="https://checkout.stripe.com/checkout.js" className="stripe-button"
          data-key="pk_test_z4MoEuHo0RIJC8oV0K6xhsO1"
          data-amount="999"
          data-name="Demo Site"
          data-description="Widget"
          data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
          data-locale="auto">
        </script>
        <button type="submit">Checkout</button>
      </form>
      </div>
    ); 
  }
}

export default Donate; 