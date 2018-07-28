import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; 

class NavigationBar extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <div className="navigation__container">
        <div className="navigation__logo">
          <div className="navigation__item"><Link className="navigation__linkMain" to='/'>Jijenge</Link></div>
        </div>
        <div className="navigation__list">
          <div className="navigation__mobileList"><FontAwesomeIcon icon='bars' size="4x" /></div>
          <div className="navigation__item"><Link className="navigation__link" to='/OurWork'>Our work</Link></div>
          <div className="navigation__item"><Link className="navigation__link" to='/About'>About us</Link></div>
          <div className="navigation__item"><Link className="navigation__link" to='/MeetTheStudents'>Meet the Students</Link></div>
          {/* <div className="navigation__item"><Link className="navigation__link" to='/Subscribe'>Subscribe</Link></div> */}
          <div className="navigation__item"><Link className="navigation__link" to='/Donate'>Donate</Link></div>
        </div>  
      </div>
    )
  }
} 

export default NavigationBar; 
