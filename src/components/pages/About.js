import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="info">
        <Grid className="grid">
          <Cell col={6}>
            <h2>Carolene</h2>
            <hr />
            <br />
            <p >
              Resourceful Back-End Web Developer, Challenged as a situational
              leader whom is self-motivated, performance orientated, strategic
              thinker, critical analyses with charismatic interpersonal skills.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Focus</h2>
            <hr />
            <br />
            <p>
              Aimed to align polish web design functionality to meet clientele
              expectations by optimizing web-based potential and brand
              consistency.
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Skills</h2>
            <hr />
            <br />
            <p>
              Suitably equipped with transferrable skills and progressive
              working experiences in public and private sector. Certified in
              Full Stack Web Development from the University of Connecticut.
              Complemented with a Bachelor of Science degree in Business
              Administration and a Postgraduate Certificate in Project
              Management.
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Experience</h2>
            <hr />
            <br />
            <p >
              Experience spanned across international geographical borders in
              multidiscipline and diverse cultural settings.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
