import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import vivianStory from '../images/vivian.jpg';

class Vivian extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Navigation /> 
        </div>
        <div className="vivianHeader">
          <div className="vivianHeader__background">
            <div className="vivianHeader__title">Hi, I'm Vivian Achieng</div>
          </div>
        </div>
        <div className="vivianStory">
              <img className="vivianStory__picture" src={vivianStory} />
          <div className="vivianStory__containerQuestions">
            <div className="vivianStory__containerQuestions--text1">
              How you got interested in computers?
            </div>
            <div className="vivianStory__containerQuestions--subtext1">
            I like computers one because they make work more easier. It has made the world to be a global market and thus made everything to work out easier. I first got interested in computers when I was in form two. They were first introduced with a man called Carlos and his wife. I was among the first to join the computer class and thus my interest rose from there. 
            </div>
            <div className="vivianStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently working on?
            </div>
            <div className="vivianStory__containerQuestions--subtext2">
            The project I’m happy for is the one we did at Tunapanda involving blockchain technology. We were creating a website which would enable people to register their land using blockchain. Currently I am mentoring youngstars at Mogra on how to use computers.
            </div>
          </div>

          <div className="vivianStory__container">
            <div className="vivianStory__container--text">
            <div className="annStory__container--myStory">This is my story </div>
            I am 18 years old, born in 23rd February 2000. I like watching movies, especially sci-fi because of their tech nature. I also like listening to music and swimming. I’m the last born in the family of three. I have one sister and one brother. I currently live in Mogra Children’s Home where I also volunteer. I joined Mogra Children’s Home due to unbearable situations after my parents’ death. We were left under our uncle’s care and he seem not to pay much attention to us as he did to his kids. My life became more worse when one day my aunt chased me out of her house. I was forced to live with friends which still things didn't work out. I would work at sugar farms to raise money for food and other basic needs. At this point I thought that my life was over and the dreams I had were no longer valid. One day I met a woman who took me to Mogra Children’s Home. This was life changing since I got where I could work out my dreams. I also met with different people who encouraged me and told that all was not lost. I can say I have lived here at Mogra like whole my life. I finished my High School last year and looking forward to join college in September to do Information and Technology. I’ll make sure I work hard and keep my dreams alive. I will also give back to the society by helping those in like me once and help them to their destinies. 
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

export default Vivian; 