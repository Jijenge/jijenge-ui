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
        {/* MOBILE */}
        <div className="dropbtn">
          <a className="dropbtnIcon"><FontAwesomeIcon icon='bars' size="4x" /></a>
          <div className="dropdownContent">
            <Link to='/Donate'>Give monthly</Link>
            <Link to='/About'>Our students</Link>
            <Link to='/MeetTheStudents'>Team</Link>
            <Link to=''>Visit Africa</Link>
            <Link to='/Donate'>Donate</Link>
          </div>
        </div>
        {/* WEB */}
        <div className="navigation__list">
          <div className="navigation__item"><Link className="navigation__link" to='/Donate'>Give monthly</Link></div>
          <div className="navigation__item"><Link className="navigation__link" to='/MeetTheStudents'>Our students</Link></div>
          <div className="navigation__item"><Link className="navigation__link" to='/Team'>Team</Link></div>
          <div className="navigation__item"><Link className="navigation__link" to='/VisitAfrica'>Visit Africa</Link></div>
          <div className="navigation__item"><Link className="navigation__linkDonate" to='/Donate'>Donate</Link></div>
        </div>  
      </div>
    )
  }
} 

export default NavigationBar; 
