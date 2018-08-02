import React, { Component } from 'react';
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import jake1 from '../images/jake1.jpg';
import jake2 from '../images/jake2.jpg';
import jake3 from '../images/jake3.jpg';

export default class VisitAfrica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meet: [jake1, jake2, jake3],
      meetCurrent: 0
    }
  }

  handleNextArrow() {
    if (this.state.meetCurrent === this.state.meet.length-1) {
      this.setState({
        meetCurrent: 0
      })
    } else {
      this.setState({
        meetCurrent: this.state.meetCurrent + 1
      })
    }
  }

  handlePrevArrow() {
    if (this.state.meetCurrent === 0) {
      this.setState({
        meetCurrent: this.state.meet.length-1
      })
    } else {
      this.setState({
        meetCurrent: this.state.meetCurrent - 1
      })
    }
  }

  handlePictureOne() {
    this.setState({
      meetCurrent: 0
    })
  }

  handlePictureTwo() {
    this.setState({
      meetCurrent: 1
    })
  }

  handlePictureThree() {
    this.setState({
      meetCurrent: 2
    })
  }

  // handlePictureFour() {
  //   this.setState({
  //     meetCurrent: 3
  //   })
  // }


  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
      <main>
        <div className="visitHeader">
          <div className="visitBanner">
            <div className="visitBanner__header">An inspiration vacation</div>
            <div className="visitBanner__container">
              <div className="visitBanner__container--text">Book a life changing visit to the children at Jijenge @ Nairobi.
                <div>Witness our impact first hand and while experiencing the world's best safari tours.</div>
              </div>
              <div className="visitBanner__container--email">
                <form className="visitBanner__container--email-form">
                  <input className="visitBanner__container--email-input" placeholder="Email" />
                  <input className="visitBanner__container--email-btn" type="submit" value="Request Itinerary" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="meet">
      <div className="meet__header">Meet the children</div>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img className="image" src={this.state.meet[this.state.meetCurrent]} />
          </div>
          <div className="prev" onClick={this.handlePrevArrow.bind(this)}>&#10094;</div>
          <div className="next" onClick={this.handleNextArrow.bind(this)}>&#10095;</div>
        </div>
        <div className="text-align:center">
          <div className="dot" onClick={this.handlePictureOne.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureTwo.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureThree.bind(this)}></div> 
          {/* <div className="dot" onClick={this.handlePictureFour.bind(this)}></div>  */}
        </div>
      </section>

      <section className="experience">
      <div className="meet__header">Experience Africa</div>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img className="image" src={this.state.meet[this.state.meetCurrent]} />
          </div>
          <div className="prev" onClick={this.handlePrevArrow.bind(this)}>&#10094;</div>
          <div className="next" onClick={this.handleNextArrow.bind(this)}>&#10095;</div>
        </div>
        <div className="text-align:center">
          <div className="dot" onClick={this.handlePictureOne.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureTwo.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureThree.bind(this)}></div> 
          {/* <div className="dot" onClick={this.handlePictureFour.bind(this)}></div>  */}
        </div>
      </section>

      <section className="experienceAction">
        <div className="experienceAction__header">Experience the trip of a lifetime</div>
        <div className="experienceAction__banner">
          <form className="experienceAction__banner--form">
            <input className="experienceAction__banner--input" placeholder="Email" />
            <input className="experienceAction__banner--btn" type="submit" value="Request Itinerary" />
          </form>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
      </div>
    )
  }
}