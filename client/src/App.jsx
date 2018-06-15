import React, { Component } from 'react'; 
import { Route, Switch} from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx'; 
import Home from './components/Home.jsx';
import MeetTheStudents from './components/MeetTheStudents.jsx';
import Donate from './components/Donate.jsx';
import OurWork from './components/OurWork.jsx';
import About from './components/About.jsx';
import Subscribe from './components/Subscribe.jsx';
import Contact from './components/Contact.jsx';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <div>
      <NavigationBar/> 
      </div>
      <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/MeetTheStudents' component={MeetTheStudents} />
        <Route exact path='/Donate' component={Donate} />
        <Route exact path='/OurWork' component={OurWork} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Subscribe' component={Subscribe} />
        <Route exact path='/Contact' component={Contact} />
      </Switch>
      </main>
      </div>
    ); 
  }
}

export default App; 