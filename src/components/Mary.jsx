import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import maryStory from '../images/maryStory.jpg';

class Mary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Navigation /> 
        </div>
        <div className="maryHeader">
          <div className="maryHeader__background">
            <div className="maryHeader__title">Hi, I'm Mary Achieng</div>
          </div>
        </div>
        <div className="maryStory">
              <img className="maryStory__picture" src={maryStory} />
          <div className="maryStory__containerQuestions">
            <div className="maryStory__containerQuestions--text1">
              How you got interested in computers?
            </div>
            <div className="maryStory__containerQuestions--subtext1">
            Computer is a device that makes work easier. I knew nothing about computers until when I finished form four and Vas and some donors contributed and I was able to receive a personal laptop. Since then I was have been able to access my computer everyday. Other than just giving us laptops they went ahead and organized three classes per week which has been helpful to us in many ways and we are very grateful. Thanks to them because today I wouldn't be interested in computers,i would also be knowing nothing about computers thanks for those who contributed to make work easy on us and now we are able to store information in our system. 
            </div>
            <div className="maryStory__containerQuestions--text2">
              What projects are you proud of, or what projects are you currently working on?
            </div>
            <div className="maryStory__containerQuestions--subtext2">
            There is this project about climate smart agriculture. Trying to figure out what are the better practices to improve climate smart agriculture. 
            Am also interested in a project dealing with beans and how we can add nutrients to beans when we cook.  
            </div>
          </div>

          <div className="maryStory__container">
            <div className="maryStory__container--text">
            <div className="annStory__container--myStory">This is my story </div>
            I was born in a family of six members. My father, mother and my three sisters. I lived with my family at a place called kangundo in Machakos County. I lived with my parents till when I was one-year-old .my parents were not that able since no one was working. I lived a life full of challenges till one day I got someone to get me a sponsor who sponsored me to join school.  The person who sponsored me said that I should join mogra children’s home so that I can be given full support. Till then I got separated with my parents. Life was a little hard without my parents close to me but I had to accept the situation since I needed the education.
            I was brought to mogra children’s home till I was in class six that is when my dad came and took me by force from school to go back with him. I was still so young so I had no option but follow his order since he was my dad. Life was not that easy with my dad, since when I got home my mum was no longer there and dad wanted me to stay with him. After staying with my dad for few days then my dad decided, since my mum was not there he got married again.my step mother started mistreating me and I did all the home chores and was never given any food at all, I could fetch a lot of water from a far distance carrying a twenty liters can as young as I was. I felt like it was the end of the world without my mum, since life became hard every single day passed my life became a night mare with no mum to share my problems with. Going to school was not that easy because every day I was send home for school fees.  my dad never cared nor did he love me he could just tell me to go back to school without school fees.  The school director saw that whenever I was send home regardless how many times a day, I could still come back to school so Sometimes he could have mercy on me and allow me to stay in class for some few days before he could send me back again.
            It was like that till one day the teachers saw that I was determined to study that they helped me till I was done with primary education. I struggled until I finished class eight   with no food nor using anything from my dad since he and my step mum decided to treat me like a slave. I could eat food from neighbor’s and clothes I could be given by my friends. when I finished class eight I passed very well despite the challenges. My dad refused to take me to school and I had to do something since my life could be useless without me going to school. I had Mama Hannah number so decided to call her and explain all my problems to her. At first she could not believe me since my dad had stolen me from the home without her knowing. I pleaded with her to at least let me finish my education since it was not my will or my happiness for my dad to take me away.  She is a kind, loving and God fearing woman, she listened to me and I was then allowed to come back home since this was the only home I knew since I understood who I was. Since I was allowed to stay in the home my life has always being great. Since that day I was brought back to this home no family member has ever come see me not even my dad. My mum, I don’t know where she is I have never heard any stories of my mum since I was one-year-old that’s the only time and last time I saw my mum. Hope one day I could hear from her even if it’s in heaven.
            My life is the most wonderful thing since I have many sisters and brothers who we take care of each other. Our mum and Dad in this home are the most wonderful people who have never had in this world. They took us when we needed them the most and showed us all the love in this world. Am now a teenager who knows what life is thanks to our mum Hannah who has always being there and our Dad Njoroge. Life in mogra children’s home is the best. Now am done with high school now waiting to join college as I volunteer in the children home with the small babies. Am just praying hard to get someone to take me to college.
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

export default Mary; 