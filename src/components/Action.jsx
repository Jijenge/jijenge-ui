import React, { Component } from 'react';

export default class Action extends Component {
  constructor(props) {
    super(props);
  }

  handleDonation() {
    this.props.history.push('/Donate');
  }

  render() {
    return (
      <div className="section-action__content">
        <div className="primaryHeading">Leveling the educational playing field</div>
        <div className="secondaryHeading">Education has the power to democratize opportunity.</div>
        <div className="secondaryHeading">Education improves community health and reduces needless human suffering</div>
        <div className="section-action__content--btn" onClick={this.handleDonation.bind(this)}>Give Education</div>
      </div>
    )
  }
}