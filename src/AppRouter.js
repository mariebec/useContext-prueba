import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" />
          {/* <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route> */}
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
