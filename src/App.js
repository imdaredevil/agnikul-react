import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import "./css/styles.css";

const Home = lazy(() => import('./Home-page'));
const About = lazy(() => import('./About-page'));
const Team = lazy(() => import('./Team-page'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/team" component={Team}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;