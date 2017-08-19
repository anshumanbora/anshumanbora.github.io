/**
 * Created by anshuamanbora on 7/12/2017.
 */
import React,{Component} from 'react';

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

                    <div className="">
                        <img height="280" width="390" className="img-responsive center-block" src={require('../images/portfolio.png')} />
                    </div>

                <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-4"></div>
                    <div id="about_me" className="col-xs-12 col-sm-4 col-md-4">
                        <p className="bigfirst"> Hello!
                        </p>

                        <b/>
                        I am training myself to be a full-stack developer.
                        I like creating visually appealing projects.
                        Most of my experiences so far has been
                        in the domain of front-end development
                        and I am currently expanding my field of interest
                        to full-stack development. I am pursuing my Masters
                        in Computer Science from Arizona State University
                        and will graduate by May 2018.




                    </div>
                    <div className="col-sm-4 col-md-4"></div>

                </div>
            </div>

            </div>




        );
    }
}

export default AboutMe;