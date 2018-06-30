import React, { Component } from 'react'; 
import { Route, Switch} from 'react-router-dom';
import {StripeProvider} from 'react-stripe-elements';
import NavigationBar from './NavigationBar.jsx'; 
import Home from './Home.jsx';
import MeetTheStudents from './MeetTheStudents.jsx';
import Donate from './Donate.jsx';
import OurWork from './OurWork.jsx';
import About from './About.jsx';
import Subscribe from './Subscribe.jsx';
import Contact from './Contact.jsx';

export default class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/MeetTheStudents' component={MeetTheStudents} />
        <Route exact path='/Donate' component={(props) => (
            <StripeProvider apiKey="pk_test_z4MoEuHo0RIJC8oV0K6xhsO1">
              <Donate {...props} />
            </StripeProvider>
            )}/> 
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
