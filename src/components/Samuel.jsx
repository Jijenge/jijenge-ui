import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import samuelStory from '../images/samuelStory.jpg';

class Samuel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
        <div className="samuelHeader">
          <div className="samuelHeader__background">
            <div className="samuelHeader__title">Hi, I'm Samuel Achieng</div>
          </div>
        </div>
        <div className="samuelStory">
              <img className="samuelStory__picture" src={samuelStory} />
          <div className="samuelStory__containerQuestions">
            <div className="samuelStory__containerQuestions--text1">
              How you got interested in computers?
            </div>
            <div className="samuelStory__containerQuestions--subtext1">
            I like computers because they helped me expand my mind and I get to know more about ongoing events. 
            </div>
            <div className="samuelStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently working on?
            </div>
            <div className="samuelStory__containerQuestions--subtext2">
            The project I’m proud of is learning how to develop Power Point presentations.
            </div>
          </div>

          <div className="samuelStory__container">
            <div className="samuelStory__container--text">
            <div className="annStory__container--myStory">This is my story </div>
              My name is Samuel Wangiha, I was born in a family of seven people, father, mother, three boys and two sisters. We were living in rural area where we could not to go because of school fees. I as the first born I used to help my parents in looking for food, shelter and also school fees for my younger sisters and brothers in 2003 my mum passed away where we remained with my father,  I and my second born brother we could not go to school so that others can go to school.
              In 2004 my grandmother took us and decided to help us so we could go to school all of us. She helped where my dad went to look for a job so to help my grandmother it came a day where my dad had no job and he brought nothing to a family due to look of job. In September 2004 Mama Hannah came to our school and she decided to help the families that could not get food, school fees and also a place to call a home as time goes we stopped going to school. In 2006 mama Hannah took my brother and I to Mogra Children Home where we went back to school where my two sisters and one brother remained with my father.
              Mogra has helped my family and also my life I was not sure of finishing my high school. In life I would like to pursue a course in electrical engineering for that to pursue a course in electrical engineering for that is my career.    
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

export default Samuel; 