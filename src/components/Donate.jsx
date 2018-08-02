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
          <div className="donate">
            <div className="donate__left">

            </div>
            <div className="donate__right">
              <div className="donate__right--form">
                  {
                    this.state.frequency === '' ? 
                    (
                      <div className="amount">
                      <div className="amount__label">thank you for your donation!</div>
                        <div className="amountContainer">
                        <span className="amountContainer__spanInput">$</span>
                        <input className="amountContainer__input" name="amount" onChange={this.handleStatePaymentInformation.bind(this)}  />
                        <span className="amountContainer__spanInput">USD</span>
                        </div> 
                        <div className="frequency">
                          <div onClick={this.handleFrequencyOnce.bind(this)} className="frequency__onceBtn">one time</div>
                          <div onClick={this.handleFrequencyMonthly.bind(this)} className="frequency__monthlyBtn">monthly</div>
                        </div>
                      </div>
                    ) 
                    :
                    this.state.frequency === 'one time' ? 
                    (
                    <div className="checkout">
                      <div className="personalInformation" >
                        <div className="personalInformation__header">personal information</div>
                        <input className="personalInformation__info" name="firstName" onChange={this.handleStatePaymentInformation.bind(this)} placeholder="first name" />
                        <input className="personalInformation__info" name="lastName" onChange={this.handleStatePaymentInformation.bind(this)} placeholder="last name" />
                        <input className="personalInformation__info" name="email" onChange={this.handleStatePaymentInformation.bind(this)} placeholder="email" />
                      </div>
                      {/* <p>Would you like to complete the purchase?</p> */}
                      <CardElement />
                      <div className="checkout__btn" onClick={this.submitOneTimeDonation.bind(this)}>donate</div>
                    </div>
                    )
                    :
                    this.state.frequency === 'monthly' ? 
                    (
                    <div className="checkout">
                      <div className="personalInformation" >
                        <div className="personalInformation__header">Donate ${this.state.amount} monthly<a href="/donate">(change amount)</a></div>
                        <input className="personalInformation__info" name="firstName" onChange={this.handleStatePaymentInformation.bind(this)} placeholder="first name" />
                        <input className="personalInformation__info" name="lastName" onChange={this.handleStatePaymentInformation.bind(this)} placeholder="last name" />
                        <input className="personalInformation__info" name="email" onChange={this.handleStatePaymentInformation.bind(this)} placeholder="email" />
                        <input className="personalInformation__info" name="lastName" onChange={this.handleStatePaymentInformation.bind(this)} placeholder="address" />
                        <input className="personalInformation__info" name="email" onChange={this.handleStatePaymentInformation.bind(this)} placeholder="state" />
                        <input className="personalInformation__info" name="lastName" onChange={this.handleStatePaymentInformation.bind(this)} placeholder="city" />
                        <input className="personalInformation__info" name="email" onChange={this.handleStatePaymentInformation.bind(this)} placeholder="zip code" />
                      </div>
                      {/* <p>Would you like to complete the purchase?</p> */}
                      <CardElement />
                      <div className="checkout__btn" onClick={this.submitOneTimeDonation.bind(this)}>donate</div>
                    </div>
                    )
                    :
                    (
                      <h1>Rendering else statement</h1>
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


