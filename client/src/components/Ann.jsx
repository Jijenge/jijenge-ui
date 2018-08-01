import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import AnnStory from '../images/annStory.jpg';
import Footer from './Footer.jsx';

class Ann extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
        <div className="annHeader">
          <div className="annHeader__background">
            <div className="annHeader__title">Hi, I'm Ann Ndunge</div>
          </div>
        </div>
        <div className="annStory">
          {/* <div className="annStory__containerQuestions"> */}
              <img className="annStory__picture" src={AnnStory} />
          {/* </div> */}
          <div className="annStory__containerQuestions">
            <div className="annStory__containerQuestions--text1">
              How you got interested in computers?
            </div>
            <div className="annStory__containerQuestions--subtext1">
            I got interested in computers back in 2014 just after joining high school. I was introduced to computers and i liked it so much. I could not get enough of what  they could do and so i could wait the whole day for the classes. My curiosity was soon cut short as we could not do any practicals since there were no enough Desktops. After a few months a programme was started at Mogra for computer classes and I was among the first ones to enroll. As day went I got more curious of computers and the internet, I opened social media accounts since I wanted so much to be part the village technology has turned the world into. After high school I got a chance to be part of the Jigenge tech club where i learnt so much. I also joined Tunapanda Institute a school of technology and design. While there I did so much with computers(making mobile application, website and animating). Am still curious of what else the computers can do.
            </div>
            <div className="annStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently working on?
            </div>
            <div className="annStory__containerQuestions--subtext2">
            While at Tunapanda I worked on a project that made a website using wordpress. My team and I made a website for Entrepreneurship content. We used the intent to search for the information and  I could not believe what we came up with. The website was amazing
            </div>
          </div>

          <div className="annStory__container">
            <div className="annStory__container--text">
              I was born in a small village called Kamanzi in Machakos County. My parents had a humble background. My father was a small scale farmer while my mother was a housewife who took care of us i.e. my siblings and I. As a child I enjoyed growing up in the village as every other children. I cannot forget that first day in school, I was so scared though I wanted it. I remember after school my mother asked how it was and I said I could still not write. She laughed so much and said it was a process. 
              Life was good and nothing seemed wrong   until one day when everything changed. Suddenly my father became sick. He could no longer work in the firm so my mother took over. This affected me as a child since my mother no longer had time for us. My older sister took me from school each day since she no longer attended school herself. She had to help our mom with the firm. My father’s sickness got worse with time and he was admitted to the hospital. My mom had to go there with her and my sister took her role in mylife. It is at this time that floods were witnessed in my village. Floods that swept away houses ours included. That day my sister never came for me in school since the  rain was too much I had to wait till very late in the night just to find our house swept away. I spent the night at my mom’s friend house without sleeping. I was too terrified to sleep.
              Life after this was so tough especially for my sister who was the oldest. Although I was young I saw what she was going through but I could do nothing. It is at this time when Mogra children’s Home came into our lives. I was almost 8 years when I joined the center  located in Mathare slums then. I adapted first and soon I started enjoying school. Without knowing it I was doing my Primary national exams. I could not believe that I would soon be in high school. My first day in high school was so fun and different from my first day in school. I enjoyed every part of high school until I graduated in  2017. After highschool I was worried about college since i did not get the government requirements to enroll in the public universities but vas, Michael and Brian started computers classes and the Jijenge tech club. I later joined Tunapanda a school of technology and design through the help of Vas. 
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

export default Ann; 