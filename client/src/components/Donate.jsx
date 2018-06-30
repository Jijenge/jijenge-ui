import React, { Component } from 'react'; 
import axios from 'axios'; 
// import Payment from './Stripe/Payment.jsx';
// import { Elements } from 'react-stripe-elements';
// import StripeCheckout from 'react-stripe-checkout';
import Navigation from './NavigationBar.jsx';

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


  handleAmount(amount){ 
    this.setState({
      amount
    });
    console.log('I am clicking', this.state.amount);
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
                <form className="formContainer">

                  <div className="frequency">
                    <div className="frequency__onceBtn">one time</div>
                    <div className="frequency__monthlyBtn">monthly</div>
                  </div>

                  <div className="amount">
                    <div className="donate__subheader">select amount</div>
                    <div className="amount__btn" onClick={() => this.handleAmount(250)}>$250</div>
                    <div className="amount__btn" onClick={() => this.handleAmount(100)}>$100</div>
                    <div className="amount__btn" onClick={() => this.handleAmount(50)}>$50</div>
                    <div className="amount__btn" onClick={() => this.handleAmount(25)}>$25</div>
                    {/* <div className="amount__btn" onClick={() => this.handleAmount(250)}>Other</div> */}
                    <div className="donate__subheader">other amount</div>
                    <input className="amount__input" placeholder="$ 0.00" />
                  </div>
                  <div className="personalInformation">
                  <div className="donate__subheader">personal information</div>
                    <input name="" placeholder="First name" className="personalInformation__input" />
                    <input name="" placeholder="Last name" className="personalInformation__input" />
                    <div className="personalInformation__container">
                    <input name="" placeholder="Email" className="personalInformation__container--input" />  
                  </div>
                  </div>

                  <div className="paymentDetails">
                  <div className="donate__subheader">payment details</div>

                  <div className="paymentDetails__name">
                    <input name="" placeholder="First name" className="paymentDetails__name--input"/>
                    <input name="" placeholder="Last name" className="paymentDetails__name--input"/>
                  </div>

                  <input name="" className="paymentDetails__cardNumber" placeholder="XXXX XXXX XXXX XXXX" />

                  <div className="paymentDetails__expiration">
                    <input name="" className="paymentDetails__expiration--input" placeholder="month" />
                    /
                    <input name="" className="paymentDetails__expiration--input" placeholder="year" />
                  </div>

                  <input name="" className="paymentDetails__securityCode" placeholder="CVV"/>

                  <select className="paymentDetails__country">
                        <option value="">Select option</option>
                        <option value="United States">United States</option>
                      </select>

                <div className="paymentDetails__address">
                <input name="" className="paymentDetails__address--info" placeholder="address"/>
                <input name="" className="paymentDetails__address--info" placeholder="address2"/>
                <input name="" className="paymentDetails__address--info" placeholder="city"/>
                <input name="" className="paymentDetails__address--city" placeholder="state"/>
                <input name="" className="paymentDetails__address--city" placeholder="ZIP"/>
                </div>
                <div className="paymentDetails__check">
                <input className="paymentDetails__check--box" type="checkbox"/>
                </div>
                <input className="paymentDetails__check--btn" type="submit" value="Donate"/>
                </div>

                </form>
              </div>
            </div>
          </div>
      </main>
    </div>
    ); 
  }
}

export default Donate; 





// <div className="donate">
// <div className="donate__left"><h1>Thank you for your donation</h1>
// </div>

// <div className="donate__right">
// <div className="frequency">
//   <div className="frequency__onceBtn">one time</div>
//   <div className="frequency__monthlyBtn">monthly</div>
// </div>
// <div className="amount">
//   <div className="donate__subheader">select amount</div>
//     <div className="amount__btn">$250</div>
//     <div className="amount__btn">$100</div>
//     <div className="amount__btn">$50</div>
//     <div className="amount__btn">$25</div>
//     <div className="amount__btn">Other</div>
//     <div className="donate__subheader">other amount</div>
//     <form>
//       <input className="amount__input" placeholder="$ 0.00" />
//     </form>
// </div>

// <div className="personalInformation">
//   <div className="donate__subheader">personal information</div>
//   <form className="personalInformation__form">
//     <input placeholder="First name" className="personalInformation__input" />
//     <input placeholder="Last name" className="personalInformation__input" />
//     <div className="personalInformation__container">
//     <input placeholder="Email" className="personalInformation__container--input" />  
//     </div>
//   </form> 
// </div>



// <div className="paymentDetails">
// <div className="donate__subheader">payment details</div>

// <select className="paymentDetails__country">
//       <option value="volvo">Select option</option>
//       <option value="saab">Saab</option>
//       <option value="fiat">Fiat</option>
//       <option value="audi">Audi</option>
//     </select>
// </div>
// </div>
// </div>



















      //     {/* I can change state with donors information on submit 
      //     name, last name and amount 
      //     */}
      //     <form className="donors-information" >
      //       <input name='name' placeholder="Name"onChange={this.handleFormInputChage.bind(this)} />
      //       <input lastName='lastName' placeholder="Last name"onChange={this.handleFormInputChage.bind(this)} />
      //       <input amount='amount' placeholder="Amount" onChange={this.handleFormInputChage.bind(this)} />
      //       <input type='submit' value='Donate' />
      //     </form>
      //   </div>
      //   <div>
      //   <StripeCheckout
      //   name="Jijenge" // the pop-in header title
      //   description="Donate" // the pop-in header subtitle
      //   amount={this.state.amount}
      //   // image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
      //   token={this.handleCheckout}
      //   stripeKey="pk_test_tbFndORrRYzJjE2PVtiTnRRU"
      //   locale="auto"
      //   panelLabel="Donate Now"
      // />