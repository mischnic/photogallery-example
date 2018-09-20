import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from 'containers/Gallery';
import PhotoDetails from 'containers/PhotoDetails';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Gallery} />
      <Route exact path="/photo/:photoId" component={PhotoDetails} />
    </Switch>
  </Router>
);

export default Routes;
