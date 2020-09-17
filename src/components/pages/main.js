import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

// import Container from "../Container"
// main landing page
class Main extends Component {
  render() {
    return (
      <div style={{width: "100%", margin: "auto"}}>
        <Grid className="landing">
        <Cell col={12}>
        <img 
        src={require("../image/profile_pic.jpg")} alt="profile_pic" className="profile_img"
        />

        </Cell>

        </Grid>
      </div>
    );
  }
}



export default Main;