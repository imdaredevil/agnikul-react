import React, { Component } from 'react';
import "./css/launch.css";
import navBar from './js/common';
import Init from './js/launch';
import log from "./images/logo.png";
import spaceshipWhite from "./images/spaceship-copy.png";
import { Link } from 'react-router-dom';

import blank from './images/group-9255.png';
import AsiaPacific from './images/Asiapacific.png';
import India from "./images/India.png";
import NorthAmerica from "./images/Northernamerica.png";
import NorthEurope from "./images/Northerneurope.png";


class Launch extends Component {


 constructor(props){
     super(props);

     this.state = {
         current : blank,
         currentName : "LAUNCH LOCATION"
     }

     this.setSite = this.setSite.bind(this);

 }

 setSite(site) {
     var name = "LAUNCH LOCATION";
     if(site == AsiaPacific)
        name = "Asia Pacific";
     if(site == NorthEurope)
        name = "Northern Europe";
    if(site == NorthAmerica)
        name = "Northern America";
    if(site == India)
        name = "India";
     this.setState(
         {current : site,
           currentName : name 
        }
     );
 }

render() {
    Init();

    return (
        <div className="body">
            <div className="navBar">
                <div className="topnav row justify-content-around align-items-baseline" id="myTopnav">
                    <div className="column-lg nav-brandc">
                        <Link to="/"><img className="logo" src={log} /></Link>
                    </div>
                    <div className="column">
                        <Link to="/about" className="nav-itemc nav-linkc">
                            About
                </Link>
                    </div>
                    <div className="column">
                        <Link to="/products" className="nav-itemc nav-linkc">
                            Products
                </Link>
                    </div>
                    <div className="column-md">
                        <Link to="/launch-sites" className="nav-itemc nav-linkc active">
                            Launch Sites
                </Link>
                    </div>
                    <div className="column-md">
                        <Link to="/team" className="nav-itemc nav-linkc">
                            Meet the Team
                </Link>
                    </div>
                    <div className="column">
                        <Link to="/career" className="nav-itemc nav-linkc">
                            Career
                </Link>
                    </div>
                    <div id="navButtonDiv" className="column-lg">
                    <Link to="/book"><button className="nav-itemc nav-buttonc">
                             BOOK YOUR LAUNCH
                        </button></Link>
                    </div>
                </div>
                <div className="iconc">
                    <div onClick={navBar}>
                        <i className="fa fa-bars fa-lg"></i>
                    </div>
                </div>
            </div>

            <p className="launch__section-head">Launch-Sites</p>
            <p className="launch__section-head-text">Pavel is a writer and researcher who studied digital humanities and new media.
        Being addicted to large amount of information, he produces an appropriate.</p>

            <div className="launch__overall-div">
                <div className="launch__location-swiper">
                    <div className="launch__swiper-wrapper">
                        <div className="launch__location__swiper-slide">
                            <div id="chennai" className={this.state.current === NorthAmerica ? "launch__location__slide-content active" : "launch__location__slide-content"} onClick={(e) => this.setSite(NorthAmerica)}>
                                <p className="launch__location__slide-number">01</p>
                                <p className="launch__location__slide-name">Northern America</p>
                                <p className={this.state.current === NorthAmerica ? "launch__location__slide-desc active" : "launch__location__slide-desc"}>
                                    Construction is currently underway on a second launch pad at Launch Complex 1.
                </p>
                            </div>
                        </div>
                        <div className="launch__location__swiper-slide">
                            <div id="beijing" className={this.state.current === NorthEurope ? "launch__location__slide-content active" : "launch__location__slide-content"} onClick={(e) => this.setSite(NorthEurope)}>
                                <p className="launch__location__slide-number">02</p>
                                <p className="launch__location__slide-name">Northern Europe</p>
                                <p className={this.state.current === NorthEurope ? "launch__location__slide-desc active" : "launch__location__slide-desc"}>
                                    Construction is currently underway on a second launch pad at Launch Complex 1.
                </p>
                            </div>
                        </div>
                        <div className="launch__location__swiper-slide">
                            <div id="kolkata" className={this.state.current === India ? "launch__location__slide-content active" : "launch__location__slide-content"} onClick={(e) => this.setSite(India)}>
                                <p className="launch__location__slide-number">03</p>
                                <p className="launch__location__slide-name">India</p>
                                <p className={this.state.current === India ? "launch__location__slide-desc active" : "launch__location__slide-desc"}>
                                    Construction is currently underway on a second launch pad at Launch Complex 1.
                </p>
                            </div>
                        </div>
                        <div className="launch__location__swiper-slide">
                            <div id="ahmedabad" className={this.state.current === AsiaPacific ? "launch__location__slide-content active" : "launch__location__slide-content"} onClick={(e) => this.setSite(AsiaPacific)}>
                                <p className="launch__location__slide-number">04</p>
                                <p className="launch__location__slide-name">Asia Pacific</p>
                                <p className={this.state.current === AsiaPacific ? "launch__location__slide-desc active" : "launch__location__slide-desc"}>
                                    Construction is currently underway on a second launch pad at Launch Complex 1.
                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="launch__world-map">
                    <img className="world_image" src={this.state.current} />
                </div>
            </div>

            <div className="launch__buttonDiv">
            <Link to={{pathname : "/book", state : {launch : this.state.currentName }}}>
                                    <button className="custom-button">
                                        <img src={spaceshipWhite}></img>
                                        <span>LAUNCH MY VEHICLE</span>
                                    </button>
                                    </Link>
            </div>

            <div className="book__modal__out">
                <div className="book__modal__outer">
                    <div className="book__modal">
                        <p className="book__close__icon">X</p>
                        <p className="book__modal__heading">TERMS, CONDITIONS AND PRIVACY POLICY</p>
                        <p className="book__modal__text">These terms of use are an agreement between Agnikul Cosmos Private Limited (“Agnikul”, “we”, “us” or
                        “our”) and users of its website (“you”, “your” or “user”). This agreement (the “Agreement”) also
governs your use of this website <a href="http://agnikul.in">(http://www.agnikul.in/)</a> (the “Site”). By using the Site, you
acknowledge that you have reviewed and agree to all of the terms of this Agreement and agree to be
bound by them in connection with your use of the Site. By entering, accessing, browsing, submitting
information to, or otherwise using this site, you acknowledge and agree to the following terms and
conditions.
</p>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Intellectual Property
                </p>
                            <p className="book__modal__text">
                                All intellectual property rights in the Site including content, graphics and copyright works are owned by
us. We exclusively own all rights in the compilation, design and layout of the Site.<br></br>
You may access, view and print the content on the Site provided that you only use that content for your
personal use or otherwise in relation to using or considering our services.<br></br>
You must obtain our written permission to copy, reproduce or publish any of the content (including
graphics, videos, photographs or other copyright works) on the Site
                </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Third Party Websites
                </p>
                            <p className="book__modal_text">
                                From time to time, the Site may include features and functionality that allow you to interact with other
                                sites that are not under our control, including social media websites. We provide these features,
                                functionality, and links to you only as a convenience and do not endorse any linked websites or social
                                media sites and are not responsible for the contents or transmission of any linked websites or social
                                media sites.
                </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Provision of Information and Privacy
                </p>
                            <p className="book__modal__text">
                                You are not required to provide personal information to us. If you provide information to us, you will
ensure that such information is accurate and complete.<br></br>
We collect the personal information provided to us and may use it for communicating with you,
statistical analysis, and research and development.<br></br>
We do not generally disclose personal information to third parties for use for their own purposes. In
some instances, we may do so, including to our affiliates or providers who complete transactions or
perform services on our behalf, or if we are required to by law.<br></br>
Any personal information you provide to us may be stored on our providers’ secure servers. This may
involve transferring your information to countries which have less legal protection for personal
information than the countries in which you or we are based.<br></br>
We may also collect technical data and related information when you access or log on to the Site. This
may include information about your computer/tablet/mobile phone and the way users arrive at, browse
or interact with the Site. We may collect this information through the use of cookies or other means. If
you want to disable cookies, you can do so by changing your browser settings, although this may alter
the functionality of the Site. We use the technical information collected to have a better understanding
of how people use the Site and how we might improve it
                </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                All Liabilities Excluded
                </p>
                            <p className="book__modal__text">
                                You agree that your use of this Site is at your sole risk. Because of the number of possible sources of
                                information available through the Site, and the inherent hazards and uncertainties of electronic
distribution, there may be delays, omissions, inaccuracies or other problems with such information.<br></br>
To the extent permitted by law:
                </p>
                            <ol>
                                <li className="book__modal__text">
                                    all warranties, representations and guarantees are excluded, including suitability, fitness for
                                    purpose, appropriateness, availability for use, accuracy or completeness of the Site or the
                                    content on or accessed through it;
                    </li>
                                <li className="book__modal__text">
                                    under no circumstances shall Agnikul or its affiliates, agents or licensors be liable to you or
                                    anyone else for any damages (whether direct, indirect, punitive, incidental, special,
                                    consequential or otherwise, or whether resulting from tort, contract or other theories of law)
                                    including but not limited to attorneys’ fees and lost profits, in connection with, or in any manner
                                    arising out of: (1) the use or inability to use this Site and its content; (2) any goods or services
                                    obtained through third parties referenced or made available on or through this Site; (3) any
                                    errors or omissions in the content or information on the Site; or (4) any computer virus or other
                                    programming device, even if Agnikul is advised of the possibility thereof; and
                    </li>
                                <li className="book__modal__text">
                                    you indemnify us against all loss we suffer or incur as a direct or indirect result of your failure to
                                    comply with this Agreement.
                    </li>
                            </ol>
                            <p className="book__modal__text">
                                If you become dissatisfied with this Site, or the terms, conditions or policies governing this Site, your
                                sole and exclusive remedy is to discontinue using this Site. This limitation on damages is essential to the
                                agreement between you and us and the Site would not be provided free of charge without such
                                limitation.
            </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Governing Law and Jurisdiction
                </p>
                            <p className="book__modal__text">
                                The Site, all related content, and this Agreement shall be governed by and construed in accordance with
                                the laws of India, without regard to the principles of conflicts of laws. The courts of Chennai, India shall
                                have exclusive jurisdiction on any dispute that arises in relation to this Agreement or your use of the
                                Site.
                </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Amendments
                </p>
                            <p className="book__modal__text">
                                We may amend this Agreement from time to time, and you should ensure that you check and read the
                                same regularly. If you continue to use the Site after this Agreement is amended, you are deemed to
                                have agreed with the new terms of this Agreement.
                </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Contact
                </p>
                            <p className="book__modal__text">
                                If you have any queries, please contact privacy@agnikul.in
                </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="first-row"></div>
                <div className="container-fluid">
                    <div className="row border-row">
                        <div className="col-sm">
                            <p className="footer-normal phone">Phone</p>
                            <p className="footer-bolder">+32 50 31 28 32, +91 99625 075240, <br></br> +91 96772 82356, +1 551 689 2314</p>
                        </div>
                        <div className="col-sm">
                            <p className="footer-normal">Launch Services</p>
                            <p className="footer-bold">payloadpeople@gnikul.in</p>
                        </div>
                        <div className="col-sm">
                            <p className="footer-normal">Careers</p>
                            <p className="footer-bold">humancapital@agnikul.in</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <p className="footer-normal">Agnikul Cosmos Private Limited.</p>
                            <p className="footer-bolder">National Center for Combustion R&D, <br></br>3rd floor, IIT Madras, <br></br> Chennai 600036</p>
                        </div>
                        <div className="col-sm border-column">
                            <p className="footer-normal">Agnikul Cosmos Launch Vehicles Private Limited</p>
                            <p className="footer-bolder">Kerala Startup Mission, Technopark, Thejaswini, G3B, Technopark Rd, Karyavattom, Thiruvananthapuram, Kerala 695581</p>
                        </div>
                        <div className="col-sm">
                            <p className="footer-bold">Blog</p>
                            <p className="footer-bold"><Link to="/news" className="footer-bold">News</Link></p>
                            <p className="footer-bold">Videos</p>
                            <p className="footer-bold book__terms__link">Privacy Policy</p>
                            <div className="footer-social-logos">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                <i className="fa fa-google-plus" aria-hidden="true"></i>
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

}

export default Launch;