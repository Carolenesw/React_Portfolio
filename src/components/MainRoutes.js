import React from "react";
import { Route, Switch } from "react-router-dom";
import main from "../components/pages/main";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Portfolio from "../components/pages/Portfolio";
// import Resume from "../components/pages/Resume";

// sets routes to each page
const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={main} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Portfolio" component={Portfolio} />
    {/* <Route path="/Resume" component={Resume} /> */}
  </Switch>
);

export default MainRoutes;
