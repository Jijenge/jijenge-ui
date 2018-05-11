import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './navBar.scss'; 

class NavBar extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <header>
        <nav>
        <ul>
          <li>Jijenge</li>
          <li><Link to='/'>Our work</Link></li>
          <li><Link to='/aboutUs'>About us</Link></li>
          <li><Link to='/meetTheStudents'>Meet the Students</Link></li>
          <li><Link to='/Subscribe'>Subscribe</Link></li>
          <li><Link to='/Donate'>Donate</Link></li>
        </ul>
        </nav>
      </header>
    )
  }
} 

export default NavBar; 