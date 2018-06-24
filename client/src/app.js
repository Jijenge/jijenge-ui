import React from 'react'; 
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Application from './components/Application.jsx'; 

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, 
  document.getElementById("root"));
}

render(Application);

if (module.hot) {
  module.hot.accept('./components/Application.jsx', () => {
    const NewApplication = require('./components/Application.jsx').default
    render(NewApplication); 
  }); 
}