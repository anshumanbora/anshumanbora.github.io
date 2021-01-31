/**
 * Created by anshuamanbora on 7/12/2017.
 */
import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {
      Image1Visible: true,
      Image2Visible: false,
    };
  }
  toggleHoverImage = () => {
    this.setState({
      Image1Visible: !this.state.Image1Visible,
      Image2Visible: !this.state.Image2Visible,
    });
  };

  render() {
    return (
      <div>
        {/*This div is here for space. Donot remove*/}
        <div className="space-div"></div>
        {/*<Hobbies/>*/}
        {/* <div className="circle"></div> */}
        <div className="row">
          <div className="col-md-2 col-xs-0"></div>
          <div className="col-md-4 col-xs-12 ">
            <div id="intro-content">
              
              <div className="largeText text-right">
                <br />

                <Fade bottom>
                  <div className="smallText first-letter about-me">
                    Hello there. I'm a Software Engineer at <a className="corteva" href="https://www.corteva.com/" title="What is Corteva Agriscience?" target="_blank">Corteva Agriscience</a>.
                  </div>
                  <div className="during">
                     During weekdays you can find me staring at long lines of codes trying to find answers to some unanswered questions.  
                    <br/>
                    On weekends I'm usually out in the nature hitting some trails with my camera.

        </div>
                </Fade>
                <div className="vSpace30"></div>
              </div>
                  
            </div>
          </div>
          
          <div className="col-md-3 image">

            <Fade bottom>
              <img
                height="480"
                width="430"
                className="img-responsive center-block mobile"
                src={require("../images/3.png")}
              />
            </Fade>
          </div>
          <div className="col-md-3 col-xs-0"></div>
        </div>
        
              
        <div className="mediumText">
                <div className="ASU text-right fadein4">
                  <div className="degree "> Arizona State University, USA</div>
                  Master of Computer Science
                  <br />
                  August 2016 - May 2018
                </div>
                <div className="Nirma text-right fadein8">
                  <div className="degree">
                    <br />
                    Nirma University, India
                  </div>
                  B.Tech in Computer Engineering
                  <br />
                  July 2012 - May 2016
                </div>
              </div>
      </div>
    );
  }
}

export default AboutMe;
