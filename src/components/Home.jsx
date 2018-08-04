import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navigation from './NavigationBar.jsx';
import Subscribe from './Subscribe.jsx';
import Footer from './Footer.jsx';
import sunset from '../videos/Sunset-Lapse.mp4';


class Home extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  handleMenuBtn() {
    this.setState({
    })
  }

  handleTeam() {
    this.props.history.push('/Team');
  }

  handleDonation() {
    this.props.history.push('/Donate');
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
        <main className="headerContainer"> 
          <div className="header">
            <video className="header__content" autoPlay muted loop>
              <source src={sunset} type="video/mp4"></source>
            </video>
          </div>
          <div className="headerBanner">
            <div className="headerBanner__header">Building dreams for those without means</div>
            <div className="headerBanner__subheader">100% of donations educate students</div>
            <div onClick={this.handleDonation.bind(this)} className="headerBanner__btn">Give Monthly</div>
          </div>
          <section className="welcome">
            <div className="welcome__header">Welcome to Jijenge</div>
            <div className="welcome__subheader">We're an Africa-based STEM education program giving everyone</div>
            <div className="welcome__subheader">the chance to achieve. We believe education empowers and </div>
            <div className="welcome__subheader">creates lasting change to community health.</div>
          </section>
        </main>
        <section className="definition">
          <div className="definition__word">
            <div className="definition__word--title">jijenge</div>
            <div className="definition__word--subtitle">[ji-jehn-geh]</div>
            <div className="definition__word--secSubtitle">verb</div>
            <div className="definition__word--secSubtitle">1. build yourself, build your future</div>
          </div>
          <div className="definition__work">
            <div className="definition__work--card1">
              <div className="definition__work--card1--picture"></div>
              <div className="definition__work--card1--text">
                <div className="definition__work--card1--text-title">Basic Education</div>
                <div className="definition__work--card1--text-subtitle">Local education partners deliver basic reading, writing and math skills</div>
                {/* <div>&nsp;</div> */}
              </div>
            </div>
            <div className="definition__work--card2">
              <div className="definition__work--card2--picture"></div>
              <div className="definition__work--card2--text">
                <div className="definition__work--card2--text-title">STEM Education</div>
                <div className="definition__work--card2--text-subtitle">Jijenge delivers a 1 year STEM program tailored to the student's needs</div>
              </div>
            </div>
            <div className="definition__work--card3">
              <div className="definition__work--card3--picture"></div>
              <div className="definition__work--card3--text">
                <div className="definition__work--card3--text-title">Career Development</div>
                <div className="definition__work--card3--text-subtitle">Jijenge increases earning potential through a reliable candidate pipeline for global companies.</div>
              </div>
            </div>
          </div>
        </section>
        <section className="actionCall">
            <div className="actionCall__header">Leaving the educational playing field</div>
            <div className="actionCall__subheader">Education has the power to democratize opportunity.</div>
            <div className="actionCall__subheader">Education improves community health and reduces needless human suffering</div>
            <div className="actionCall__container">
              <div onClick={this.handleDonation.bind(this)}  className="actionCall__container--btn">Give Education</div>
              {/* <div onClick={this.handleTeam.bind(this)} className="actionCall__container--learn">Learn More &rarr;</div> */}
            </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    ); 
  }
}

export default Home; 
