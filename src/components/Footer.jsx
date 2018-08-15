import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popup from "reactjs-popup";
import ControlledPopup from './PhonePopup.jsx';
import ControlledEmailPopup from './EmailPopup.jsx';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <div className="footer__logo">Jijenge</div>
        <div className="footer__container">
          <div className="footer__container--form">
            <div>We are a 501(c)(3)</div>
            <div>Certified Organization</div>
          </div>
          <div className="footer__container--social">
            {/* <a className="footer__container--social-phone"><ControlledPopup  /></a> */}
            <a className="footer__container--social-email"><ControlledEmailPopup  /></a>
            {/* <a className="footer__container--social-youtube"><FontAwesomeIcon icon={['fab', 'youtube-square']} size="2x" /></a> */}
          </div>
          <div className="footer__container--form">
            <div>112 South St. Suite 106</div>
            <div>Boston, MA 02111</div>
          </div>
        </div>
      </div>
    )
  }
}