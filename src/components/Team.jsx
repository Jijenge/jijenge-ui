import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import john from '../images/john.jpg';

class Team extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
        <main>
          <div className="team">
          </div>
          <div className="team__header">We believe everyone deserves a chance to learn</div>
        </main>
        <section className="teamDescription">
          <div className="teamDescription__header">Team</div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <img className="member__picture--img" src={john} />
                </div>
                <div className="member__information">
                  <div className="member__information--name">Dr. John Mucoki</div>
                  <div className="member__information--role">Co-Funder & Dean of the Students</div>
                  <div className="member__information--jijenge">Jijenge @ Nairobi</div>
                </div>
              </div>
              <div className="member__bio">Bio</div>
              </div>

              <div className="col-1-of-3">
                <div className="member">
                  <div className="member__picture">
                    <img  className="member__picture--img" src={john} />
                  </div>
                  <div className="member__information">
                    <div className="member__information--name">Vassia Daskalakis</div>
                    <div className="member__information--role">CEO</div>
                    <div className="member__information--jijenge">Jijenge</div>
                  </div>
                </div>
                <div className="member__bio">Bio</div>
              </div>

              <div className="col-1-of-3">
                <div className="member">
                  <div className="member__picture">
                    <img  className="member__picture--img" src={john} />
                  </div>
                  <div className="member__information">
                    <div className="member__information--name">Jake Reisch</div>
                    <div className="member__information--role">President</div>
                    <div className="member__information--jijenge">Jijenge</div>
                  </div>
                </div>
                <div className="member__bio">Bio</div>
              </div>
          </div>

          {/* <div className="contactUsBtn">Contact us</div> */}

          <div className="row">

            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <img className="member__picture--img" src={john} />
                </div>
                <div className="member__information">
                  <div className="member__information--name">Isabella Beltran</div>
                  <div className="member__information--role">Software Engineer</div>
                  <div className="member__information--jijenge">Jijenge</div>
                </div>
              </div>
              <div className="member__bio">Bio</div>
              </div>

              <div className="col-1-of-3">
                <div className="member">
                  <div className="member__picture">
                    <img  className="member__picture--img" src={john} />
                  </div>
                  <div className="member__information">
                    <div className="member__information--name">Sam Langer</div>
                    <div className="member__information--role">Border Member</div>
                    <div className="member__information--jijenge">Jijenge</div>
                  </div>
                </div>
                <div className="member__bio">Bio</div>
              </div>

              <div className="col-1-of-3">
                <div className="member">
                  <div className="member__picture">
                    <img  className="member__picture--img" src={john} />
                  </div>
                  <div className="member__information">
                    <div className="member__information--name">Jake Reisch</div>
                    <div className="member__information--role">President</div>
                    <div className="member__information--jijenge">Jijenge</div>
                  </div>
                </div>
                <div className="member__bio">Bio</div>
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

export default Team; 