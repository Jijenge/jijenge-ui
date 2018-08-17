import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';

class Yvonne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Navigation /> 
        </div>
        <div className="yvonneHeader">
          <div className="yvonneHeader__background">
            <div className="yvonneHeader__title">Hi, I'm Yvonne Achieng</div>
          </div>
        </div>
        <div className="yvonneStory">
              {/* <img className="yvonneStory__picture" src={yvonneStory} /> */}
          <div className="yvonneStory__containerQuestions">
            <div className="yvonneStory__containerQuestions--text1">
              How you got interested in computers?
            </div>
            <div className="yvonneStory__containerQuestions--subtext1">
            I like computers one because they make work more easier. It has made the world to be a global market and thus made everything to work out easier. I first got interested in computers when I was in form two. They were first introduced with a man called Carlos and his wife. I was among the first to join the computer class and thus my interest rose from there. 
            </div>
            <div className="yvonneStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently working on?
            </div>
            <div className="yvonneStory__containerQuestions--subtext2">
            The project I’m happy for is the one we did at Tunapanda involving blockchain technology. We were creating a website which would enable people to register their land using blockchain. Currently I am mentoring youngstars at Mogra on how to use computers.
            </div>
          </div>

          <div className="yvonneStory__container">
            <div className="yvonneStory__container--text">
            <div className="annStory__container--myStory">This is my story </div>
            I was born in a family of five. That is father, mother, two siblings and I.I lived with my family at a slum known as mathare (jangwani) in Nairobi County. Life in mathare slum was not that adorable since both my parents had no job to provide for the family.  Due to this problem my elder brother by the name Brian Jairo Omondi decided to join the street urchins where they could go around the street of Nairobi collecting scrap metals, selling them so that he could provide for the whole family.
            He strived for some years till my mother got a job as a house wife at East Leigh in Nairobi. She later on took us to school with the little amount she could manage to get as well as providing for the family. My mother’s new job brought smile in everyone’s face in our family until she felt sick. She was admitted to Kenyatta National Hospital and after being diagnosed, she was found to be suffering from Tuberculosis(TB).Her sickness worsened and later on she passed on. My father’s death come over after a few months out of depression. My parent’s death, life worsened more than it was before they were death, so my brother decided to leave his studies and back to the duty in the street so that he could provide for us.
            Surely God is never asleep. An angel was sent from nowhere. Reverent[U1]  Hannah took us from the slum and admitted us to Mogra Children Home as well as taking us to school. She brought back our joy and placed a new smile on our faces. I did my primary level well, went to secondary school and now am glad have joined a university and believing for a brighter future. Am also looking forward to support the younger ones just as someone else did to me.
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

export default Yvonne; 