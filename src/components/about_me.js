/**
 * Created by anshuamanbora on 7/12/2017.
 */
import React,{Component} from 'react';
import Fade from 'react-reveal/Fade';


class AboutMe extends Component{

    constructor(){
        super();
        this.state={
            Image1Visible: true,
            Image2Visible: false}
    }
    toggleHoverImage=()=>{
        this.setState({Image1Visible:!this.state.Image1Visible,Image2Visible:!this.state.Image2Visible})
    }



    render(){


        return(

            <div>
                {/*This div is here for space. Donot remove*/}
                <div className="space-div"></div>
                    {/*<Hobbies/>*/}
                <div className="circle"></div>
                <div className="row">
                    <div className="col-md-2 col-xs-0"></div>
                    <div className="col-md-4 col-xs-12 vertical-line">
                        <div id="intro-content">
                            <div className="mediumText">

                                <div className="ASU text-right fadein4">
                                 <div className="degree ">   Master of Computer Science</div>
                                 Arizona State University, USA
                                <br/>August 2016 - May 2018
                                </div>
                                <div className="Nirma text-right fadein8">
                                <div className="degree"><br/>B.Tech in Computer Engineering</div>

                                 Nirma University, India
                                <br/>July 2012 - May 2016
                                </div>

                            </div>
                            <div className="largeText text-right fixed-gap">
                                <br/>

                                <Fade bottom>
                                    <div className="smallText">
                                    {/*I LIKE CREATING VISUALLY APPEALING, MINIMALIST PROJECTS ON THE WEB.*/}
                                                            I like creating visually appealing, minimalist web applications.
                                    </div>
                                </Fade>
                                <Fade bottom cascade> <span className="passionate">PASSIONATE ABOUT</span>
                                    <div bottom className="smallText">BLOCKCHAIN</div>
                                    <div bottom className="smallText">HUMAN COMPUTER INTERACTION</div>
                                    <div bottom className="smallText">ADAPTIVE WEB APPLICATION</div>
                                </Fade>

                                <div className="vSpace30"></div>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 image image-gap">
                        <Fade bottom>
                        <img height="380" width="330" className="img-responsive center-block" src={require('../images/2.jpg')} />
                        </Fade>
                    </div>
                    <div className="col-md-3 col-xs-0"></div>

                </div>
                <div className="circle"></div>

            </div>




        );
    }
}

export default AboutMe;