import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Page from "./Pages/PageExemplo";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Page} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
