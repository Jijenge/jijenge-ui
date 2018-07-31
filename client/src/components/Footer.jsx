import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <div className="footer">
            <div className="footer__logo">Jijenge</div>
            <div className="footer__container">
              <div className="footer__container--form">
                <div>We are a 501(c)(3)</div>
                <div>Certified Organization</div>
              </div>
              <div className="footer__container--social">
                <a><FontAwesomeIcon icon='phone-square' size="2x" /></a>
                <a><FontAwesomeIcon icon='envelope' size="2x" /></a>
                <a><FontAwesomeIcon icon={['fab', 'youtube-square']} size="2x" /></a>
              </div>
              <div className="footer__container--address">
                <div>112 South St. Suite 106</div>
                <div>Boston, MA 02111</div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}