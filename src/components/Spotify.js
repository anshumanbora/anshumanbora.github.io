import React,{Component} from 'react';
import  Fade from 'react-reveal/Fade';

class Spotify extends Component{
    render () {
        return (

                <div className="row">
                    <div className="col-md-3 col-xs-0"></div>
                    <Fade left>
                    <div className="col-md-3 col-xs-12 interestText text-center">

                            <br/><i className="fa fa-film fa-2x" aria-hidden="true"></i> Star Wars & Harry Potter. <br/> Saving Private Ryan is my favorite movie.
                            <br/>
                            <br/><i className="fa fa-music fa-2x" aria-hidden="true"></i> Progressive Rock. <br/>A big Steven Wilson fan.<br/> Checkout my Spotify playlist.
                            <br/>
                            <br/><i className="fa fa-camera fa-2x" aria-hidden="true"></i> Photography. <br/> I'm learning the skills.<br/> Looking for some good lenses.
                            <br/>
                            <br/><i className="fa fa-futbol-o fa-2x" aria-hidden="true"></i> I can endlessly talk about soccer. <br/> Arsenal FC is my favorite club.

                    </div>
                    </Fade>
                    <div className="col-md-1 col-xs-0"></div>
                    <Fade right>
                        <div className="col-md-5 col-xs-12 spotify ">
                            <iframe src="https://open.spotify.com/embed?uri=spotify:user:223diqhziureh7re5v3mfwifi:playlist:3V3cWcWDAsPa9Ybl6gVtsC&theme=white" width="270" height="350" frameBorder="0" allowTransparency="true"></iframe>
                        </div>
                    </Fade>
                </div>

        );
    }
}


export default Spotify;