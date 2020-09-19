import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

// main landing page
class Main extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing">
          <Cell col={12}>
          {/* profile image */}
            <img
              src={require("../image/profile_pic.png")}
              alt="profile_pic"
              className="profile_img"
            />
            <div className="banner">
              <h1>Carolene Wilson-Grizzle</h1>

              <hr />

              <p>
                Python | HTLM/CSS | JavaScript | JQuery | React | Express | Nodejs | MonoDB
              </p>
              <div className="socialMediaLinks">
                {/* linkedin */}
                <a
                  href="https://www.linkedin.com/in/carolene-wilson-grizzle-8121bb82/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/Carolenesw"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Main;
