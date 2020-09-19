import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="info">
        <Grid className="grid">
          <Cell col={6}>
            <h2>Carolene Wilson-Grizzle</h2>
            <img
              src={require("../image/contact_img.jpg")}
              alt="Contact Img"
              className="contact_img"
              style={{ height: "250px" }}
            />
            {/* <h2>Aspiration</h2>
            <hr /> */}
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            An aspiration to provide end-users and team participants with the desired data or services via functional and fit for purpose cost effective programmatic means.
            </p>
            
            
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contacts">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton"}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (860) 532-9305
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton"}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    carolenesw@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                    <a href="https://github.com/Carolenesw"
                      rel="noopener noreferrer"
                      target="_blank">
                      <i className="fa fa-github" aria-hidden="true" /></a>GitHub
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton"}}>
                    <a href="https://drive.google.com/file/d/1xI-56YVqiM_S1acj-qyPDocyIUY7cOwQ/view"
                      rel="noopener noreferrer"
                      target="_blank">
                      <i className="fa fa-plus-circle" aria-hidden="true" /></a>Resume
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
