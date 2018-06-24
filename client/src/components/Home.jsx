import React, { Component } from 'react'; 
import background from '../images/backgroundImage.jpg';

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="video-container">
          <div className="video-container__sunset">
          <img src={background} />
          {/* <img src="https://source.unsplash.com/800x450/?africa" /> */}
          </div>
        </div>
      </div>
    ); 
  }
}

export default Home; 