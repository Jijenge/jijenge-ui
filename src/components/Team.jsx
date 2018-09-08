import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import Navigation from "./NavigationBar.jsx";
import Footer from "./Footer.jsx";
import john from "../images/ian-schneider-66374-unsplash (1).jpg";
import DrJohn from "../images/drjohn.jpg";
import Sam from "../images/sam.jpg";
import Vassiliki from "../images/vassia.jpg";
import Isabella from "../images/isabellasPicture.jpg";
import Jacob from "../images/Jacob.jpg";
import Daniel from "../images/DanielMbogoh.jpg";
import Popup from "./Popup.jsx";

class Team extends Component {
  constructor() {
    super();
    this.state = {
      popup: "close"
    };
    // this.handleCloseBioPopup = this.handleCloseBioPopup.bind(this);
  }

  handleBioPopup() {
    this.setState({
      popup: "open"
    });
  }

  handleCloseBioPopup = () => {
    this.setState({
      popup: "close"
    });
    console.log("hello");
  };

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <header>
          <div className="team" />
          <div className="teamQuote">
            <div className="primaryHeading">
              We believe everyone deserves a chance to learn
            </div>
          </div>
        </header>
        <section id="section-team">
          <div className="teamHeading">
            <div className="primaryHeading">Team</div>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <img className="member__picture--img" src={DrJohn} />
                </div>
                <div className="member__information">
                  <div className="member__information--name">
                    Dr. John Mucoki
                  </div>
                  <div className="member__information--role">
                    Co-Funder & Dean of the Students
                  </div>
                  <div className="member__information--jijenge">
                    Jijenge @ Nairobi
                  </div>
                </div>
              </div>
              <div className="member__bio">
                <a href="#johnPopup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="johnPopup" className="johnPopup">
                <div className="johnPopup__content">
                  <div className="johnPopup__right">
                    <a href="#section-team" className="johnPopup__close">
                      &times;
                    </a>
                    <figure className="johnPopup__right--shape">
                      <img
                        className="johnPopup__right--img"
                        src={DrJohn}
                        alt="Vassiliki Daskalakis"
                      />
                    </figure>
                  </div>
                  <div className="johnPopup__left">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusantium perferendis quos placeat iste dolorem corrupti
                    eius sit similique, vel non quia, quibusdam culpa recusandae
                    sint id dolor exercitationem! Blanditiis, aperiam odio
                    tempore soluta incidunt ullam sunt obcaecati officiis fuga?
                    Officia ipsum dolores quidem nam atque soluta aspernatur
                    nostrum aut a.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <LazyLoad height={300} offset={100}>
                    <img className="member__picture--img" src={Vassiliki} />
                  </LazyLoad>
                </div>
                <div className="member__information">
                  <div className="member__information--name">
                    Vassiliki Daskalakis
                  </div>
                  <div className="member__information--role">CEO</div>
                  <div className="member__information--jijenge">Jijenge</div>
                </div>
              </div>
              <div className="member__bio">
                <a href="#popup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="popup" className="popup">
                <div className="popup__content">
                  <div className="popup__right">
                    <a href="#section-team" className="popup__close">
                      &times;
                    </a>
                    <figure className="popup__right--shape">
                      <img
                        className="popup__right--img"
                        src={Vassiliki}
                        alt="Vassiliki Daskalakis"
                      />
                    </figure>
                  </div>
                  <div className="popup__left">
                    My name is Vas, I'm a former JPM investment banker who moved
                    from NY to Nairobi to raise Series A rounds for startups &
                    SMEs across East Africa with I-Dev International. Jijenge
                    Academy developed organically from our work with a local
                    orphanage to stop Mogra's graduated high school students
                    from returning back to the slums from which they were
                    rescued. I've been on the ground in Nairobi for the past
                    year, training students in employability and positioning
                    Jijenge as a pipeline partner to feed our candidates to high
                    growth Kenyan Tech Companies.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <LazyLoad height={300} offset={100}>
                    <img className="member__picture--img" src={DrJohn} />
                  </LazyLoad>
                </div>
                <div className="member__information">
                  <div className="member__information--name">Jacob Reisch</div>
                  <div className="member__information--role">President</div>
                  <div className="member__information--jijenge">Jijenge</div>
                </div>
              </div>
              <div className="member__bio">
                <a href="#jakePopup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="jakePopup" className="jakePopup">
                <div className="jakePopup__content">
                  <div className="jakePopup__right">
                    <a href="#section-team" className="jakePopup__close">
                      &times;
                    </a>
                    <figure className="jakePopup__right--shape">
                      <img
                        className="jakePopup__right--img"
                        src={john}
                        alt="Vassiliki Daskalakis"
                      />
                    </figure>
                  </div>
                  <div className="jakePopup__left">
                    Jake Reisch is a Forbes 30 Under 30 entrepreneur and CEO of
                    Eversound, a specialized audio technology for the 75+. Jake
                    started building startups during his Junior year at Cornell
                    University when he founded Party Headphones, an audio
                    provider for the special events industry. Jake was selected
                    as a Young Global Shaper by the World Economic Forum, was
                    the 2016 SBA Young Entrepreneur of the Year for New England
                    and is a member of Cornell University’s
                    Entrepreneurship@Cornell Advisory Council.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="contactUsBtn">Contact us</div> */}

          <div className="row">
            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <LazyLoad height={300} offset={100}>
                    <img className="member__picture--img" src={DrJohn} />
                  </LazyLoad>
                </div>
                <div className="member__information">
                  <div className="member__information--name">
                    Isabella Beltran
                  </div>
                  <div className="member__information--role">
                    Software Engineer
                  </div>
                  <div className="member__information--jijenge">Jijenge</div>
                </div>
              </div>
              <div className="member__bio">
                <a href="#isabellaPopup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="isabellaPopup" className="isabellaPopup">
                <div className="isabellaPopup__content">
                  <div className="isabellaPopup__right">
                    <a href="#section-team" className="isabellaPopup__close">
                      &times;
                    </a>
                    <figure className="isabellaPopup__right--shape">
                      <img
                        className="isabellaPopup__right--img"
                        src={john}
                        alt="Vassiliki Daskalakis"
                      />
                    </figure>
                  </div>
                  <div className="isabellaPopup__left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magnam nihil recusandae nulla tenetur aliquid ullam, natus
                    dolorem laborum voluptate placeat quos, voluptatibus iste?
                    Aperiam explicabo atque dolorem laudantium nihil quis, quos
                    temporibus iusto mollitia culpa repudiandae incidunt cum
                    sequi? Non sapiente atque nobis voluptatum repudiandae
                    dolore, id optio rem voluptates.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <LazyLoad height={300} offset={100}>
                    <img className="member__picture--img" src={Sam} />
                  </LazyLoad>
                </div>
                <div className="member__information">
                  <div className="member__information--name">Sam Langer</div>
                  <div className="member__information--role">Border Member</div>
                  <div className="member__information--jijenge">Jijenge</div>
                </div>
              </div>
              <div className="member__bio">
                <a href="#samPopup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="samPopup" className="samPopup">
                <div className="samPopup__content">
                  <div className="samPopup__right">
                    <a href="#section-team" className="samPopup__close">
                      &times;
                    </a>
                    <figure className="samPopup__right--shape">
                      <img
                        className="samPopup__right--img"
                        src={Sam}
                        alt="Vassiliki Daskalakis"
                      />
                    </figure>
                  </div>
                  <div className="samPopup__left">
                    Sam Langer graduated from Cornell University with a degree
                    in Psychology and Religious studies. Sam teaches meditation
                    and is involved in organizing events in the New York area
                    based around improving well being. Sam believes in a world
                    where every human has the opportunity to live their highest
                    dream.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="member">
                <div className="member__picture">
                  <LazyLoad height={300} offset={100}>
                    <img className="member__picture--img" src={Daniel} />
                  </LazyLoad>
                </div>
                <div className="member__information">
                  <div className="member__information--name">Daniel Mbogoh</div>
                  <div className="member__information--role">
                    Director of Communications
                  </div>
                  <div className="member__information--jijenge">Jijenge</div>
                </div>
              </div>
              <div className="member__bio">
                <a href="#danielPopup" className="member__bio--link">
                  Bio
                </a>
              </div>
              <div id="danielPopup" className="danielPopup">
                <div className="danielPopup__content">
                  <div className="danielPopup__right">
                    <a href="#section-team" className="danielPopup__close">
                      &times;
                    </a>
                    <figure className="danielPopup__right--shape">
                      <img
                        className="danielPopup__right--img"
                        src={Daniel}
                        alt="Vassiliki Daskalakis"
                      />
                    </figure>
                  </div>
                  <div className="danielPopup__left">
                    Daniel Mbogoh is a community development professional with
                    exceptional leadership skills and 10+ years of experience in
                    implementing innovative community development programs. His
                    commitment to a career in community development work has
                    connected him to his passion—creating positive and
                    meaningful change in people's lives. Currently, he is
                    working as the programmes manager for Village Voices—a
                    community-based organization working to empower rural women
                    in Kenya.Village Voices programmes are focused on providing
                    women with the knowledge, skills, tools and resources
                    necessary to not only actively participate in, but grow to
                    lead community development projects. Daniel is also the
                    founder and director of FilmCity International, a nonprofit
                    film organization dedicated to telling the stories of
                    charitable and not-for-profit organizations, advocacy and
                    educational groups, youth and women’s projects and other
                    non-profit organizations in Kenya through film.
                  </div>
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
