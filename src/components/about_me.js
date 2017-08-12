/**
 * Created by anshuamanbora on 7/12/2017.
 */
import React,{Component} from 'react';

class AboutMe extends Component{
    render(){
        return(
            <div className="container vSpace50">
                <div className="row">
                    <div className="col-xs-2"></div>
                    <div className="col-xs-3">
                        <img height="280px" width="260px" src={require('../images/1.jpg')} />
                    </div>
                    <div id="about_me" className="col-xs-5">
                        <p className="bigfirst"> Hello!
                        </p>

                        <b/>
                        I am an aspiring full-stack developer.
                        I like creating visually appealing projects.
                        Most of my experiences so far has been
                        in the domain of front-end development
                        and currently expanding my field of interest
                        to full-stack development. I am pursuing my Masters
                        in Computer Science from Arizona State Uinversity
                        and will graduate by May 2018.




                    </div>
                    <div className="col-xs-2"></div>
                </div>
            </div>
        );
    }
}

export default AboutMe;