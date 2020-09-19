import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  Button,
  IconButton,
  CardText,
} from "react-mdl";


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  // add if statement in a method to be rendered
  toggleCategories() {
    // use to render active tab using index id
    if (this.state.activeTab === 0) {
      return (
        //   React Projects
        <div className="project-cards">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="employee-card"
            style={{color: "#FFF", height: "350px"}}></CardTitle>
          <CardText className="card-text">
          <p className="title">Employee Directory</p>
          <p>Create a employee directory with random users, when the user loads the page, a table of employees should render. The user should be able to sort the table by at least one category and filter the users by at least one property.</p>

          </CardText>
          <CardActions className="buttons" border>
            <Button
              colored href="https://github.com/Carolenesw/Employee_Directory"
              target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button
              colored href="https://employee-directory2020.herokuapp.com/"
              target="_blank" rel="noopener noreferrer">Deployment</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="profolio-card"
            style={{color: "#FFF", height: "350px"}}></CardTitle>
          <CardText className="card-text">
          <p className="title">React Portfolio</p>
          <p>React portfolio app utilizing a single react component on multiple pages, navigation with React Router, a Footer component that appears on multiple pages and dynamic rendering. </p>

          </CardText>
          <CardActions className="buttons" border>
            <Button
              colored href="https://github.com/Carolenesw/Weather_Dashboard_R"
              target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button
              colored href="https://carolenesw.github.io/Weather_Dashboard_R/"
              target="_blank" rel="noopener noreferrer">Deployment</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
        // jQuery Projects
      return (
       <div className="project-cards">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="food-card"
            style={{color: "#FFF", height: "350px"}}></CardTitle>
          <CardText className="card-text">
          <p className="title">Food finder</p>
            <p>JQuery app that display nearby restaurants with delivery options,
            price, location and cuisines.</p>
          </CardText>
          <CardActions className="buttons" border>
            <Button
              colored href="https://github.com/Carolenesw/food-finder-P1"
              target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button
              colored href="https://carolenesw.github.io/food-finder-P1/"
              target="_blank" rel="noopener noreferrer">Deployment</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="weather-card"
            style={{color: "#FFF", height: "350px"}}></CardTitle>
          <CardText className="card-text">
          <p className="title">Weather App</p>
           <p>A weather application that allow's user to search based on their current location or city worldwide. The app display current weather five days forecast and uses color code to dispaly weather conditions. </p>
          </CardText>
          <CardActions className="buttons" border>
            <Button
              colored href="https://github.com/Carolenesw/Weather_Dashboard_R"
              target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button
              colored href="https://carolenesw.github.io/Weather_Dashboard_R/"
              target="_blank" rel="noopener noreferrer">Deployment</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>

      );
    } else if (this.state.activeTab === 2) {
        // Express Projects
      return (
        <div className="project-cards">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="employee-summary"
            style={{color: "#FFF", height: "350px"}}></CardTitle>
          <CardText className="card-text">
          <p className="title">Employee Summary</p>
            <p>A team generator command line application that will prompt the user for information about the team members. The user can input any number of team members including a mix of managers, engineers and interns.</p>
          </CardText>
          <CardActions className="buttons" border>
            <Button
              colored href="https://github.com/Carolenesw/Template-Engine---Employee-Summary"
              target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button
              colored href="https://drive.google.com/file/d/1jUJJcjkWLHgwm8__W8eCg4DR1TWlug2f/view?usp=sharing"
              target="_blank" rel="noopener noreferrer">Deployment</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="book-crawler"
            style={{color: "#FFF", height: "350px"}}></CardTitle>
          <CardText className="card-text">
          <p className="title">Book Crawler</p>
           <p>A full stack application that uses a database to store usernames and passwords to login and uses google books api to search for books. </p>
          </CardText>
          <CardActions className="buttons" border>
            <Button
              colored href="https://github.com/waltoids/Project2/tree/master"
              target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button
              colored href="https://book-crawler.herokuapp.com/"
              target="_blank" rel="noopener noreferrer">Deployment</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      );
    // }
    //  else if (this.state.activeTab === 3) {
    //   return (
    //     <div>
    //       <h1>This is MongoDB</h1>
    //     </div>
    //   );
    // } else if (this.state.activeTab === 4) {
    //   return (
    //     <div>
    //       <h1>This is Nodejs</h1>
    //     </div>
    //   );
    // } else if (this.state.activeTab === 5) {
    //   return (
    //     <div>
    //       <h1>This is JavaScript</h1>
    //     </div>
    //   );
    }
  }

  render() {
    return (
      <div className="project-type">
      <div className="portfolio"></div>
        {/* <h2>Portfolio</h2> */}
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JQuery</Tab>
          <Tab>Express</Tab>
          {/* <Tab>MongoDB</Tab>
          <Tab>Nodejs</Tab>
          <Tab>JavaScript</Tab> */}
        </Tabs>

        <section className="project-grid">
          <Grid className="project-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Portfolio;
