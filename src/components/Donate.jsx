import React, { Component } from "react";
// import axios from "axios";
import { CardElement, injectStripe } from "react-stripe-elements";
import Navigation from "./NavigationBar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
// import donate2 from '../images/donate2.jpg';
// import donate3 from '../images/donate3.jpg';

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      email: "",
      amount: "",
      frequency: "",
      amount: ""
    };
    this.submit = this.submit.bind(this);
    this.submitMonthly = this.submitMonthly.bind(this);
  }

  handleState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state.name, this.state.email, this.state.lastname);
  };

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

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({
      name: this.state.name
    });
    let body = {
      token: token.id,
      amount: this.state.amount
    };
    let response = await fetch("/api/stripe/oneTimeDonation", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body)
    });
    console.log("response", response);
    if (response.ok) {
      console.log("SUCCESS - ONE TIME");
    }
  }

  async submitMonthly(ev) {
    ev.preventDefault();
    let { token } = await this.props.stripe.createToken({
      name: this.state.name
    });
    let body = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      token: token.id,
      amount: this.state.amount
    };
    let response = await fetch("/api/stripe/monthlyDonation", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body)
    });
    console.log("response", response);
    if (response.ok) {
      console.log("SUCCESS - MONTHLY");
    }
  }

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <main>
          <div className="donateBackground">
            <div className="donateBackground__heading">
              <div className="donateHeaderContainer">
                <div className="primaryHeading">
                  Thank you for your donation
                </div>
                <div className="secondaryHeading">
                  100% of your money empowers students through education
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <div className="everyForm">
                  {this.state.frequency === "one time" ? (
                    <div className="donationForm">
                      <div className="donationForm__formLabel">
                        Personal Information
                      </div>
                      <div className="donationForm__information">
                        <form>
                          <input
                            className="donationForm__information--input"
                            placeholder="Full name"
                          />
                          <input
                            className="donationForm__information--input"
                            placeholder="Email"
                          />
                        </form>
                      </div>
                      <div className="donationForm__formLabel">
                        Payment Information
                      </div>
                      <div className="donationForm__donation">
                        <CardElement />
                      </div>
                      <div
                        className="donationForm__button"
                        onClick={this.submit}
                      >
                        Donate
                      </div>
                    </div>
                  ) : this.state.frequency === "monthly" ? (
                    <div className="donationForm">
                      <div className="donationForm__formLabel">
                        Personal Information
                      </div>
                      <div className="donationForm__information">
                        <form>
                          <input
                            className="donationForm__information--input"
                            placeholder="Name"
                            name="name"
                            required
                            onChange={this.handleState.bind(this)}
                          />
                          <input
                            className="donationForm__information--input"
                            placeholder="Last name"
                            name="lastname"
                            required
                            onChange={this.handleState.bind(this)}
                          />
                          <input
                            className="donationForm__information--input"
                            placeholder="Email"
                            name="email"
                            required
                            onChange={this.handleState.bind(this)}
                          />
                        </form>
                      </div>
                      <div className="donationForm__formLabel">
                        Payment Information
                      </div>
                      <div className="donationForm__donation">
                        <CardElement />
                      </div>
                      <div
                        className="donationForm__button"
                        onClick={this.submitMonthly}
                      >
                        Donate
                      </div>
                    </div>
                  ) : (
                    <div className="amount">
                      <form>
                        <div className="amount__container">
                          <label className="amount__container--label">$</label>
                          <input
                            className="amount__container--input"
                            onChange={this.handleAmount.bind(this)}
                          />
                          <label className="amount__container--label">
                            USD
                          </label>
                        </div>
                      </form>
                      <div className="frequency">
                        <div
                          className="frequency__onetime"
                          onClick={this.handleFrequencyOnce.bind(this)}
                        >
                          One time
                        </div>
                        <div
                          className="frequency__monthly"
                          onClick={this.handleFrequencyMonthly.bind(this)}
                        >
                          Monthly
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  {/* <img className="composition__photo composition__photo--p1" src={donate1}/> */}
                  {/* <img
                    className="composition__photo composition__photo--p2"
                    src={donate2}
                  />
                  <img
                    className="composition__photo composition__photo--p3"
                    src={donate3}
                  /> */}
                </div>
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
