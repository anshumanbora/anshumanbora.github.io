import React, { Component } from "react";
import Header from "./header";
import Section from "./section";
import Footer from "./footer";
import AboutMe from "./about_me";

class App extends Component {
  render() {
    return (
      <div>
        <div className="">
          <Header />
        </div>
        <div className="body">
          <AboutMe />
          <Section />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
