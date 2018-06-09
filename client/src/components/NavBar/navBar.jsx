import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class NavBar extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <header>
        <div className='navigation-bar'>
          <div className='col-1-of-3'>
            <div className='nav-logo'>
            <Link to='/home'>Jijenge</Link>
            </div>
          </div>
          <div className='col-2-of-3'>
            <div className='nav-links'>
              <Link to='/ourWork'>Our work</Link>
              <Link to='/aboutUs'>About us</Link>
              <Link to='/meetTheStudents'>Meet the Students</Link>
              <Link to='/subscribe'>Subscribe</Link>
              <Link to='/donate'>Donate</Link>
            </div>
            </div>
        </div>
      </header>
    )
  }
} 

export default NavBar; 


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