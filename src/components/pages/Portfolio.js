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

// import Container from "../Container"

class Profolio extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  // add if statement in a method to be rendered
  toggleCategories() {
    // use to render active tab using index id
    if (this.state.activeTab === 0) {
      return (
        <div className="project-cards">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="employee-card"
            style={{color: "#FFF", height: "350px"}}>Employee_Directory</CardTitle>
          <CardText className="card-text">
          Create a employee directory with random users, when the user loads the page, a table of employees should render. The user should be able to sort the table by at least one category and filter the users by at least one property.

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
            style={{color: "#FFF", height: "350px"}}>React_Portfolio</CardTitle>
          <CardText className="card-text">
           A weather application that allow's user to search based on their current location or city worldwide. The app display current weather five days forecast and uses color code to dispaly weather conditions. 
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
      return (
       <div className="project-cards">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="food-card"
            style={{color: "#FFF", height: "350px"}}>Food finder</CardTitle>
          <CardText className="card-text">
            JQuery app that display nearby restaurants with delivery options,
            price, location and cuisines.
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
            style={{color: "#FFF", height: "350px"}}>Weather App</CardTitle>
          <CardText className="card-text">
           A weather application that allow's user to search based on their current location or city worldwide. The app display current weather five days forecast and uses color code to dispaly weather conditions. 
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
      return (
        <div>
          <h1>This is Express</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>This is Nodejs</h1>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="project-type">
        <h2>Profolio</h2>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JQuery</Tab>
          <Tab>Express</Tab>
          <Tab>MongoDB</Tab>
          <Tab>Nodejs</Tab>
          <Tab>JavaScript</Tab>
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

export default Profolio;
