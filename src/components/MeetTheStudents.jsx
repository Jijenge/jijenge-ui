import React, { Component } from 'react'; 
import Navigation from './NavigationBar.jsx'; 
import Footer from './Footer.jsx';
import headshot from '../images/headshot.jpg';
import kelvin from '../images/kelvin.jpg';
import ann from '../images/ourAnn.jpg';
import daniel from '../images/ourDaniel.jpg';
import mary from '../images/ourMary.jpg';
import onesmus from '../images/ourOnesmus.jpg';
import samuel from '../images/samuel.jpg';
import vivian from '../images/ourVivian.jpg';
import winnie from '../images/ourWinnie.jpg';
import yvonne from '../images/yvonne.jpg';

class MeetTheStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: ['Ann', 'Daniel', 'Kelvin', 'Mary', 'Onesmus', 'Samuel', 'Vivian', 'Winnie', 'Yvonne'],
      fullStudents: ['Ann Ndunge']
    }
  }

  handleAnn() {
    this.props.history.push('/Ann');
  }

  handleDaniel() {
    this.props.history.push('/Daniel');
  }

  handleKelvin() {
    this.props.history.push('/Kelvin');
  }

  handleMary() {
    this.props.history.push('/Mary');
  }

  handleOnesmus() {
    this.props.history.push('/Onesmus');
  }

  handleSamuel() {
    this.props.history.push('/Samuel');
  }

  handleVivian() {
    this.props.history.push('/Vivian');
  }

  handleWinnie() {
    this.props.history.push('/Winnie');
  }

  handleYvonne() {
    this.props.history.push('/Yvonne');
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <Navigation /> 
        </div>
        <main>
          <div className="ourStudentsHeader">
            <div className="ourStudentsHeader__text">We are a technology education education organization</div>
            <div className="ourStudentsHeader__subtext">We build post-secondary education programs in Sub-Saharan Africa</div>
          </div>
          <div className="ourStudents">
            <div className="ourStudents__header">Our Students</div>
            <div className="studentsContainer">

              <div className="studentsContainer__eachStudent">
                <div className="studentsContainer__eachStudent--picture">
                  <img src={ann}/>
                </div>
                <div className="studentsContainer__eachStudent--info">
                  <div className="studentsContainer__eachStudent--info-title">{this.state.students[0]}</div>
                  <div className="studentsContainer__eachStudent--info-subtitle">
                  Currently I am working on a project from the Jijenge tech club which involves teaching two students Microsoft Word and internet browsing skills. 
                  <div onClick={this.handleAnn.bind(this)}>{`Hear ${this.state.students[0]}'s story`}&rarr;</div> 
                  </div>
                </div>
              </div>

              <div className="studentsContainer__eachStudent">
                <div className="studentsContainer__eachStudent--pictureDaniel">
                  <img src={daniel}/>
                </div>
                <div className="studentsContainer__eachStudent--info">
                  <div className="studentsContainer__eachStudent--info-title">{this.state.students[1]}</div>
                  <div className="studentsContainer__eachStudent--info-subtitle">
                  Currently, I am trying to help at least two kids at Mogra to know how to use a computer and know how to browse the internet. I am also trying to get my admission to college coming September.
                  <div onClick={this.handleDaniel.bind(this)}>{`Hear ${this.state.students[1]}'s story`}&rarr;</div> 
                  </div>
                </div>
              </div>

              <div className="studentsContainer__eachStudent">
                <div className="studentsContainer__eachStudent--picture">
                  <img src={kelvin}/>
                </div>
                <div className="studentsContainer__eachStudent--info">
                  <div className="studentsContainer__eachStudent--info-title">{this.state.students[2]}</div>
                  <div className="studentsContainer__eachStudent--info-subtitle">
                  Currently, I am trying to help at least two kids at Mogra to know how to use a computer and know how to browse the internet. I am also trying to get my admission to college coming September.
                  <div onClick={this.handleKelvin.bind(this)}>{`Hear ${this.state.students[2]}'s story`}&rarr;</div> 
                  </div>
                </div>
              </div>
            </div>

          <div className="studentsContainer">
            <div className="studentsContainer__eachStudent">
              <div className="studentsContainer__eachStudent--picture">
                <img src={mary}/>
              </div>
              <div className="studentsContainer__eachStudent--info">
                <div className="studentsContainer__eachStudent--info-title">{this.state.students[3]}</div>
                <div className="studentsContainer__eachStudent--info-subtitle">
                Am trying my level best to work hard in my internship to get out with the best results ever. 
                Trying to save as much as possible so that in future I won't have any problems and most probably for my school fees in college.
                Trying to make the right choice in the career am choosing.
                <div onClick={this.handleMary.bind(this)}>{`Hear ${this.state.students[3]}'s story`}&rarr;</div> 
                </div>
              </div>
            </div>
            <div className="studentsContainer__eachStudent">
              <div className="studentsContainer__eachStudent--picture">
                <img src={onesmus}/>
              </div>
              <div className="studentsContainer__eachStudent--info">
                <div className="studentsContainer__eachStudent--info-title">{this.state.students[4]}</div>
                <div className="studentsContainer__eachStudent--info-subtitle">
                As I have acquired a job recently am working hard to set a good and strong financial background that will enable me to enter into my goals. One thing i know is that for one to achieve his goals he has to focus and have passion of what he wants, and as for me to achieve my goals i have to get a well financial background of which am working on today.
                <div onClick={this.handleOnesmus.bind(this)}>{`Hear ${this.state.students[4]}'s story`}&rarr;</div> 
                </div>
              </div>
            </div>    
          <div className="studentsContainer__eachStudent">
            <div className="studentsContainer__eachStudent--picture">
              <img src={samuel}/>
            </div>
            <div className="studentsContainer__eachStudent--info">
              <div className="studentsContainer__eachStudent--info-title">{this.state.students[5]}</div>
              <div className="studentsContainer__eachStudent--info-subtitle">
              Currently, I am taking typing lessons and online programming courses but my dream is to become an Electrical Engineer. 
              <div onClick={this.handleSamuel.bind(this)}>{`Hear ${this.state.students[5]}'s story`}&rarr;</div> 
              </div>
            </div>
          </div>
        </div>

          <div className="studentsContainer">
          <div className="studentsContainer__eachStudent">
            <div className="studentsContainer__eachStudent--picture">
              <img src={vivian}/>
            </div>
            <div className="studentsContainer__eachStudent--info">
              <div className="studentsContainer__eachStudent--info-title">{this.state.students[6]}</div>
              <div className="studentsContainer__eachStudent--info-subtitle">
              Currently, I am trying to help at least two kids at Mogra to know how to use a computer and know how to browse the internet. I am also trying to get my admission to college coming September.
              <div onClick={this.handleVivian.bind(this)}>{`Hear ${this.state.students[6]}'s story`}&rarr;</div> 
              </div>
            </div>
          </div>

          <div className="studentsContainer__eachStudent">
            <div className="studentsContainer__eachStudent--pictureWinnie">
              <img src={winnie}/>
            </div>
            <div className="studentsContainer__eachStudent--info">
              <div className="studentsContainer__eachStudent--info-title">{this.state.students[7]}</div>
              <div className="studentsContainer__eachStudent--info-subtitle">
              Currently, I am trying to help at least two kids at Mogra to know how to use a computer and know how to browse the internet. I am also trying to get my admission to college coming September.
              <div onClick={this.handleWinnie.bind(this)}>{`Hear ${this.state.students[7]}'s story`}&rarr;</div> 
              </div>
            </div>
          </div>

        <div className="studentsContainer__eachStudent">
          <div className="studentsContainer__eachStudent--picture">
            <img src={yvonne}/>
          </div>
          <div className="studentsContainer__eachStudent--info">
            <div className="studentsContainer__eachStudent--info-title">{this.state.students[8]}</div>
            <div className="studentsContainer__eachStudent--info-subtitle">
            Currently, I am trying to help at least two kids at Mogra to know how to use a computer and know how to browse the internet. I am also trying to get my admission to college coming September.
            <div onClick={this.handleYvonne.bind(this)}>{`Hear ${this.state.students[8]}'s story`}&rarr;</div> 
            </div>
          </div>
        </div>

      </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    ); 
  }
}

export default MeetTheStudents; 