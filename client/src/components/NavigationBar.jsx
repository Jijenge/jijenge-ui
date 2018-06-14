import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class NavigationBar extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <header>
        <div className='navigation-bar'>
          <div className='col-1-of-3'>
            <div className='nav-logo'>
            <Link to='/'>Jijenge</Link>
            </div>
          </div>
          <div className='col-2-of-3'>
            <div className='nav-links'>
              <Link to='/OurWork'>Our work</Link>
              <Link to='/About'>About us</Link>
              <Link to='/MeetTheStudents'>Meet the Students</Link>
              <Link to='/Subscribe'>Subscribe</Link>
              <Link to='/Donate'>Donate</Link>
            </div>
            </div>
        </div>
      </header>
    )
  }
} 

export default NavigationBar; 


{/* <nav>
<ul>
  <li>Jijenge</li>
  <li><Link to='/'>Our work</Link></li>
  <li><Link to='/aboutUs'>About us</Link></li>
  <li><Link to='/meetTheStudents'>Meet the Students</Link></li>
  <li><Link to='/subscribe'>Subscribe</Link></li>
  <li><Link to='/donate'>Donate</Link></li>
</ul>
</nav> */}