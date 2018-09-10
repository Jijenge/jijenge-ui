import React, { Component } from "react";
import Navigation from "./NavigationBar.jsx";
import Footer from "./Footer.jsx";
import onesmusStory from "../images/onesmusStory.jpg";

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
              I like computers simply because they give me world in my hands
              without limits. With computers I can do research of what kind I
              need, I can read, listen to music, get news or updates around the
              world and many more. Am sorry to say so, but am addicted to
              computers because everytime I think about my laptop. In grade 3,
              was my first time to use a computer and it was amazing and saw it
              as another world and this was just playing games. With time I came
              to learn that computers are great if you have the skills to use
              them and this made me even to increase my desire to know about
              them and today here I am with the skills.
            </div>
            <div className="onesmusStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently
              working on?
            </div>
            <div className="onesmusStory__containerQuestions--subtext2">
              Currently am doing soccer based projects at CloudFactory company
              and I enjoy doing this because am putting in use the skills that I
              have in work and its great for me. I also like engineering based
              projects more so on Autocad and Archicad drawings.
            </div>
          </div>

          <div className="onesmusStory__container">
            <div className="onesmusStory__container--text">
              <div className="annStory__container--myStory">
                This is my story
              </div>
              My name is Onesmus Nzilani. I was born on january 16, 1994, in
              eastern province, the now Machakos County. My parent is Rosemary
              Nzilani and I have two older siblings, Agnes and David. I attended
              matangini primary school from pre-school until third grade, later
              after coming to Nairobi I joined Mogra Star Academy in Mathare
              Valley. While there I participated in school scouting team,
              football team and maths club. I was on honor roll and received an
              academic achievement award. I finished my O level at Mogra which
              was an honor to me and achieved great from the school. I joined
              The Kabete National Polytechnic where I pursued my first diploma
              in civil engineering. While at Kabete I participated in football,
              peer club, basketball and club JOY. I was on honor roll every
              semester and received the presidential academic award. I also went
              through a three month intensive training at Tunapanda Institute. I
              was involved in technology, design and business. I frequently go
              to the library, while there I have learned many coders that
              pertain to my future career in programming. This gives me a
              positive motive and first hand experience identifying the steps
              and understanding how to proceed in programming. I currently
              attend CloudFactory company where I deal with sports based
              projects. The company has far made me to have more friends and
              it's making me to improve my browsing skills further.
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
