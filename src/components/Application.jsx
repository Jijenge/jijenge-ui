import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faSearch,
  faBars,
  faYoutubeSquare,
  faEnvelope,
  faPhoneSquare
} from "@fortawesome/free-solid-svg-icons";
import SettingUpStripe from "./SettingUpStripe.jsx";
import {
  Home,
  MeetTheStudents,
  Team,
  Ann,
  Daniel,
  Kelvin,
  Mary,
  Onesmus,
  Samuel,
  Vivian,
  Winnie,
  Yvonne,
  VisitAfrica
} from "../loadable";

library.add(fab, faCheckSquare, faSearch, faBars, faEnvelope, faPhoneSquare);

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/MeetTheStudents" component={MeetTheStudents} />
            {/* <Route exact path='/Donate' component={Donate} /> */}
            <Route
              exact
              path="/Donate"
              component={props => (
                <StripeProvider
                  stripe={this.props.stripe}
                  apiKey="pk_test_tbFndORrRYzJjE2PVtiTnRRU"
                >
                  <SettingUpStripe {...props} />
                </StripeProvider>
              )}
            />
            <Route exact path="/Team" component={Team} />
            <Route exact path="/Ann" component={Ann} />
            <Route exact path="/Daniel" component={Daniel} />
            <Route exact path="/Kelvin" component={Kelvin} />
            <Route exact path="/Mary" component={Mary} />
            <Route exact path="/Onesmus" component={Onesmus} />
            <Route exact path="/Samuel" component={Samuel} />
            <Route exact path="/Vivian" component={Vivian} />
            <Route exact path="/Winnie" component={Winnie} />
            <Route exact path="/Yvonne" component={Yvonne} />
            <Route exact path="/VisitAfrica" component={VisitAfrica} />
          </Switch>
        </main>
      </div>
    );
  }
}
