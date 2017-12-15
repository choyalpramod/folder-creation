import React from 'react';
import reactDom from 'react-dom';
import './css/responsive.scss';

import Home from './views/Home';
import * as urlConstants from './section/constants/urlConstants';
import PageNotFound from './views/PageNotFound';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={urlConstants.urls.home.path} component={Home} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

reactDom.render(
  <App />, document.getElementById('app')
);