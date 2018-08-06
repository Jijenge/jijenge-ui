import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';

class Winnie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
        <div className="winnieHeader">
          <div className="winnieHeader__background">
            <div className="winnieHeader__title">Hi, I'm Winnie Achieng</div>
          </div>
        </div>
        <div className="winnieStory">
              {/* <img className="winnieStory__picture" src={winnieStory} /> */}
          <div className="winnieStory__containerQuestions">
            <div className="winnieStory__containerQuestions--text1">
              How you got interested in computers?
            </div>
            <div className="winnieStory__containerQuestions--subtext1">
            I like computers one because they make work more easier. It has made the world to be a global market and thus made everything to work out easier. I first got interested in computers when I was in form two. They were first introduced with a man called Carlos and his wife. I was among the first to join the computer class and thus my interest rose from there. 
            </div>
            <div className="winnieStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently working on?
            </div>
            <div className="winnieStory__containerQuestions--subtext2">
            The project I’m happy for is the one we did at Tunapanda involving blockchain technology. We were creating a website which would enable people to register their land using blockchain. Currently I am mentoring youngstars at Mogra on how to use computers.
            </div>
          </div>

          <div className="winnieStory__container">
            <div className="winnieStory__container--text">
            <div className="annStory__container--myStory">This is my story </div>
            I was born in 2000, the year that everybody believed that there would be a rapture. I was born in Nairobi County but later on my parents (Mr. and Mrs. Njoroge) migrated to Kiambu county,Lari sub county in a village known as Githirioni. Being a young and unemployed couple, my parents started off in a poor state. We lived in a single room made of iron sheet and the bedroom and the sitting room were divided by a curtain. Each night, I would spend at my grandmother’s house so as to give my parents some privacy. I spent most of my childhood with my paternal grandmother as my parents were busy working manually so as to at least put a meal on the table.
            When I was two, my mother gave birth to a bouncing baby boy and I was thrilled each minute I saw his little cute face and touch his smooth skin. I bragged about him to my friends and I would not let anyone touch him. By this time, my parents had worked so hard and bought a cow so milk was not a problem.
            At four, I started nursery school at Salome academy and using the money my parents got from the sale of milk and doing extra jobs, my fees was paid and our basic needs met. After one year in nursery school, my high IQ allowed me to move to the next class  but my mother argued that I was too young to proceed. However, my nursery school teacher told her that I was good to go to class one since I was smart and my mother had no option but to give in. I learnt class one in the same school but transferred to another school, a public one (Nyamweru Primary school), when I was in class two (2006). Life had become a bit difficult for my parents since my youngest sibling had been born, responsibilities increased and so fees for a private school could not be afforded.
            Thanks to my parents’ hard work and determination to give us a better life, in 2009 we moved into a new and beautiful house that they had built. Most villagers were in for a rude shock since they never thought that my poor parents could make such progress in life. My mother is gifted in farming and so she would cultivate different crops and get some money by selling them. On the other hand, my daddy worked at a petrol station and made some good money that at least met our basic needs. Life ran smoothly until one day the unexpected happened. Things suddenly changed.
            I remember vividly as though it happened just the previous minute. I was in class 7 (2011) and this day I had just completed doing my assignment and had just laid on my bed when my father came and banged the door, something he had never done before. I sensed that something was wrong. My mother went and opened to welcome him but she was met by a slap, then a filthy stench of alcohol filled the house. My father was drunk! He bit up my mother who escaped to my grandmother’s house bruised. I wept uncontrollably. He no longer spent time with us and each time he came home, he was ever drunk and would bit up my mother. In 2012, when I finished doing my national exam, my mother had had enough of it and she left with me, leaving my siblings. I wept but nothing could change. The water had already been spilt.
            Despite of my parents’ frequent fighting, I at least managed to score 302 marks in that year’s KCPE and received an admission letter from Kijabe Girls Secondary school. Since my parents had separated and my mummy had no money or any source of income, I could not go. She left me with my maternal grandmother and went in search of a job as I was enrolled in a day school (Mutuma Trinity Secondary school) that is not so popular. This was in 2013.  She was employed in Mogra Children Home and I rarely saw her. I missed her a lot BUT missed my siblings even more and each day I hoped and prayed that my mother could one day go for them and save them from the ill treatment of the stepmother. In 2015, my prayers were answered and she went for them and brought them to Mogra children Home.
            At Mutuma Trinity Secondary School, I did my level best and never got anything below a C plain in each exam. In 2014, I was actually elected as a prefect where I served until 2016, my final year in secondary school. I did the KCSE and had very high hopes, little did I know that the marking and grading systems had been changed and so I only managed to score a D+. I could not believe this and I really wailed. I thought myself as the greatest failure who has ever lived. Since I could not face the shame and disgrace, I decided to repeat form four( grade 12) and in 2017, I moved to Mogra children Home, where my mother works and thanks to the Director, she gave me a second chance to prove my potential. I promised myself that I would do my level best. I spent sleepless night revising and lucky enough, I scored a C plain in the second KCSE attempt. I was thrilled. I had improved by 2 points.
            After KCSE, I received a phone and a personal laptop from Vas who was initiating the Jijenge programme; a programme that involves teaching computer studies. Early January 2018, I and some fellow students started the computer studies with Vas, Michael and Bryan as our teachers. We had three lessons each week, a day with each teacher. I also worked as a childcare specialist where I took care of children aged between 4 to 14 years, managed their transportation to and from school by bus and even planned their meal I also reported to the director any arising issues, something that has left me trusted up-to-date.
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

export default Winnie; 