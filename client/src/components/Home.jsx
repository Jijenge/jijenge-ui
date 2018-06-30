import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
var FontAwesome = require('react-fontawesome');
import Navigation from './NavigationBar.jsx';
import Subscribe from './Subscribe.jsx';
import JijengeWord from '../images/try3.png';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      menuBtn: '-'
    }
  }

  handleMenuBtn() {
    this.setState({
      menuBtn: "X"
    })
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
        <main>
          <div className="header">
          </div>
          <div className="information">
            <div className="info">
              The Kenyan National Exams is a standardized test that decides
              which university and field of study students can access. 
            </div>
            <div className="moreInfo">

            </div>
            <div className="subscription">
              <Subscribe />
            </div>
          </div>
        </main>
        <footer>
          <div className="footer">
            <div className="footer__socialMedia">
            
            </div>
          </div>
        </footer>

      </div>
    ); 
  }
}

export default Home; 
