/**
 * Created by anshuamanbora on 7/9/2017.
 */
import React, { Component } from "react";
import Skills from "./Skills";
import Spotify from "./Spotify";
import Fade from "react-reveal/Fade";

var data = {
  content: {
    experience: [
      {
        heading: "Corteva Agriscience, Software Engineer",
        time: "October 2018 - Current",
        about:
          "Developing Geospatial Engineering tools for the agri-science industry.\n",
      },
      {
        heading: "Sunshine Acres, Web Developer (volunteer)",
        time: " October 2017 - June 2018",
        about:
          "Developed a web based React application to keep track of medications administered to more than 2000 foster children.\n",
      },
      {
        heading: "Blockchain Lab, Arizona State University, Front End Developer",
        time:
          "June 2017 - September 2017",
        about:
          "Built a prototype Blockchain based supply-chain platform, with IBM’s Hyperledger Fabric and React-Redux. Managed a four-member front-end team and came up with UI flows and layouts in team sessions. Attended client meetings and coordinated with the back-end team\n",
      },

      {
        heading: "Infosys Ltd., Engineering Intern",
        time: "January 2016 - May 2016",
        about:
          " Developed a server monitoring application which was an improvement from the existing implementation. Built the application using JavaScript and Java Server Faces.",
      },
      {
        heading: "Venture Xplore, Web Developer Intern",
        time: " May 2014 - July 2014",
        about:
          "Designed and developed the interfaces of Venture Xplore’s website, built on the LAMP stack. Brainstormed with the development team for content generation and employed my graphic design skills for designing the website.",
      },
    ],
    projects: [
      {
        heading: "Sunshine Acres, Winners of PayPal Opportunity Hack 2017",
        tags: "Key : Hackathon, React Native, Python",
        about:
          "Developed a system to record medicines given to kids at a Foster home",
        link: "https://devpost.com/software/team8-sunshineacres",
      },
      {
        heading: "StackOverflow Activity Tracker",
        tags: "Key : Browser Extension, JavaScript, Web",
        about: "Browser extension to keep track of user activity.",
        link: "https://github.com/anshumanbora/Tracker-Extension",
      },
      {
        heading: "Geospatial Data Analysis using Hadoop and Apache Spark",
        tags: "Key : Hadoop, Spark, Distributed Databases",
        about: "Working with a huge data set to find interesting hotspots",
        link: "https://github.com/vrajasu/geo-spatial-analysis",
      },
      {
        heading: "Video Similarity Detection Tool",
        tags: "Key : Feature reduction techniques, Indexing, Pagerank ",
        about: "Give me two videos and I'll tell you if they are similar",
        link: "https://github.com/super9user/mwd_phase3",
      },
      {
        heading: "Java Wiki Recommender",
        tags: "Key : SOLR, Indexing, Web",
        about: "Will tell you what to study. Yes it is intelligent.",
        link: "https://github.com/anshumanbora/Content-Based-Recommender",
      },
      {
        heading: "Customer Communication Application",
        tags: "Key : Java, Database, Hackathon",
        about: "Made life simpler by making communication easier",
        link: "https://github.com/Opportunity-Hack-2016-AZ/Team14",
      },

      {
        heading: "Nirma Atlas",
        tags: "Key : Python, Graphics, Map",
        about: "A map to unlock mysteries",
        link: "https://github.com/anshumanbora/Nirma-Atlas",
      },
    ],
  },
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: "" };
  }

  render() {
    var projects = data.content.projects.map(function (details) {
      return (
        <div key={details.heading}>
          <Fade bottom>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-xs-1"></div>
              <div
                className="col-lg-6 col-md-6 col-xs-10 center-block"
                // align="center"
              >
                <div className="card  projects">
                  <div className="card-block">
                    <h4 className="card-title">
                      <strong>{details.heading}</strong>
                    </h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {details.tags}
                    </h6>
                    <p className="card-text">{details.about}</p>
                    <a className="project-link" href={details.link}>
                      Link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-1"></div>
            </div>
          </Fade>
        </div>
      );
    });

    return <div>{projects}</div>;
  }
}

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: "" };
  }

  render() {
    var experience = data.content.experience.map(function (details) {
      return (
        <div key={details.heading}>
          <Fade bottom>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-xs-1"></div>
              <div
                className="col-lg-6 col-md-6 col-xs-10 center-block"
                // align="center"
              >
                <div className="card experience">
                  <div className="card-block">
                    <h4 className="card-title">
                      <strong>{details.heading}</strong>
                    </h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {details.time}
                    </h6>
                    <p className="card-text">{details.about}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-1"></div>
            </div>
          </Fade>
        </div>
      );
    });

    return <div>{experience}</div>;
  }
}
class Section extends Component {
  constructor() {
    super();
    this.state = {
      projectVisible: false,
      experienceVisible: false,
      interestVisible: false,
      skillsVisible: false,
    };
  }
  onClickExp() {
    this.setState({ experienceVisible: !this.state.experienceVisible });
  }

