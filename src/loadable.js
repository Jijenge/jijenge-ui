import React from "react";
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import("./components/Home.jsx"),
  loading: Loading
});

const MeetTheStudents = Loadable({
  loader: () => import("./components/MeetTheStudents.jsx"),
  loading: Loading
});

const Team = Loadable({
  loader: () => import("./components/Team.jsx"),
  loading: Loading
});

const Ann = Loadable({
  loader: () => import("./components/Ann.jsx"),
  loading: Loading
});

const Daniel = Loadable({
  loader: () => import("./components/Daniel.jsx"),
  loading: Loading
});

const Kelvin = Loadable({
  loader: () => import("./components/Kelvin.jsx"),
  loading: Loading
});

const Mary = Loadable({
  loader: () => import("./components/Mary.jsx"),
  loading: Loading
});

const Onesmus = Loadable({
  loader: () => import("./components/Onesmus.jsx"),
  loading: Loading
});

const Samuel = Loadable({
  loader: () => import("./components/Samuel.jsx"),
  loading: Loading
});

const Vivian = Loadable({
  loader: () => import("./components/Vivian.jsx"),
  loading: Loading
});

const Winnie = Loadable({
  loader: () => import("./components/Winnie.jsx"),
  loading: Loading
});

const Yvonne = Loadable({
  loader: () => import("./components/Yvonne.jsx"),
  loading: Loading
});

const VisitAfrica = Loadable({
  loader: () => import("./components/VisitAfrica.jsx"),
  loading: Loading
});

module.exports = {
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
};
