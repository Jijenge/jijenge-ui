import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'; 
import Popup from "reactjs-popup";

class ControlledEmailPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false, 
      fullName: '',
      email: '',
      message: ''
    };
  }
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  handleMessageSubmit = async(e) => {
    e.preventDefault();
    try {
      const { fullName, email, message} = this.state; 
      const body = {
        fullName,
        email,
        message
      };
      const data = await axios.post('http://localhost:3000/api/submit/message', body); 
      console.log('Successfully submit message', data);
    } catch(err) {
      console.log('Error saving message', err); 
    }
  }

  onChangeInfo(e) {
    const { name, value } = e.target; 
    this.setState({
      [name]: value
    }); 
    console.log("state", this.state.fullName, this.state.email, this.state.message);
  }

  render() {
    return (
      <div>
        <div onClick={this.openModal}>
          <FontAwesomeIcon icon='envelope' size="2x" />
        </div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
          // contentStyle={{ backgroundColor: "black", border: "none" }}
        >
          <div className="modalEmail">

            <form className="modalEmail__emailForm" onSubmit={this.handleMessageSubmit.bind(this)}> 
              <label>Full name</label>
              <input name="fullName" className="modalEmail__emailInput" onChange={this.onChangeInfo.bind(this)} />

              <label>Email</label>
              <input name="email" className="modalEmail__emailInput" onChange={this.onChangeInfo.bind(this)} />

              <label>Message</label>
              <input name="message" className="modalEmail__emailInputMessage" onChange={this.onChangeInfo.bind(this)} />

              <input className="modalEmail__emailInputSubmit" type='submit' value='send' />
            </form>
            <div className="close" onClick={this.closeModal}>
              &times;
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default ControlledEmailPopup; 