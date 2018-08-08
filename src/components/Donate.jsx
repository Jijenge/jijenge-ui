import React, { Component } from 'react'; 
import axios from 'axios'; 
import { CardElement, CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements';
import StripeCheckout from 'react-stripe-checkout';
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
// import stripe from 'stripe';

// const stripe = Stripe('pk_test_tbFndORrRYzJjE2PVtiTnRRU');

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
    });

  }

  handleFrequencyMonthly() {
    this.setState({
      frequency: 'monthly'
    })
  }

  handleAmount(e) {
    const { name, value } = e.target; 
    this.setState({
      amount: parseInt(value) * 100 
    })
  }

  submitOneTimeDonation = async(ev) => {
    const { firstName, lastName, email, amount } = this.state; 
    try {
      const body = {
        firstName,
        lastName,
        amount, 
        token: ev.id
      }
      const data = await axios.post('http://localhost:3000/api/stripe/checkout', body);
      console.log('Data from one time donation', data);
    } catch ( err ) {
      console.log('Error completing donation', err);
    }
  }

  /**
   * Create a token 
   * Send token and customer information to my server
   * Create 
   */
  submitMonthlyDonation = async(e) => {
    e.preventDefault(); 
    // const stripe = Stripe('pk_test_tbFndORrRYzJjE2PVtiTnRRU');
    // console.log('Am I getting a token?', ev);
    // const { firstName, lastName, email, amount } = this.state; 
    try {
      // const { token } = await this.props.stripe.createToken(); 
      // const body = {
      //   firstName,
      //   lastName,
      //   amount, 
      //   token: token.id
      // }
      // const data = await axios.post('http://localhost:3000/api/stripe/checkout', body);
      console.log('Data from one time donation');
    } catch ( err ) {
      console.log('Error completing donation', err);
    }
  }


  render() {
    return (
      <div>
        <script src="https://js.stripe.com/v3/"></script>
        <div className="navigation">
          <Navigation /> 
        </div>
        <main>
          <div className="wrapper"> 
            <div className="wrapper__donate">
              <div className="formContainer">
                {
                  this.state.frequency === 'one time' ? 
                  (
                    <div>
                    <form className="formContainer__form">
                      <label className="formContainer__form--oneLabel">Name</label>
                      <input className="formContainer__form--name" name="firstName"/>
                      <label className="formContainer__form--oneLabel">Last name</label>
                      <input className="formContainer__form--name" name="lastName" />
                    </form>
                    <div className="stripeBtn"><StripeCheckout 
                    name="Jijenge Academy"
                    currency="USD"
                    amount={this.state.amount}
                    token={this.submitOneTimeDonation.bind(this)}
                    stripeKey="pk_test_tbFndORrRYzJjE2PVtiTnRRU"
                    /></div>
                    </div>
                  )
                  :
                  this.state.frequency === 'monthly' ? 
                  (
                    <form className="formContainer__monthlyForm" onSubmit={this.submitMonthlyDonation.bind(this)}>
                      <div className="formContainer__monthlyForm--name">
                      <label className="formContainer__monthlyForm--name-label">First name</label>
                      <input className="formContainer__monthlyForm--name-input" name="firstName" />
                      <label className="formContainer__monthlyForm--name-label">Last name</label>
                      <input className="formContainer__monthlyForm--name-input" name="lastName" />
                      </div>

                      <label className="formContainer__monthlyForm--name-generalLabel">Email</label>
                      <input className="formContainer__monthlyForm--name-generalInput" name="email"  />

                      <label className="formContainer__monthlyForm--name-generalLabel">Address</label>
                      <input className="formContainer__monthlyForm--name-generalInput" name="address" />
                      
                      {/* Make State a dropdown */}
                      <label className="formContainer__form--twoLabel">State</label>
                      <input className="formContainer__form--state" name="state" />

                      <label className="formContainer__form--twoLabel">City</label>
                      <input className="formContainer__form--city" name="city" />

                      <label className="formContainer__form--twoLabel">Zip code</label>
                      <input className="formContainer__form--zipcode" name="zipcode" />

                      <div className="formContainer__form--cardNumber"><CardNumberElement /></div>
                      <div className="formContainer__form--cardNumber"><CardExpiryElement /></div>
                      <div className="formContainer__form--cardNumber"><CardCVCElement /></div>

                      <div className="formContainer__form--terms">
                        By clicking, you agree to <a href="#">our terms</a> and the <a href="/connect-account/legal">Stripe Connected Account Agreement</a>.
                      </div>
                      <input className="formContainer__form--btn" value="donate" type='submit' />
                    </form>
                  )
                  :
                  (
                    <form className="formContainer__form">
                    <div className="formContainer__form--amount">
                    <label className="formContainer__form--amount--label">$</label>
                    <input onChange={this.handleAmount.bind(this)} className="formContainer__form--amount--input" name="amount" />
                    <label className="formContainer__form--amount--label">USD</label>
                    </div>
                    <div className="formContainer__frequency">
                      <a className="formContainer__frequency--one" onClick={this.handleFrequencyOnce.bind(this)}>one time</a>
                      <div className="formContainer__frequency--monthly" onClick={this.handleFrequencyMonthly.bind(this)}>monthly</div>
                    </div>
                  </form>
                  )
                }
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


