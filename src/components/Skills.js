import React, { Component } from "react";
import Fade from "react-reveal/Fade";
class Skills extends Component {
  render() {
    let data = {
      content: [
        {
          key: 1,
          heading: "Web Develpoment",
          about: "HTML5,  CSS3,  Node,  React, Flask, Django, MVC, Flask",
        },
        {
          key: 2,
          heading: "Paradigms",
          about: "Geospatial Engineering, AWS, Authentication/Authorization, Blockchain"
        },
        {
          key: 3,
          heading: "Languages",
          about: "Python,  JavaScript, C, C++, MATLAB"
        },
        {
          key: 4,
          heading: "Database",
          about: "MySQL,  PostgreSQL,  MongoDB",
        },
      ],
    };
    var skills = data.content.map(function (items) {
      return (
        <div className="row text-center" key={items.key}>
          <h4>
            <span id="blockSkillsHeader">{items.heading}</span>
          </h4>
          <h3>
            <div className="blockSkillsElements col-xs-12">{items.about}</div>
          </h3>
          <br />
        </div>
      );
    });

    return (
      <div>
        <Fade bottom>
          {skills}
        </Fade>
      </div>
    );
  }
}

export default Skills;
