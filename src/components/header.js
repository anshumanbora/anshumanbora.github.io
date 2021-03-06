/**
 * Created by anshuamanbora on 7/9/2017.
 */
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div id="header" className="page-header header text-center">
        <div className="row"></div>
        <div className="col-md-4 text-left">
          ANSHUMAN<span className="surname">BORA</span>
          <h4 id="sub_header">Software Engineer</h4>
        </div>
        <div className="col-md-4"> </div>
        <div className="col-md-4">
          <div>
            <span className="padding-left-50px"></span>
            <span className="icon-space">
              <a
                title="Check out my GitHub fam!"
                href="https://www.github.com/anshumanbora"
              >
                <i className="fa fa-github fa-1x" aria-hidden="true"></i>
              </a>
            </span>
            <span className="icon-space">
              <a title="Mail me" href="mailto:anshumanbora04@gmail.com">
                <i className="fa fa-envelope fa-1x"></i>
              </a>
            </span>
            <span className="icon-space">
              <a
                title="Connect with me on LinkedIn"
                href="https://www.linkedin.com/in/anshuman-bora/"
              >
                <i className="fa fa-linkedin fa-1x" aria-hidden="true"></i>
              </a>
            </span>
           </div>
        </div>
      </div>
    );
  }
}

export default Header;