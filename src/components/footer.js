/**
 * Created by anshuamanbora on 7/9/2017.
 */
import React,{Component} from 'react';

class Footer extends Component{

    render(){
        return(
            <div id="footer" className="container">
                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-4 footerText">I would like to hear from you :</div>
                    <div >
                        <span className="col-xs-1"><a title="Mail me"  href="mailto:anshumanbora04@gmail.com">
                            <i className="fa fa-envelope fa-2x"></i>
                            </a></span>
                        <span className="col-xs-1"><a title="Facebook" href="https://www.facebook.com/anshumanbora04">
                            <i className="fa fa-facebook fa-2x"></i>
                            </a></span>
                        <span className="col-xs-1"><a title="LinkedIn" href="https://www.linkedin.com/in/anshuman-bora/">
                            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                            </a></span>

                    </div>
                    <div className="col-xs-4"></div>

                </div>
            </div>
        );
    }
}
export default Footer;
