import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import FilmsList from './Films/FilmsList';
import App from '../App'
import Film from "./Films/Film";

class RoutesList extends Component {
  render() {
    return <App>
      <Switch>
        <Route exact path="/" component={FilmsList}/>
        <Route path="/films/:id" component={Film}/>
        <Route path="/films" component={FilmsList}/>
      </Switch>
    </App>
  }
}

export default RoutesList