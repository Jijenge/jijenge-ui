import React, { Component } from 'react'; 

class Subscribe extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <form className="subscription__form">
          <input className="subscription__input" placeholder="Full name" />
          <input className="subscription__input" placeholder="Email" />
          <input className="subscription__btn" type="submit" value="Get our emails"/>
        </form>
      </div>
    ); 
  }
}

export default Subscribe; 