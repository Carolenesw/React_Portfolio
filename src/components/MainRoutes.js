import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "../components/pages/Contact";
import Portfolio from "../components/pages/Portfolio";
import Resume from "../components/pages/Resume";

// sets routes to each page
const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Portfolio" component={Portfolio} />
    <Route path="/Resume" component={Resume} />
  </Switch>
);

export default MainRoutes;
