import React, { Component } from 'react'; 
import { Route, Switch} from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faSearch, faBars, faGithub, faVideo, faLinkedin, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './NavigationBar.jsx'; 
import Home from './Home.jsx';
import MeetTheStudents from './MeetTheStudents.jsx';
import Donate from './Donate.jsx';
import OurWork from './OurWork.jsx';
import About from './About.jsx';
import Subscribe from './Subscribe.jsx';
import Contact from './Contact.jsx';

library.add(fab, faCheckSquare, faSearch, faBars, faVideo, faEnvelope, faFileAlt);

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
        {/* <Route exact path='/Donate' component={Donate} /> */}
        <Route exact path='/Donate' component={(props) => (
            <StripeProvider stripe={this.props.stripe} apiKey="pk_test_tbFndORrRYzJjE2PVtiTnRRU">
              <Elements>
                <Donate {...props} />
              </Elements>
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
