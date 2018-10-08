import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import Application from "./components/Application.jsx";

function render(Component) {
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>,

    document.getElementById("root")
  );
}

render(Application);

if (module.hot) {
  module.hot.accept("./components/Application.jsx", () => {
    const NewApplication = require("./components/Application.jsx").default;
    render(NewApplication);
  });
}
