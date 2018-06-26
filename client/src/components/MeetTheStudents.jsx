import React, { Component } from 'react'; 
import Student from './Student.jsx'; 
import Navigation from './NavigationBar.jsx'; 

class MeetTheStudents extends Component {
  constructor() {
    super();
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
        <div className="students">
          <div className="studentsIntro">
            <h1 className="">Jijenge</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, optio repudiandae. Adipisci non ipsam praesentium sit totam neque sapiente, nam est impedit tempora. Ducimus voluptatum optio veritatis, ut non magni.</p>
          </div>
          <div className="eachStudent">
            <Student /> 
          </div> 
        </div>
      </div>
    ); 
  }
}

export default MeetTheStudents; 