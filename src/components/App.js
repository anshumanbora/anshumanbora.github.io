import React,{Component} from 'react';
import Header from './header';
import Section from './section';
import Footer from './footer';
import AboutMe from './about_me';

class App extends Component{



    render() {

        return(


            <div>
                <div className="header"><Header/></div>
                <div className="body">
                    <Section/>
                    <AboutMe/>
                </div>
                <div className="footer"><Footer/></div>
            </div>
        );
    }
}
export default App;