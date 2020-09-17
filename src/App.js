import React, { Component } from "react";
import "./App.css";
import { Layout, Header,  HeaderRow, Textfield, Navigation, Drawer, Content } from "react-mdl";
import MainRoutes from "./components/MainRoutes";
import {Link} from "react-router-dom"
// import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header waterfall>
            <HeaderRow title="Title">
              <Textfield
                value=""
                onChange={() => {}}
                label="Search2"
                expandable
                expandableIcon="search"
              />
            </HeaderRow>
            <HeaderRow>
              <Navigation>
                <Link to="/About Me">About Me</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Resume">Resume</Link>
              </Navigation>
            </HeaderRow>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/About Me">About Me</Link>
              <Link to="/Portfolio">Portfolio</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Resume">Resume</Link>
            </Navigation>
          </Drawer>
          <Content>
          {/* body of page within content */}
            <div className="page-content" />
            <MainRoutes />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
