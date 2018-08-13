import React, { Component } from 'react'; 

export default class Meaning extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="section-meaning__header">
          <div className="primaryHeading">Jijenge</div>
          <div className="secondaryHeading">[ji-jehn-geh]</div>
          <div className="secondaryHeading">verb</div>
          <div className="secondaryHeading">1. build yourself, build your future</div>
        </div> 
        <div className="row">
          <div className="col-1-of-3">
            <div className="meaning-cards">
              <div className="meaning-cards__picture--1"></div>
              <div className="meaning-cards__content">
              <div className="meaning-cards__content--title">Basic Education</div>
              <div className="meaning-cards__content--subtitle">Local education partners deliver basic reading, writing and math skills</div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="meaning-cards">
              <div className="meaning-cards__picture--2"></div>
              <div className="meaning-cards__content">
                <div className="meaning-cards__content--title">STEM Education</div>
                <div className="meaning-cards__content--subtitle">Jijenge delivers a 1 year STEM program tailored to the student's needs</div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="meaning-cards">
              <div className="meaning-cards__picture--3"></div>
              <div className="meaning-cards__content">
                <div className="meaning-cards__content--title">Career Development</div>
                <div className="meaning-cards__content--subtitle">Jijenge increases earning potential through a reliable candidate pipeline for global companies.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}