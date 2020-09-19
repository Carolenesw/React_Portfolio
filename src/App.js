import React, { Component } from "react";
import "./App.css";
import { Layout, Header,  HeaderRow, Textfield, Navigation, Drawer, Content } from "react-mdl";
import MainRoutes from "./components/MainRoutes";
import {Link} from "react-router-dom"
import Footer from "./components/Footer"
// import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header waterfall>
            <HeaderRow className="header-style" title="Dashboard">
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
              {/* change "a" tag to "link" and "href" to "to" */}
                <Link to="/About">About Me</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Contact">Contact</Link>
                {/* <Link to="/Resume">Resume</Link> */}
              </Navigation>
            </HeaderRow>
          </Header>
          <Drawer title="Dashboard">
            <Navigation>
              <Link to="/About">About Me</Link>
              <Link to="/Portfolio">Portfolio</Link>
              <Link to="/Contact">Contact</Link>
              {/* <Link to="/Resume">Resume</Link> */}
            </Navigation>
          </Drawer>
          <Content>
          {/* body of page stored within content */}
            <div className="page-content" />
            <MainRoutes />
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
