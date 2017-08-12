/**
 * Created by anshuamanbora on 7/9/2017.
 */
import React,{Component} from 'react';


class Header extends Component{
    render()
    {
        return(
            <div id="header" className="page-header header text-center">
                <div className="row"></div>
                <div className="col-md-2"></div>
                <div className="col-md-8"> ANSHUMAN BORA</div>
                <div className="col-md-2">
                    <div id="github">
                        <a  title="GitHub"  href="https://www.github.com/anshumanbora">
                            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <h4 id="sub_header">
                    Graduate student at <a href="https://engineering.asu.edu/">Arizona State University</a></h4>
            </div>



        );
    }
}

export default Header;