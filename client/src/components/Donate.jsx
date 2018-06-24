import React, { Component } from 'react'; 
import axios from 'axios'; 
import Payment from './Stripe/Payment.jsx';
import { Elements } from 'react-stripe-elements';
import StripeCheckout from 'react-stripe-checkout';

const currency = 'US'; 

class Donate extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      name: '',
      lastName: '',

    }

  }

  handleCheckout(token) {
  
      console.log('EMAIL =>', token.card.name)
      console.log('TOKENID=>', token.card.id)
      const body = {
        description: '', 
        source: token.card.id, 
        currency: '',
        amount: ''
      }
      const data = axios.post('http://localhost:3000/api/stripe/checkout', body);
      console.log('data from Donate =>', data); 

  }

  // handleFormInputChage = (e) => {
  //   e.preventDefault()
  //   const { name, value } = e.target; 
  //   const { amount } = this.state;
  //   this.setState({
  //     [name]: value
  //   })
  //   console.log(amount);
  // }

  render() {
    return (
      // <Elements>
      //   <Payment />
      // </Elements>
      <div>
        <div>
          {/* I can change state with donors information on submit 
          name, last name and amount 
          */}
          <form className="donors-information" >
            <input name='name' placeholder="Name"onChange={this.handleFormInputChage.bind(this)} />
            <input lastName='lastName' placeholder="Last name"onChange={this.handleFormInputChage.bind(this)} />
            <input amount='amount' placeholder="Amount" onChange={this.handleFormInputChage.bind(this)} />
            <input type='submit' value='Donate' />
          </form>
        </div>
        <div>
        <StripeCheckout
        name="Jijenge" // the pop-in header title
        description="Donate" // the pop-in header subtitle
        amount={this.state.amount}
        // image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
        token={this.handleCheckout}
        stripeKey="pk_test_tbFndORrRYzJjE2PVtiTnRRU"
        locale="auto"
        panelLabel="Donate Now"
      />
      </div>
      </div>
    ); 
  }
}

export default Donate; 