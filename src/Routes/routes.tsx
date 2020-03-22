import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPageView from '../App';
import Datenschutz from '../Datenschutz';

const Routes: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPageView} />
      <Route exact path="/Datenschutz" component={Datenschutz} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
