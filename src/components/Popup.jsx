import React, { Component } from 'react';

export default class Popup extends Component {
  constructor(props) {
    super(props);
  }

  // popClose() {
  //   this.props.close();
  // }

  render() {
    const { close } = this.props;
    return(
      <div className="popup">
        <div className="popup__content">
          <div onClick={close()}>X</div>
          <div className="popup__content--header"></div>
          <div className="popup__content--bio"></div>
        </div>
      </div> 
    )
  }
}