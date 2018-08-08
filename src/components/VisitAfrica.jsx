import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import jake1 from '../images/jake1.jpg';
import jake2 from '../images/jake2.jpg';
import jake3 from '../images/jake3.jpg';
import jake4 from '../images/jake4.jpg';
import jake5 from '../images/jake5.jpg';
import jake6 from '../images/jake6.jpg';
import jake7 from '../images/jake7.jpg';
import jake8 from '../images/jake8.jpg';
import jake9 from '../images/jake9.jpg';
import jake10 from '../images/jake10.jpg';

import africa1 from '../images/africa1.jpg';
import africa2 from '../images/africa2.jpg';
import africa3 from '../images/africa3.jpg';
import africa4 from '../images/africa4.jpg';
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
      meet: [jake1, jake2, jake3, jake4, jake5, jake6, jake7, jake8, jake9, jake10],
      meetCurrent: 0,
      africa: [africa1, africa2, africa3, africa4],
      expAfrica: 0,
      email: ''
    }
  }

  handleNextMeetArrow() {
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

  handlePrevMeetArrow() {
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

  handleNextAfricaArrow() {
    if (this.state.expAfrica === this.state.africa.length-1) {
      this.setState({
        expAfrica: 0
      })
    } else {
      this.setState({
        expAfrica: this.state.expAfrica + 1
      })
    }
  }

  handlePrevAfricaArrow() {
    if (this.state.expAfrica === 0) {
      this.setState({
        expAfrica: this.state.africa.length-1
      })
    } else {
      this.setState({
        expAfrica: this.state.africa - 1
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

  handlePictureFour() {
    this.setState({
      meetCurrent: 3
    })
  }

  handlePictureFive() {
    this.setState({
      meetCurrent: 4
    })
  }

  handlePictureSix() {
    this.setState({
      meetCurrent: 5
    })
  }

  handlePictureSeven() {
    this.setState({
      meetCurrent: 6
    })
  }

  handlePictureEight() {
    this.setState({
      meetCurrent: 7
    })
  }
  handlePictureNine() {
    this.setState({
      meetCurrent: 8
    })
  }

  handlePictureTen() {
    this.setState({
      meetCurrent: 9
    })
  }

  handleInputChange(e) {
    const { name, value } = e.target; 
    this.setState({
      [name]: value
    })
  }

  handleRequestItenerary = async(e) => {
    e.preventDefault();
    const { email } = this.state;
    try {
      const body = {
        email
      }
      const data = await axios.post('http://localhost:3000/api/request/itenerary', body); 
      console.log('Success', data);
    } catch(err) {
      console.log('Error saving email requesting itenerary', err); 
    }
  }


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
                <form className="visitBanner__container--email-form" onSubmit={this.handleRequestItenerary.bind(this)} >
                  <input name="email" className="visitBanner__container--email-input" placeholder="Email" onChange={this.handleInputChange.bind(this)} />
                  <input className="visitBanner__container--email-btn" type="submit" value="Tailor a trip to Kenya" />
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
          <div className="prev" onClick={this.handlePrevMeetArrow.bind(this)}>&#10094;</div>
          <div className="next" onClick={this.handleNextMeetArrow.bind(this)}>&#10095;</div>
        </div>
        <div className="text-align:center">
          <div className="dot" onClick={this.handlePictureOne.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureTwo.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureThree.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureFour.bind(this)}></div>
          <div className="dot" onClick={this.handlePictureFive.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureSix.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureSeven.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureEight.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureNine.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureTen.bind(this)}></div> 
        </div>
      </section>

      <section className="experience">
      <div className="meet__header">Experience Africa</div>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img className="image" src={this.state.africa[this.state.expAfrica]} />
          </div>
          <div className="prev" onClick={this.handlePrevAfricaArrow.bind(this)}>&#10094;</div>
          <div className="next" onClick={this.handleNextAfricaArrow.bind(this)}>&#10095;</div>
        </div>
        <div className="text-align:center">
          <div className="dot" onClick={this.handlePictureOne.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureTwo.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureThree.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureFour.bind(this)}></div>
          {/* <div className="dot" onClick={this.handlePictureFive.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureSix.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureSeven.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureEight.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureNine.bind(this)}></div> 
          <div className="dot" onClick={this.handlePictureTen.bind(this)}></div>  */}
        </div>
      </section>

      <section className="experienceAction">
        <div className="experienceAction__header">Experience the trip of a lifetime</div>
        <div className="experienceAction__banner">
          <form className="experienceAction__banner--form" onSubmit={this.handleRequestItenerary.bind(this)}>
            <input name="email" className="experienceAction__banner--input" placeholder="Email" onChange={this.handleInputChange.bind(this)}/>
            <input className="experienceAction__banner--btn" type="submit" value="Tailor a trip to Kenya" />
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