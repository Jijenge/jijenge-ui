import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import onesmusStory from '../images/onesmusStory.jpg';

class Onesmus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
        <div className="onesmusHeader">
          <div className="onesmusHeader__background">
            <div className="onesmusHeader__title">Hi, I'm Onesmus Achieng</div>
          </div>
        </div>
        <div className="onesmusStory">
              <img className="onesmusStory__picture" src={onesmusStory} />
          <div className="onesmusStory__containerQuestions">
            <div className="onesmusStory__containerQuestions--text1">
              How you got interested in computers?
            </div>
            <div className="onesmusStory__containerQuestions--subtext1">
            I like computers one because they make work more easier. It has made the world to be a global market and thus made everything to work out easier. I first got interested in computers when I was in form two. They were first introduced with a man called Carlos and his wife. I was among the first to join the computer class and thus my interest rose from there. 
            </div>
            <div className="onesmusStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently working on?
            </div>
            <div className="onesmusStory__containerQuestions--subtext2">
            The project I’m happy for is the one we did at Tunapanda involving blockchain technology. We were creating a website which would enable people to register their land using blockchain. Currently I am mentoring youngstars at Mogra on how to use computers.
            </div>
          </div>

          <div className="onesmusStory__container">
            <div className="onesmusStory__container--text">
            <div className="annStory__container--myStory">This is my story </div>
            My name is Onesmus Nzilani. I was born on january 16 ,1994, in eastern province,the now machakos county. My parent is Rosemary Nzilani  and i have two older siblings, agnes and david. I attended matangini primary school from pre-school until third grade, later after coming to nairobi i joined mogra star academy in mathare valley. While there i participated in school scouting team, football team and maths club. I was on honor roll and received an academic achievement award. I finished my O level at mogra which was an honor to me and achieved great from the school.
            I joined The Kabete National Polytechnic where i pursued   my first diploma in civil engineering. While at Kabete i participated in football, peer club, basketball and club JOY. i was on honor roll every semester and received the presidential academic award.
            I also went through a three month intensive training at Tunapanda Institute. I was  involved in technology, design and business. I frequently go to the library, while there i have learned many coders that pertain to my future career in programming. This gives me a positive motive and first hand experience identifying the steps and understanding how to proceed in programming.
            I currently attend CloudFactory company where i deal with sports based projects. The company has far made me to have more friends and it's making me to improve my browsing skills further.
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    ); 
  }
}

export default Onesmus; 