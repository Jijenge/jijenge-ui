import React, { Component } from "react";
import axios from "axios";
import Navigation from "./NavigationBar.jsx";
import Footer from "./Footer.jsx";
import jake1 from "../images/jake1.jpg";
import jake2 from "../images/jake2.jpg";
import jake3 from "../images/jake3.jpg";
import jake4 from "../images/jake4.jpg";
import jake5 from "../images/jake5.jpg";
import jake6 from "../images/jake6.jpg";
import jake7 from "../images/jake7.jpg";
import jake8 from "../images/jake8.jpg";
import jake9 from "../images/jake9.jpg";
import jake10 from "../images/jake10.jpg";

import africa1 from "../images/africa1.jpg";
import africa2 from "../images/africa2.jpg";
import africa3 from "../images/africa3.jpg";
import africa4 from "../images/africa4.jpg";
// import africa5 from '../images/africa5.jpg';
// import africa6 from '../images/africa6.jpg';
// import africa7 from '../images/africa7.jpg';
// import africa8 from '../images/africa8.jpg';
// import africa9 from '../images/africa9.jpg';
// import africa10 from '../images/africa10.jpg';

export default class VisitAfrica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meet: [
        jake1,
        jake2,
        jake3,
        jake4,
        jake5,
        jake6,
        jake7,
        jake8,
        jake9,
        jake10
      ],
      meetCurrent: 0,
      africa: [africa1, africa2, africa3, africa4],
      expAfrica: 0
    };
  }

  handleNextMeetArrow() {
    if (this.state.meetCurrent === this.state.meet.length - 1) {
      this.setState({
        meetCurrent: 0
      });
    } else {
      this.setState({
        meetCurrent: this.state.meetCurrent + 1
      });
    }
  }

  handlePrevMeetArrow() {
    if (this.state.meetCurrent === 0) {
      this.setState({
        meetCurrent: this.state.meet.length - 1
      });
    } else {
      this.setState({
        meetCurrent: this.state.meetCurrent - 1
      });
    }
  }

  handleNextAfricaArrow() {
    if (this.state.expAfrica === this.state.africa.length - 1) {
      this.setState({
        expAfrica: 0
      });
    } else {
      this.setState({
        expAfrica: this.state.expAfrica + 1
      });
    }
  }

  handlePrevAfricaArrow() {
    if (this.state.expAfrica === 0) {
      this.setState({
        expAfrica: this.state.africa.length - 1
      });
    } else {
      this.setState({
        expAfrica: this.state.expAfrica - 1
      });
    }
  }

  // handleRequestItenerary = async e => {
  //   e.preventDefault();
  //   const { email } = this.state;
  //   try {
  //     const body = {
  //       email
  //     };
  //     const data = await axios.post(
  //       "http://localhost:3000/api/request/itenerary",
  //       body
  //     );
  //     console.log("Success", data);
  //   } catch (err) {
  //     console.log("Error saving email requesting itenerary", err);
  //   }
  // };

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <main>
          <div className="visitHeader">
            <div className="visitBanner">
              <div className="primaryHeading">An inspiration vacation</div>
              <div className="secondaryHeading">
                Book a life changing visit to the children at Jijenge @ Nairobi.
              </div>
              <div className="secondaryHeading">
                Meet the children yourself while experiencing the world's best
                Safari tours and beach vacations!
              </div>
              <div className="visitBanner__container">
                <div>
                  <a
                    href="http://eepurl.com/dH3L6b"
                    className="visitBanner__container--btn"
                  >
                    Tailor a trip to Kenya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className="section-slides">
          <div className="section-slides__heading">
            <div className="primaryHeading">Meet the children</div>
          </div>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img
                className="image"
                src={this.state.meet[this.state.meetCurrent]}
              />
            </div>
            <div className="prev" onClick={this.handlePrevMeetArrow.bind(this)}>
              &#10094;
            </div>
            <div className="next" onClick={this.handleNextMeetArrow.bind(this)}>
              &#10095;
            </div>
          </div>
        </section>

        <section className="section-slides">
          <div className="section-slides__heading">
            <div className="primaryHeading">Experience Africa</div>
          </div>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img
                className="image"
                src={this.state.africa[this.state.expAfrica]}
              />
            </div>
            <div
              className="prev"
              onClick={this.handlePrevAfricaArrow.bind(this)}
            >
              &#10094;
            </div>
            <div
              className="next"
              onClick={this.handleNextAfricaArrow.bind(this)}
            >
              &#10095;
            </div>
          </div>
        </section>
        <section className="section-experience">
          <div className="section-experience__heading">
            <div className="primaryHeading">
              Experience the trip of a lifetime
            </div>
          </div>
          <div className="section-experience__container">
            <div className="section-experience__container--form">
              <a
                className="section-experience__container--btn"
                href="http://eepurl.com/dH3L6b"
              >
                Tailor a trip to Kenya
              </a>
            </div>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
