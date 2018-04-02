
import React, {Component} from 'react';

class Skills extends Component{


    render(){
        let data = {content:[
            {
                key:1,
                heading: "Web Develpoment",
                about : "HTML5,  CSS3,  Node,  React,  Redux"

            },
            {
                key:2,
                heading: "Frameworks & Technologies",
                about : "Hadoop,  Apache,  Spark,  Matlab,  Unity,  Hyperledger Fabric"
            },
            {
                key:3,
                heading: "Languages",
                about : "Python,  JavaScript,  Java,  C++"
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
                <br/><h4><div className="text-center">Overall Skills distribution</div></h4>
                <div className="row fullstack">
                    <div className="col-md-2"></div>

                    <div className="col-md-5 frontend text-center"><h4>FRONT END</h4></div>
                    <div className="col-md-3 backend text-center"><h4>BACK END</h4></div>

                    <div className="col-md-2"></div>

                </div>

                {skills}
            </div>
        )
    }
}

export default Skills;