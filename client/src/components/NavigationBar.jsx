import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class NavigationBar extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <div>
        <ul className="navigation__list">
          <li className="navigation__item"><Link className="navigation__link" to='/OurWork'>Our work</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to='/About'>About us</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to='/MeetTheStudents'>Meet the Students</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to='/Subscribe'>Subscribe</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to='/Donate'>Donate</Link></li>
        </ul>      
      </div>
    )
  }
} 

export default NavigationBar; 
