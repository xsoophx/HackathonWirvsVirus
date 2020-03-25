import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DataSecurity from '../view/dataSecurity';
import LandingPageView from '../view/landingPageView';

const Routes: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPageView} />
      <Route exact path="/datenschutz" component={DataSecurity} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
