import React, { Component } from "react";
import Navigation from "./NavigationBar.jsx";
import Footer from "./Footer.jsx";
import danielStory from "../images/danielStory.jpg";

export default class Daniel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div className="danielHeader">
          <div className="danielHeader__background">
            <div className="danielHeader__title">Hi, I'm Daniel Achieng</div>
          </div>
        </div>
        <div className="danielStory">
          <img className="danielStory__picture" src={danielStory} />
          <div className="danielStory__containerQuestions">
            <div className="danielStory__containerQuestions--text1">
              How you got interested in computers?
            </div>
            <div className="danielStory__containerQuestions--subtext1">
              When I was in high school I inspired to do computer science, but
              it came a time when I decided to change to interior design. What
              made me to love doing computer is that is a practical science and
              that changes with time, I like to do something that will help me
              in the future and that evolves by time. What has made me love
              computer is having teachers who are committed on their lesson and
              share their skills free that has motivated me in loving and doing
              computer. what I like about the laptop that I have is that I can
              be educated, see the trending news and read articles written by
              people that inspire me.
            </div>
            <div className="danielStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently
              working on?
            </div>
            <div className="danielStory__containerQuestions--subtext2">
              Am currently in a project at Mogra Children’s Home of sharing and
              teaching kids, one in primary level and a secondary student on
              what I have been learning. Am so happy sharing the skills that I
              have to others.
            </div>
          </div>

          <div className="danielStory__container">
            <div className="danielStory__container--text">
              <div className="annStory__container--myStory">
                This is my story
              </div>
              My name is Mwaura Daniel Munyoro, The son of Simon Mwaura Wangiha
              and the late Jacinter Gathoni Mwaura, the the second born of
              Mwaura family of five kids, I was born in 1999 in a small village
              called Subukia in Nakuru county, before I came to Mogra Children’s
              I lived with my grandmother in Subukia, where she was not able to
              pay for school fees of five kids, provide shelter, clothing and
              the love of a mother. In 2006 when I was in class one I happen to
              here those without parents or have a single parent to write their
              names and submitted to the school office, I submitted my name and
              after a period of a year we were told that we will be taken to
              school where we could be give support and shown how to read and
              provided with our needs. I came in Mogra in the year 2007 when I
              was in class two, I have been in Mogra Children’s Home 11 years
              where I have overcome all the challenges and the desire to see my
              sisters and brother which have been a challenge in my life. I am
              19 years old. Regardless of the desiring the love of a parent and
              someone to show me the way I came to Mogra I am now educated from
              the pre-school to high school. In mogra I have managed to develop
              skills, talent and activities, I like football, skating on
              highways, dancing, interacting with friends, making new friends
              and showing them love that I have been shown in Mogra. In Mogra I
              have it have been at least good since I could not lack something
              to eat, someone to call a mum and dad, friends, someone to show me
              love of a parenthood, where living in Mogra enabled me understand
              myself and respect others in the society. In Mogra I have gone
              through many challenges but tried to move on in life until
              present. I have learnt a lot in Mogra living with people in unity,
              sharing ideas, speaking out and been a God fearing person. Since I
              was a small kid I have desired to be a designer. I like drawing,
              painting pictures and commenting on what have been done and
              improve it myself That why I decided instead of stressing my mind
              I better take interior design and make my life better with a
              career that would make me free, I came to understand that what you
              do out of you heart you perfect better. My current steps to
              achieve my goal is only on books since out of my knowledge that is
              in me I believe that when I get to school it will shine out to the
              whole world and I can make the world colourful. What rings in my
              mind is that a journey of a thousand miles start with a single
              step, for I to shine out one have to build foundation for
              something to be stable, I am supposed to start with the foundation
              in architecture that I can move with my career. The most that I
              need so to achieve my career is a whole of requirements that I
              hope that in one time to come I will be able to have, not only
              that but encouragement for I press on so I can see not only those
              in big homes can attend to better colleges and universities,
              Support and someone to take me to school and support me and buy me
              the school requirements.
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
