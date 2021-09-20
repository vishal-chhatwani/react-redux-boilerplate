/**
 * Polyfill
 */

import "@babel/polyfill";

/**
 * App Includes
 */

import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Redux Store
import store from "./store";

/**
 * Page Requires
 */

import App from "./components/App.jsx";
import NotFound from "./components/NotFound.jsx";

/**
 * SCSS requires
 */

require("./styles/main.scss");

const NotFoundWrapper = (props) => (
  <App
    match={props.match}
    location={props.location}
    history={props.history}
    staticContext={props.staticContext}
  >
    <NotFound location={props.location} />
  </App>
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route render={NotFoundWrapper} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app-container")
);
