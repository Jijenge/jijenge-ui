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
    }
  }

  handleMenuBtn() {
    this.setState({
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
            <div className="header__box">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sapiente hic odio quas officia quam cupiditate provident enim totam, molestiae asperiores rerum atque. Itaque, voluptatem quibusdam! Ipsum optio sapiente eius.
            <div className="header__action">action</div>
            </div>
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
