/**
 * Created by anshuamanbora on 7/9/2017.
 */
import React,{Component} from 'react';
import SkillChart from './languages';

var data = {
    content: {
        experience: [
            {
                heading: "Blockchain Lab, Arizona State University",
                time:"June 2017 - Current",
                about : "Currently leading the front-end development team of the Blockchain Lab at Arizona State University. I coordinate with the backend team to come up with efficient strategies and also delegate tasks within the team. The development is mainly concentrated around React JS, Node JS and leverages the open source Blockchain technologies of Hyperledger environment"
            },

            {
                heading: "Infosys Ltd.",
                time:"January 2016 - May 2016",
                about : "Implemented a real time server monitoring application, which was deployed successfully on actual servers. This pilot project provided a robust foundation for its later versions. I developed the central monitoring web application using JSF, HTML5, CSS3 and JavaScript."
            },
            {
                heading: "Venture Xplore",
                time:"May 2014 - July 2014",
                about : "Implemented the front-end of Venture- Xplores’ website. Instrumental in brainstorming the UI/UX of the website.Intensively involved in the product development phase as an auxiliary responsibility."
            }
        ],
        projects: [
            {
                heading: "Geospatial Data Analysis using Hadoop and Apache Spark",
                tags:"Key : Hadoop, Spark, Distributed Databases",
                about: "Successfully setting up a distributed computing environment with Hadoop, followed by studying the performance of the network by running various tasks on the network. Analysis of a spatial-temporal data-set to find important spots within the map using Apache Spark and visualize it."
            },
            {
                heading: "Video Similarity Detection Tool",
                tags:"Key : Feature reduction techniques, Indexing, Pagerank ",
                about: "Finding similarity between different videos based on color, SIFT features and motion vectors. Algorithms like Pagerank, ASCOS and were used to find significant frames in a video database, and index them using LSH and then query with indexing. This application reduces dimensionality of the vector space using techniques like PCA and K-means clustering."
            }
            ,
            {
                heading: "Customer Communication Application",
                tags:"Key : Java, Database, Hackathon",
                about: "This project automated the communication process with customers for a non-profit organization and integrated a standalone database with a website. The erstwhile manually handled communication system was made fully automated by providing a simple user interface and a robust back-end. Designed and implemented the back-end of the this Java desktop application."
            }

            ,
            {
                heading: "Nirma Atlas",
                tags:"Key : Python, Graphics, Map",
                about: "A Windows desktop based application built on Python. This project was a realistic 2-dimensional rendition of the map of Nirma University, India. This portable application had scaled down versions of buildings, streets and other physical structures of the university. A user could effortlessly roam and explore the university from any desktop device. The standout feature of this application is that it enabled users to navigate from one location to another with the click of the mouse. Special permissions were taken from the university authorities to reproduce the buildings in the original scale."
            }

        ],
        skills: [
            {
                heading: "Web Develpoment",
                about : "React, HTML5, CSS3, JavaScript"

            },
            {
                heading: "Frameworks & Technologies",
                about : "Hadoop, Apache Spark, Matlab, Unity, Amazon Web Services, Docker, Hyperledger Fabric"
            },
            {
                heading: "Languages",
                about : "Python, Java, C++"
            },
            {
                heading: "Database",
                about : "Oracle DB, PostgreSQL, Mongo DB"
            }

        ]
    }

};



class Projects extends Component {

    constructor(props){
        super(props);
        this.state={variable:""};
    }



    render() {


        var projects = data.content.projects.map(function(details){
            return (<div>
                    <div className="row ">
                        <div className="col-xs-2 "></div>
                        <div className="col-xs-8 center-block" align="center">
                            <div className="card  projects">
                                <div className="card-block">
                                    <h4 className="card-title"><strong>{details.heading}</strong></h4>
                                    <h6 className="card-subtitle mb-2 text-muted">{details.tags}</h6>
                                    <p className="card-text">{details.about}</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xs-2"></div>
                    </div>
                </div>
            );
        });


        return (
            <div>
                {projects}


            </div>

        )

    }
}

class Experience extends Component {

    constructor(props){
        super(props);
        this.state={variable:""};
    }



    render() {
        var experience = data.content.experience.map(function(details){
            return (
                <div>
                    <div className="row">
                        <div className="col-xs-2"></div>
                        <div className="col-xs-8 center-block" align="center">
                            <div className="card experience">
                                <div className="card-block">
                                    <h4 className="card-title"><strong>{details.heading}</strong></h4>
                                    <h6 className="card-subtitle mb-2 text-muted">{details.time}</h6>
                                    <p className="card-text">{details.about}</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xs-2"></div>
                    </div>
                </div>


            );
        });



        return (
            <div>
                {experience}


            </div>

        )

    }
}
class Section extends Component{

    constructor(){
        super();
        this.state={projectVisible: false,
            experienceVisible: false,
            skillsVisible: false}

    }
    onClickExp() {
        this.setState({experienceVisible: !this.state.experienceVisible});
    }

    onClickProject() {
        this.setState({projectVisible: !this.state.projectVisible});

    }
    onClickSkills() {
        this.setState({skillsVisible: !this.state.skillsVisible});

    }

    /*
        getInitialStateExp=()=>{
            return {hoverExp:true}
        }
        getInitialStateProject=()=>{
            return {hoverProject:false}
        }

    */
    toggleHoverExp=()=>{
        this.setState({hoverExp:!this.state.hoverExp})
    }
    toggleHoverProject=()=>{
        this.setState({hoverProject:!this.state.hoverProject})
    }

    toggleHoverSkills=()=>{
        this.setState({hoverSkills:!this.state.hoverSkills})
    }

    render(){
        var linkStyleExp;
        var linkStyleProject;
        var linkStyleSkills;

        if (this.state.hoverExp) {
            linkStyleExp = {color: '#FBB03B'}
        } else {
            linkStyleExp = {color: 'gray'}
        }


        if (this.state.hoverProject) {
            linkStyleProject = {color: 'tomato'}
        } else {
            linkStyleProject = {color: 'gray'}
        }

        if (this.state.hoverSkills) {
            linkStyleSkills = {color: '#2AC5EA'}
        } else {
            linkStyleSkills = {color: 'gray'}
        }

        return(
            <div>
                <div className="card-background">
                    <div style={linkStyleSkills}
                         onMouseEnter={this.toggleHoverSkills}
                         onMouseLeave={this.toggleHoverSkills}
                         onClick={() => this.onClickSkills()}
                         className="heading text-center " >SKILLS
                    </div>
                    {
                        this.state.skillsVisible
                            ?<div >

                                <SkillChart/>
                            </div>
                            : null
                    }
                </div>
                <div className="card-background">
                    <div style={linkStyleExp}
                         onMouseEnter={this.toggleHoverExp}
                         onMouseLeave={this.toggleHoverExp}
                         onClick={() => this.onClickExp()}
                         className="heading text-center  vspace30 " >EXPERIENCE
                    </div>
                    {
                        this.state.experienceVisible
                            ? <Experience />
                            : null
                    }
                </div>

                <div className="card-background">
                    <div style={linkStyleProject}
                         onMouseEnter={this.toggleHoverProject}
                         onMouseLeave={this.toggleHoverProject}
                         onClick={() => this.onClickProject()}
                         className="heading text-center vspace30" >PROJECTS
                    </div>
                    {
                        this.state.projectVisible
                            ? <Projects />
                            : null
                    }
                </div>

                <div className="vSpace50"></div>


            </div>
        );
    }
}
export default Section;