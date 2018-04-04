import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../presentational/Layout';
import NotFoundPage from '../presentational/404';
import FAQ from '../presentational/FAQ';
import Dashboard from './Dashboard';
import Create from './Create';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/create" component={Create} />
          <Route path="/faq" component={FAQ} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
