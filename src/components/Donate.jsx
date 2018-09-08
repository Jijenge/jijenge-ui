import React, { Component } from "react";
import axios from "axios";
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";
import StripeCheckout from "react-stripe-checkout";
import Navigation from "./NavigationBar.jsx";
import Footer from "./Footer.jsx";
// import stripe from 'stripe';

// const stripe = Stripe('pk_test_tbFndORrRYzJjE2PVtiTnRRU');

class Donate extends Component {
  constructor() {
    super();
    this.state = {
      frequency: "",
      amount: "",
      firstName: "",
      lastName: "",
      email: "",
      cardFirstName: "",
      cardLastName: "",
      cardNumber: "",
      monthExp: "",
      yearExp: "",
      cvv: "",
      country: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      coverFee: false,
      dropMenu: "notShow"
    };
  }

  handleStatePaymentInformation(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    const {
      firstName,
      lastName,
      email,
      cardFirstName,
      cardLastName,
      cardNumber,
      monthExp,
      yearExp,
      cvv,
      address,
      address2,
      city,
      state,
      zip
    } = this.state;
    console.log(
      firstName,
      lastName,
      email,
      cardFirstName,
      cardLastName,
      cardNumber,
      monthExp,
      yearExp,
      cvv,
      address,
      address2,
      city,
      state,
      zip
    );
  }

  handleFrequencyOnce() {
    if (this.state.amount < 500) {
      return alert("Sorry the minimun amount is $5");
    } else {
      this.setState({
        frequency: "one time"
      });
    }
  }

  handleFrequencyMonthly() {
    if (this.state.amount < 500) {
      return alert("Sorry the minimun amount is $5");
    } else {
      this.setState({
        frequency: "monthly"
      });
    }
  }

  handleAmount(e) {
    const { name, value } = e.target;
    this.setState({
      amount: parseInt(value) * 100
    });
  }

  submitOneTimeDonation = async ev => {
    const { firstName, lastName, email, amount } = this.state;
    try {
      const body = {
        firstName,
        lastName,
        amount,
        token: ev.id
      };
      const data = await axios.post(
        "http://localhost:3000/api/stripe/checkout",
        body
      );
      console.log("Data from one time donation", data);
    } catch (err) {
      console.log("Error completing donation", err);
    }
  };

