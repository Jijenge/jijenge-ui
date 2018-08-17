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
        <div>
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
            I like computers simply because they give me world in my hands without limits.With computers i can do research of what kind i need, i can read, listen to music, Get news or updates around the world and many more. Am sorry to say so ,but am addicted to computers because everytime i think about my laptop. In grade 3, was my first time to use a computer and it was amazing and saw it as another world and this was just playing games. With time i came to learn that computers are great if you have the skills to use them and this made me even to increase my desire to know about them and today here i am with the skills.
            </div>
            <div className="onesmusStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently working on?
            </div>
            <div className="onesmusStory__containerQuestions--subtext2">
            Currently am doing soccer based projects at cloudfactory company and i enjoy doing this because am putting in use the skills that i have in work and its great for me. I also like engineering based projects more so on Autocad and Archicad drawings.
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