import React, { Component } from 'react'; 
// import student1 from '../images/andre-adjahoe-474307-unsplash.jpg'; 

class Student extends Component {
  constructor() {
    super();
  }

//MVP 
  //Database? 
  //I need a picture 
  //Name 
  //description 

  render() {
    return (
      <div>
        <div className="student">
          {/* <img className="student__picture" src={student1} /> */}
          <div className="student__name">
            Anna 
          </div>
          <div className="student__description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta totam sit sapiente animi dolorem eos neque tempora nisi. Nihil culpa, eius quaerat et aspernatur vitae voluptate sapiente assumenda nesciunt?</p>
            </div>
        </div>
      </div>
    ); 
  }
}

export default Student; 