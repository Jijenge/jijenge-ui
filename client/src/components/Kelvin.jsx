import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';

class Kelvin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
        <div className="kelvinHeader">
          <div className="kelvinHeader__background">
            <div className="kelvinHeader__title">Hi, I'm Kelvin Achieng</div>
          </div>
        </div>
        <div className="kelvinStory">
              {/* <img className="kelvinStory__picture" src={kelvinStory} /> */}
          <div className="kelvinStory__containerQuestions">
            <div className="kelvinStory__containerQuestions--text1">
              How you got interested in computers?
            </div>
            <div className="kelvinStory__containerQuestions--subtext1">
            I like computers one because they make work more easier. It has made the world to be a global market and thus made everything to work out easier. I first got interested in computers when I was in form two. They were first introduced with a man called Carlos and his wife. I was among the first to join the computer class and thus my interest rose from there. 
            </div>
            <div className="kelvinStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently working on?
            </div>
            <div className="kelvinStory__containerQuestions--subtext2">
            The project I’m happy for is the one we did at Tunapanda involving blockchain technology. We were creating a website which would enable people to register their land using blockchain. Currently I am mentoring youngstars at Mogra on how to use computers.
            </div>
          </div>

          <div className="kelvinStory__container">
            <div className="kelvinStory__container--text">
            I was born in Nyeri in  central Kenya. I am twenty years old. I was born in a family of six whom they consist of my mum and my four other siblings (two brothers and two sisters together with i). I joined my primary education in Mutonga Primary School a school located in our village. My mum faced very many challenges and difficulties because of lack of money and she was unable to pay  for fees because many of the time there was no jobs which lead even some days we could sleep hungry. One day a friend of Mogra came to our village and saw the challenges that my mum was undergoing and asked me the reason why i was not going to school. I explained to him the reason why i was not going to school. He organised on how i would go to Mogra children’s home so as to continue with my education. I came in Mogra in 2014 and started my secondary education until i finished my secondary education course in last year from which i got a D+ in my KCSE exams .I thank Mogra because it have taught me to live in moral life and to reach where to where i am now. I have stayed about five months since graduated from high school.
            I want to pursue a course in certificate in electrical engineering which will take approximately two years in Nairobi Technical Training Institute.After that i will join diploma for another two years. I want to have a big company that will give better services in electrical works and skills and also teaching other upcoming generations in the skills.
            Currently i have achieved a certificate in both primary and secondary certificate. I have also achieved skills in computer studies in excel, word, powerpoints,essay presentation,creating of websites.which will be important in my career goals through googling important important topics on my course. I also need fees because we have insufficient fund for us to continue in our education so as my dream to be an electrical engineer will become true and also to have my career goal must have finished my course.
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

export default Kelvin; 