  /**
   * Create a token
   * Send token and customer information to my server
   * Create
   */
  submitMonthlyDonation = async e => {
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
      console.log("Data from one time donation");
    } catch (err) {
      console.log("Error completing donation", err);
    }
  };

  handleDropToggle() {
    this.setState({
      dropMenu: "show"
    });
  }

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <main>
          <div className="wrapper">
            <div className="wrapper__donate">
              <div className="donateHeaderContainer">
                <div className="primaryHeading">
                  Thank you for your donation
                </div>
                <div className="secondaryHeading">
                  100% of your money empowers students through education
                </div>
              </div>
              <div className="formContainer">
                {this.state.frequency === "one time" ? (
                  <div>
                    <form className="formContainer__form">
                      <label className="formContainer__form--oneLabel">
                        Name
                      </label>
                      <input
                        className="formContainer__form--name"
                        name="firstName"
                        required
                      />
                      <label className="formContainer__form--oneLabel">
                        Last name
                      </label>
                      <input
                        className="formContainer__form--name"
                        name="lastName"
                        required
                      />
                    </form>
                    <div className="stripeBtn">
                      <StripeCheckout
                        name="Jijenge Academy"
                        currency="USD"
                        amount={this.state.amount}
                        token={this.submitOneTimeDonation.bind(this)}
                        stripeKey="pk_test_tbFndORrRYzJjE2PVtiTnRRU"
                      />
                    </div>
                  </div>
                ) : this.state.frequency === "monthly" ? (
                  <form
                    className="formContainer__monthlyForm"
                    onSubmit={this.submitMonthlyDonation.bind(this)}
                  >
                    <div className="formContainer__monthlyForm--namesLabel">
                      <label className="formContainer__monthlyForm--namesLabel-first">
                        First name
                      </label>
                      <label className="formContainer__monthlyForm--namesLabel-last">
                        Last name
                      </label>
                    </div>
                    <div className="formContainer__monthlyForm--namesInput">
                      <input
                        className="formContainer__monthlyForm--namesInput-each"
                        name="firstName"
                        required
                      />
                      <input
                        className="formContainer__monthlyForm--namesInput-each"
                        name="lastName"
                        required
                      />
                    </div>

                    <div className="formContainer__monthlyForm--emailContainer">
                      <label className="formContainer__monthlyForm--emailContainer-emailLabel">
                        Email
                      </label>
                      <input
                        className="formContainer__monthlyForm--emailContainer-emailInput"
                        name="email"
                        required
                      />
                    </div>

                    <div className="formContainer__monthlyForm--addressContainer">
                      <label className="formContainer__monthlyForm--addressContainer-addressLabel">
                        Address
                      </label>
                      <input
                        className="formContainer__monthlyForm--addressContainer-addressInput"
                        name="address"
                        required
                      />
                    </div>

                    <div className="formContainer__monthlyForm--tripletLabel">
                      <label className="formContainer__monthlyForm--tripletLabel-eachTripleLabelOne">
                        City
                      </label>
                      <label className="formContainer__monthlyForm--tripletLabel-eachTripleLabelTwo">
                        Zip code
                      </label>
                    </div>

                    {/* Make State a dropdown
                      <label className="formContainer__form--twoLabel">State</label>
                      <input className="formContainer__form--state" name="state" required/> */}

                    <div className="formContainer__monthlyForm--tripletBtn">
                      <input
                        className="formContainer__monthlyForm--tripletBtn-eachTripletInput"
                        name="city"
                        required
                      />
                      <input
                        className="formContainer__monthlyForm--tripletBtn-eachTripletInput"
                        name="zipcode"
                        required
                      />

                      <div className="donateDropdown">
                        <div
                          onClick={this.handleDropToggle.bind(this)}
                          className="donateDropbtn"
                        >
                          State &darr;
                        </div>
                        <div
                          className={this.state.dropMenu}
                          className="donateDropdown-content"
                        >
                          <div> AK </div>
                          <div> AL </div>
                          <div> AR </div>
                          <div> AZ </div>
                          <div> CA </div>
                          <div> CO </div>
                          <div> CT </div>
                          <div> DC </div>
                          <div> DE </div>
                          <div> FL </div>
                          <div> GA </div>
                          <div> HI </div>
                          <div> IA </div>
                          <div> ID </div>
                          <div> IL </div>
                          <div> IN </div>
                          <div> KS </div>
                          <div> KY </div>
                          <div> LA </div>
                          <div> MA </div>
                          <div> MD </div>
                          <div> ME </div>
                          <div> MI </div>
                          <div> MN </div>
                          <div> MO </div>
                          <div> MS </div>
                          <div> MT </div>
                          <div> NC </div>
                          <div> ND </div>
                          <div> NE </div>
                          <div> NH </div>
                          <div> NJ </div>
                          <div> NM </div>
                          <div> NV </div>
                          <div> NY </div>
                          <div> OH </div>
                          <div> OK </div>
                          <div> OR </div>
                          <div> PA </div>
                          <div> PR </div>
                          <div> RI </div>
                          <div> SC </div>
                          <div> SD </div>
                          <div> TN </div>
                          <div> TX </div>
                          <div> UT </div>
                          <div> VA </div>
                          <div> VT </div>
                          <div> WA </div>
                          <div> WI </div>
                          <div> WV </div>
                          <div> WY </div>
                        </div>
                      </div>
                    </div>

                    <div className="cardContainerMonthly">
                      <div className="cardContainerMonthly__labelHeader">
                        Payment Information
                      </div>
                      <div className="formContainer__form--cardNumber">
                        <CardNumberElement />
                      </div>
                      <div className="formContainer__form--cardNumber">
                        <CardExpiryElement />
                      </div>
                      <div className="formContainer__form--cardNumber">
                        <CardCVCElement />
                      </div>
                    </div>

                    <div className="formContainer__form--terms">
                      By clicking, you agree to <a href="#">our terms</a> and
                      the{" "}
                      <a href="/connect-account/legal">
                        Stripe Connected Account Agreement
                      </a>
                    </div>
                    <input
                      className="formContainer__form--btn"
                      value="donate"
                      type="submit"
                    />
                  </form>
                ) : (
                  <form className="formContainer__form">
                    <div className="formContainer__form--amount">
                      <label className="formContainer__form--amount--label">
                        $
                      </label>
                      <input
                        onChange={this.handleAmount.bind(this)}
                        className="formContainer__form--amount--input"
                        name="amount"
                        required
                      />
                      <label className="formContainer__form--amount--label">
                        USD
                      </label>
                    </div>
                    <div className="formContainer__frequency">
                      <div
                        className="formContainer__frequency--one"
                        onClick={this.handleFrequencyOnce.bind(this)}
                      >
                        one time
                      </div>
                      <div
                        className="formContainer__frequency--monthly"
                        onClick={this.handleFrequencyMonthly.bind(this)}
                      >
                        monthly
                      </div>
                    </div>
                  </form>
                )}
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
