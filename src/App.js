import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./state/store";

import {
  Links,
  CaseA,
  CaseB,
  CaseC,
  CaseD,
  CaseE,
  CaseF,
  CaseG,
  CaseH,
  CaseI,
  CaseJ,
  CaseK
} from "./screens";

class App extends Component {
  render() {
    return (
      <Fragment>
        <p>
          This project provides a list of use cases to understand when and where
          redux causes rerendering. See Summary.xlsx in this repo to have a full
          summary of the results.
        </p>
        <Route path="/" component={Links} />
        <Route path="/casea" component={CaseA} />
        <Route path="/caseb" component={CaseB} />
        <Route path="/casec" component={CaseC} />
        <Route path="/cased" component={CaseD} />
        <Route path="/casee" component={CaseE} />
        <Route path="/casef" component={CaseF} />
        <Route path="/caseg" component={CaseG} />
        <Route path="/caseh" component={CaseH} />
        <Route path="/casei" component={CaseI} />
        <Route path="/casej" component={CaseJ} />
        <Route path="/casek" component={CaseK} />
      </Fragment>
    );
  }
}

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
