import React, { Component } from 'react'; 
import axios from 'axios'; 
import { CardElement, injectStripe } from 'react-stripe-elements';
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';

// const stripe = Stripe('pk_test_tbFndORrRYzJjE2PVtiTnRRU'); 
// const elements = stripe.elements(); 

class Donate extends Component {
  constructor() {
    super();
    this.state = {
      frequency: '', 
      amount: '', 
      firstName: '',
      lastName: '',
      email: '',
      cardFirstName: '',
      cardLastName: '',
      cardNumber: '',
      monthExp: '',
      yearExp: '', 
      cvv: '',
      country: '',
      address: '',
      address2: '',
      city: '', 
      state: '',
      zip: '',
      coverFee: false 
    }
  }

  handleStatePaymentInformation(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    const {firstName, lastName, email, cardFirstName, cardLastName, cardNumber, monthExp, yearExp, cvv, address, address2, city, state, zip} = this.state; 
    console.log(firstName, lastName, email, cardFirstName, cardLastName, cardNumber, monthExp, yearExp, cvv, address, address2, city, state, zip);
  }

  handleFrequencyOnce() {
    this.setState({
      frequency: 'one time'
    })
  }

  handleFrequencyMonthly() {
    this.setState({
      frequency: 'monthly'
    })
  }

  submitOneTimeDonation = async(ev) => {
    const { firstName, lastName, email, amount } = this.state; 
    try {
      let { token } = await this.props.stripe.createToken(); 
      const body = {
        firstName,
        lastName,
        amount, 
        token: token.id
      }
      const data = await axios.post('http://localhost:3000/api/stripe/checkout', body);
      console.log('Data from one time donation', data);
    } catch ( err ) {
      console.log('Error completing donation', err);
    }
  }

  submitMonthlyDonation = async(ev) => {
    const { firstName, lastName, email, amount } = this.state; 
    try {
      let { token } = await this.props.stripe.createToken(); 
      const body = {
        firstName,
        lastName,
        amount, 
        token: token.id
      }
      const data = await axios.post('http://localhost:3000/api/stripe/checkout', body);
      console.log('Data from one time donation', data);
    } catch ( err ) {
      console.log('Error completing donation', err);
    }
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
        <main>
          <div className="wrapper"> 
            <div className="wrapper__donate">
              <div className="formContainer">
                <div className="formContainer__frequency">
                  <div className="formContainer__frequency--one" onClick={this.handleFrequencyOnce.bind(this)} className="formContainer__frequency--oneTime">one time</div>
                  <div className="formContainer__frequency--monthly" onClick={this.handleFrequencyMonthly.bind(this)} className="fformContainer__requency--monthly">monthly</div>
                </div>
                <form className="formContainer__form" onSubmit={this.submitOneTimeDonation.bind(this)}>
                  <input name="firstName" placeholder="First name" />
                  <input name="lastName" placeholder="Last name"/>
                  <input name="email" placeholder="Email" />
                  <input name="amount"/>
                  <CardElement />
                  <input type="submit" value="donate" />
                </form>
              </div>
            </div>
          </div>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
    ); 
  }
}

export default injectStripe(Donate);


