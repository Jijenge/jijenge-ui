import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import danielStory from '../images/danielStory.jpg';

class Daniel extends Component {
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
            When i was in high school i inspired to do computer science , but it came a time when i
            decided to change to interior design. What made me to love doing computer is that is a practical
            science and that changes with time, i like to do something that will help me in the future and
            that evolves by time. What has made me love computer is having teachers who are committed
            on their lesson and share their skills free that has motivated me in loving and doing computer.
            what i like about the laptop that i have is that i can be educated,see the trending news and read
            articles written by people that inspire me.
            </div>
            <div className="danielStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently working on?
            </div>
            <div className="danielStory__containerQuestions--subtext2">
            Am currently in a project at Mogra Children’s Home of sharing and teaching kids ,one in
            primary level and a secondary student on what i have been learning. Am so happy sharing the
            skills that I have to others.
            </div>
          </div>

          <div className="danielStory__container">
            <div className="danielStory__container--text">
            <div className="annStory__container--myStory">This is my story </div>
            My name is Mwaura Daniel Munyoro, The son of Simon Mwaura  Wangiha and the late Jacinter Gathoni Mwaura , the  the second born of Mwaura family of five kids, i was born in 1999 in a  small village called Subukia  in Nakuru county ,before i came to Mogra Children’s i lived with my grandmother in Subukia ,where she was not able to pay for school fees of five kids, provide shelter, clothing and the love of a mother.In 2006 when i was in class one i happen to here those without  parents or have a single parent to write their names and submitted to the school office, i submitted my name and after a period of a year we were told that we will be taken to school where we could be give support and shown how to read and provided with our needs.I came in Mogra in the year 2007 when i was in class two, i have been in Mogra children’s Home 11 years where i have overcome all the challenges and the desire to see my sisters and brother which have been a challenge in my life.  i am 19 years old.Regardless of the desiring the love of a parent and someone to show me the way i came to Mogra i am now educated from the pre-school to high school. In mogra i have managed to develop skills , talent and activities , i like football ,skating on highways, dancing, interacting with friends ,making new friends and showing them love that i have been shown in Mogra.In Mogra i have it have been at least good since i could not lack something to eat , someone to call a mum and dad  , friends , someone to show me love of a parenthood, where living in Mogra enabled me  understand myself and respect others in the society  .In Mogra i have gone through many challenges but tried to move on in life until present.I have learnt a lot in Mogra  living with people in unity ,sharing ideas ,speaking out and been  a God fearing person .Since i was a small kid i have desired to be a designer.I  like drawing, painting pictures and commenting on what have been  done and improve it myself  That why i decided instead of stressing my mind  i better take interior design and make my life better with a career that would make me free, i came to understand that what you do out of you heart you perfect better. 
            My current steps to achieve my goal is only on books since out of my knowledge that is in me i believe that when i get to school it will shine out to the whole world and i can make the world colourful. What rings in my mind is that a journey of a thousand miles start with a single  step,for i to shine out one have to build foundation for something to be stable ,i am supposed to start with the foundation in architecture that i can move with my career.
            The most that i need so to achieve my career is a whole of requirements that i hope that in one time to come i will be able to have, not only that but encouragement for i press on  so i can see  not only those in big homes can attend to better colleges and universities,Support and someone to take me to school and support me and buy me the school requirements. 
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

export default Daniel; 