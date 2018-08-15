import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import john from '../images/ian-schneider-66374-unsplash (1).jpg';
import DrJohn from '../images/drjohn.jpg';
import Sam from '../images/sam.jpg';
import Vassiliki from '../images/vassia.jpg';
import Isabella from '../images/isabellasPicture.jpg';
import Popup from './Popup.jsx';

class Team extends Component {
  constructor() {
    super();
    this.state = {
      popup: 'close'
    }
    // this.handleCloseBioPopup = this.handleCloseBioPopup.bind(this);
  }

  handleBioPopup() {
    this.setState({
      popup: 'open'
    });
  }

  handleCloseBioPopup = () => {
    this.setState({
      popup: 'close'
    });
    console.log('hello')
      
  }

  render() {
    return (
      <div>
        <div>
          <Navigation /> 
        </div>
        <main>
          <div className="team">
          </div>
          <div className="team__header">We believe everyone deserves a chance to learn</div>
        </main>
        <section id="section-team" className="teamDescription">
          <div className="teamDescription__header">Team</div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <img className="member__picture--img" src={DrJohn} />
                </div>
                <div className="member__information">
                  <div className="member__information--name">Dr. John Mucoki</div>
                  <div className="member__information--role">Co-Funder & Dean of the Students</div>
                  <div className="member__information--jijenge">Jijenge @ Nairobi</div>
                </div>
              </div>
              <div className="member__bio">
                  <div className="member__bio--link">Bio</div>
                  <div className="member__bio--content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta et quo esse quia, iure corrupti unde amet accusamus est voluptates fugit illo architecto nihil vero vel pariatur laudantium mollitia sit alias, eius beatae. Numquam ducimus ab nihil praesentium enim veniam doloremque consequuntur rem, soluta quidem officia vero deserunt voluptatibus!
                  </div>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="member">
                  <div className="member__picture">
                    <img  className="member__picture--img" src={Vassiliki} />
                  </div>
                  <div className="member__information">
                    <div className="member__information--name">Vassiliki Daskalakis</div>
                    <div className="member__information--role">CEO</div>
                    <div className="member__information--jijenge">Jijenge</div>
                  </div>
                </div>
                <div className="member__bio">
                  <div className="member__bio--link">Bio</div>
                  <div className="member__bio--content">
                  My name is Vas, I'm a former JPM investment banker who moved from NY to Nairobi to raise Series A rounds for startups & SMEs across East Africa with I-Dev International. Jijenge Academy developed organically from our work with a local orphanage to stop Mogra's graduated high school students from returning back to the slums from which they were rescued. I've been on the ground in Nairobi for the past year, training students in employability and positioning Jijenge as a pipeline partner to feed our candidates to high growth Kenyan Tech Companies.
                  </div>
                </div>
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
                <div className="member__bio">
                  <div className="member__bio--link">Bio</div>
                  <div className="member__bio--content">
                  Jake Reisch is a Forbes 30 Under 30 entrepreneur and CEO of Eversound, a specialized audio technology for the 75+. Jake started building startups during his Junior year at Cornell University when he founded Party Headphones, an audio provider for the special events industry. Jake was selected as a Young Global Shaper by the World Economic Forum, was the 2016 SBA Young Entrepreneur of the Year for New England and is a member of Cornell University’s Entrepreneurship@Cornell Advisory Council.
                  </div>
                </div>
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
              <div className="member__bio">
                  <div className="member__bio--link">Bio</div>
                  <div className="member__bio--content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid cupiditate natus minima! Saepe, repudiandae, assumenda neque earum cupiditate aperiam laborum qui quia velit sunt enim ipsum cum unde officia!
                  </div>
                </div>
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
                <div className="member__bio">
                  <div className="member__bio--link">Bio</div>
                  <div className="member__bio--content">
                  Sam Langer graduated from Cornell University with a degree in Psychology and Religious studies. Sam teachers meditation and is involved in organizing events in the New York area based around improving well being. Sam believes in a world where every human has the opportunity to live their highest dream.
                  </div>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="member">
                  <div className="member__picture">
                    <img  className="member__picture--img" src={john} />
                  </div>
                  <div className="member__information">
                    <div className="member__information--name">Daniel King</div>
                    <div className="member__information--role">&nbsp;</div>
                    <div className="member__information--jijenge">Jijenge</div>
                  </div>
                </div>
                <div className="member__bio">
                  <div className="member__bio--link">Bio</div>
                  <div className="member__bio--content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eius deserunt aliquid, non impedit aperiam ipsam dolorem tenetur recusandae laborum sapiente asperiores autem officiis incidunt doloribus natus ullam unde aut harum libero tempore numquam totam sint perferendis? Accusantium autem, necessitatibus id expedita minus veritatis voluptatum doloremque, reprehenderit, nostrum eius eveniet.
                  </div>
                </div>
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