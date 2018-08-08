import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popup from "reactjs-popup";

class ControlledPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div onClick={this.openModal}>
          <FontAwesomeIcon icon='phone-square' size="2x" />
        </div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            We want to hear from you give us a call at: (315) 521-7665 
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
          </div>
        </Popup>
      </div>
    );
  }
}

export default ControlledPopup; 