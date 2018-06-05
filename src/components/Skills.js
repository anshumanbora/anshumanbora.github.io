
import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
class Skills extends Component{


    render(){
        let data = {content:[
            {
                key:1,
                heading: "Web Develpoment",
                about : "HTML5,  CSS3,  Node,  React, Flask, MVC, Flux"

            },
            {
                key:2,
                heading: "Frameworks & Technologies",
                about : "Hadoop,  Apache,  Spark,  Unity,  Hyperledger Fabric"
            },
            {
                key:3,
                heading: "Languages",
                about : "Python,  JavaScript,  Java,  C++, MATLAB"
            },
            {
                key:4,
                heading: "Database",
                about : "MySQL,  PostgreSQL,  MongoDB"
            }

        ]}
        var skills = data.content.map(function (items) {
            return (

                <div className="row text-center" key={items.key}>

                    <h4><span id="blockSkillsHeader" >{items.heading}</span></h4>
                    <h3><div className="blockSkillsElements col-xs-12">{items.about}
                    </div></h3>
                    <br/>
                </div>
            );
        });


        return(
            <div>
                <Fade bottom>
                <br/><h4><div className="text-center">Skills Distribution Ratio</div></h4>
                <div className="row fullstack">
                    <div className="col-md-2 col-xs-1"></div>

                    <div className="col-md-5 col-xs-6 frontend text-center">
                        <h4>FRONT END</h4>
                        <div className="tool-tip text-left fadein8">Yes, I lean more towards Front end development</div>


                    </div>
                    <div className="col-md-3 col-xs-4 backend text-center">
                        <h4>BACK END</h4>
                        <div className="tool-tip text-right fadein8">But, I can write robust APIs too!</div>
                    </div>

                    <div className="col-md-2 col-xs-1"></div>

                </div>

                {skills}
                </Fade>
            </div>
        )
    }
}

export default Skills;