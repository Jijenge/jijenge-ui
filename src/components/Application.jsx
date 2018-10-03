import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
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

library.add(fab, faCheckSquare, faSearch, faBars, faEnvelope, faPhoneSquare);

const LazyRoute = props => {
  const component = Loadable({
    loader: props.component,
    loading: () => <div>Loading...</div>
  });

  return <Route {...props} component={component} />;
};

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <main>
          <Switch>
            <LazyRoute
              exact
              path="/"
              component={() =>
                import(/* webpackChunkName: "Home" */ "./Home.jsx")
              }
            />
            <LazyRoute
              exact
              path="/MeetTheStudents"
              component={() =>
                import(/* webpackChunkName: "MeetTheStudents" */ "./MeetTheStudents.jsx")
              }
            />
            {/* <Route exact path='/Donate' component={Donate} /> */}
            <Route
              exact
              path="/Donate"
              component={props => (
                <StripeProvider apiKey="pk_test_GI0SGBMNGvzWDTXJiQyY0lv1">
                  <SettingUpStripe {...props} />
                </StripeProvider>
              )}
            />
            <LazyRoute
              exact
              path="/Team"
              component={() =>
                import(/* webpackChunkName: "Team" */ "./Team.jsx")
              }
            />
            <LazyRoute
              exact
              path="/Ann"
              component={() =>
                import(/* webpackChunkName: "Ann" */ "./Ann.jsx")
              }
            />
            <LazyRoute
              exact
              path="/Daniel"
              component={() =>
                import(/* webpackChunkName: "Daniel" */ "./Daniel.jsx")
              }
            />
            <LazyRoute
              exact
              path="/Kelvin"
              component={() =>
                import(/* webpackChunkName: "Kelvin" */ "./Kelvin.jsx")
              }
            />
            <LazyRoute
              exact
              path="/Mary"
              component={() =>
                import(/* webpackChunkName: "Mary" */ "./Mary.jsx")
              }
            />
            <LazyRoute
              exact
              path="/Onesmus"
              component={() =>
                import(/* webpackChunkName: "Onesmus" */ "./Onesmus.jsx")
              }
            />
            <LazyRoute
              exact
              path="/Samuel"
              component={() =>
                import(/* webpackChunkName: "Samuel" */ "./Samuel.jsx")
              }
            />
            <LazyRoute
              exact
              path="/Vivian"
              component={() =>
                import(/* webpackChunkName: "Vivian" */ "./Vivian.jsx")
              }
            />
            <LazyRoute
              exact
              path="/Winnie"
              component={() =>
                import(/* webpackChunkName: "Winnie" */ "./Winnie.jsx")
              }
            />
            <LazyRoute
              exact
              path="/Yvonne"
              component={() =>
                import(/* webpackChunkName: "Yvonne" */ "./Yvonne.jsx")
              }
            />
            <LazyRoute
              exact
              path="/VisitAfrica"
              component={() =>
                import(/* webpackChunkName: "VisitAfrica" */ "./VisitAfrica.jsx")
              }
            />
          </Switch>
        </main>
      </div>
    );
  }
}
