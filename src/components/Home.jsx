import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./NavigationBar.jsx";
import Header from "./Header.jsx";
import Meaning from "./Meaning.jsx";
import Action from "./Action.jsx";
import Subscribe from "./Subscribe.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleMenuBtn() {
    this.setState({});
  }

  handleTeam() {
    this.props.history.push("/Team");
  }

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <header>
          <ScrollToTop />
          <Header history={this.props.history} />
        </header>
        <main>
          <section className="section-meaning">
            <Meaning />
          </section>
          <section className="section-action">
            <Action history={this.props.history} />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Home;
