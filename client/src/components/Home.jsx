import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
var FontAwesome = require('react-fontawesome');
import Navigation from './NavigationBar.jsx';
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
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
          
          <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
              <Navigation /> 
            </nav>

        </div>

        <div className="header">
        <div className="row">
          <div className="col-1-of-2">
            {/* <img className="logo" src="#"  /> */}
            {/* <div className="jijenge-word">Jijenge Logo</div>  */}
          </div>
          <div className="col-1-of-2">
            <div className="donate-box">
              <Link className="donate-box__word" to='/Donate'>Donate</Link>
            </div>
          </div>
        </div>
        </div>
      <main>
        
      </main>

      </div>
    ); 
  }
}

export default Home; 