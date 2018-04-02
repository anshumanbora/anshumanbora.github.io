/**
 * Created by anshuamanbora on 7/12/2017.
 */
import React,{Component} from 'react';
import Spotify from './Spotify';

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
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <div id="intro-content">
                            <div className="mediumText">

                                <div className="ASU">Master of Computer Science
                                <br/> Arizona State University, USA
                                <br/>August 2016 - May 2018
                                </div>
                                <div className="Nirma">
                                <br/>B.Tech in Computer Engineering
                                <br/> Nirma University, India
                                <br/>July 2012 - May 2016
                                </div>

                            </div>
                            <div className="largeText">
                                <br/>
                                <br/>

                                I like creating visually appealing, minimalist projects on the Web.
                                Passionate about Blockchain, Human Computer Interaction and Adaptive Web Applications!
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 image">
                        <img height="380" width="330" className="img-responsive center-block" src={require('../images/2.jpg')} />

                    </div>
                    <div className="col-md-3"></div>

                </div>


            </div>




        );
    }
}

export default AboutMe;