  onClickProject() {
    this.setState({ projectVisible: !this.state.projectVisible });
  }
  onClickSkills() {
    this.setState({ skillsVisible: !this.state.skillsVisible });
  }
  onClickInterest() {
    this.setState({ interestVisible: !this.state.interestVisible });
  }

  /*
        getInitialStateExp=()=>{
            return {hoverExp:true}
        }
        getInitialStateProject=()=>{
            return {hoverProject:false}
        }

    */
  toggleHoverExp = () => {
    this.setState({ hoverExp: !this.state.hoverExp });
  };
  toggleHoverProject = () => {
    this.setState({ hoverProject: !this.state.hoverProject });
  };

  toggleHoverSkills = () => {
    this.setState({ hoverSkills: !this.state.hoverSkills });
  };

  toggleHoverInterest = () => {
    this.setState({ hoverInterest: !this.state.hoverInterest });
  };

  render() {
    var linkStyleExp;
    var linkStyleProject;
    var linkStyleSkills;
    var linkStyleInterest;

    if (this.state.hoverExp) {
      linkStyleExp = { color: "#FBB03B" };
    } else {
      linkStyleExp = { color: "gray" };
    }

    if (this.state.hoverProject) {
      linkStyleProject = { color: "tomato" };
    } else {
      linkStyleProject = { color: "gray" };
    }

    if (this.state.hoverSkills) {
      linkStyleSkills = { color: "#2AC5EA" };
    } else {
      linkStyleSkills = { color: "gray" };
    }

    if (this.state.hoverInterest) {
      linkStyleInterest = { color: "#af6ef5" };
    } else {
      linkStyleInterest = { color: "gray" };
    }

    return (
      <div>
        <div className="card-background">
          <div
            style={linkStyleExp}
            onMouseEnter={this.toggleHoverExp}
            onMouseLeave={this.toggleHoverExp}
            onClick={() => this.onClickExp()}
            className="heading text-center "
          >
            EXPERIENCE
          </div>
          {this.state.experienceVisible ? <Experience /> : null}
        </div>

        <div className="section card-background">
          <div
            style={linkStyleSkills}
            onMouseEnter={this.toggleHoverSkills}
            onMouseLeave={this.toggleHoverSkills}
            onClick={() => this.onClickSkills()}
            className="heading text-center "
          >
            SKILLS
          </div>
          {this.state.skillsVisible ? <Skills /> : null}
        </div>
      
        <div className="card-background">
          <div
            style={linkStyleProject}
            onMouseEnter={this.toggleHoverProject}
            onMouseLeave={this.toggleHoverProject}
            onClick={() => this.onClickProject()}
            className="heading text-center"
          >
            PROJECTS
          </div>
          {this.state.projectVisible ? <Projects /> : null}
        </div>

        <div className="card-background ">
          <div
            style={linkStyleInterest}
            onMouseEnter={this.toggleHoverInterest}
            onMouseLeave={this.toggleHoverInterest}
            onClick={() => this.onClickInterest()}
            className="heading text-center "
          >
            {" "}
            INTERESTS
          </div>
          {this.state.interestVisible ? <Spotify /> : null}
        </div>

        {/* <div className="vSpace50"></div> */}
      </div>
    );
  }
}
export default Section;
