import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About/About";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";
import UkDispatch from "./components/UKDispatch/UkDispatch";
import RmPestControl from "./components/RmPestControl/RmPestControl";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/work'>
          <Work />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/ukdispatch'>
          <UkDispatch />
        </Route>
        <Route exact path='/rmpestcontrol'>
          <RmPestControl />
        </Route>
      </Switch>
    </Router>
  );
}
