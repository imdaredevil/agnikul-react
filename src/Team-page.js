import React from 'react';
import "./css/team.css";
import log from "./images/logo.png";
import  navBar from "./js/common";
import placeHolder from "./images/homepage.jpeg";
import $ from "jquery";
import photo from "./images/temimage.jpg";

import { Link } from 'react-router-dom';

function Team(){

    
    $(document).ready(function(){
        $("body").removeClass("products");
        $(".first-row").removeClass(".home__first-row");
    });

    return (
        <div className="body">
    <div className="navBar">
        <div className="topnav row justify-content-around align-items-baseline" id="myTopnav">
            <div className="column-lg nav-brandc">
                <Link  to="/"><img className="logo" src={log}/></Link>
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
                <Link to="/launch-sites" className="nav-itemc nav-linkc">
                    Launch Sites
                </Link>
            </div>
            <div className="column-md">
                <Link to="/team" className="nav-itemc nav-linkc active">
                    Meet the Team
                </Link>
            </div>
            <div className="column">
                <Link to="/career" className="nav-itemc nav-linkc">
                    Career
                </Link>
            </div>
            <div id="navButtonDiv" className="column-lg">
                <button  className="nav-itemc nav-buttonc">
                   <Link to="/book"> BOOK YOUR LAUNCH</Link>
                </button>
            </div>
        </div>
        <div className="iconc">
                <div onClick={navBar}>
                    <i className="fa fa-bars fa-lg"></i>
                </div>
            </div>
    </div>
    <img src={photo} className="tempBanner"/>     
    {/* <div className="team__TeamBanner">
        <div className="team__banner-content">
            <p className="team__banner-first-line">Our Team</p>
            <p className="team__banner-text">Pavel is a writer and researcher who studied digital humanities and new media. 
                Being addicted to large amount of information, he produces an appropriate.</p>
        </div>
    </div> */}

    <div className="team__second-section">
        <div className="team__second-content">
            <h3 className="team__second-section-heading">
                Executive Team
            </h3>
            <p className="team__second-section-text">
                Our executive team draws on decades of experience across multiple successful technology startups and helps guide the company towards its strategic goals.
            </p>
        </div>
    </div>

    <div className="team__third-section container-fluid">
        <div className="row justify-content-center founders">
            <div className="col-sm founder-card">
                <img className="founder-image" src={placeHolder}/>
                <p className="founder-name">First Name</p>
                <p className="founder-desi">FOUNDER</p>
                <p className="founder-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className="founder-logos">
                    <a><i className="fa fa-twitter fa-lg"></i></a>
                    <a><i className="fa fa-linkedin fa-lg"></i></a>
                    <a><i className="fa fa-instagram fa-lg"></i></a>
                    <a><i className="fa fa-facebook fa-lg"></i></a>
                </div>
            </div>
            <div className="col-sm founder-card">
                <img className="founder-image" src={placeHolder}/>
                <p className="founder-name">First Name</p>
                <p className="founder-desi">FOUNDER</p>
                <p className="founder-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className="founder-logos">
                    <a><i className="fa fa-twitter fa-lg"></i></a>
                    <a><i className="fa fa-linkedin fa-lg"></i></a>
                    <a><i className="fa fa-instagram fa-lg"></i></a>
                    <a><i className="fa fa-facebook fa-lg"></i></a>
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
                                <p className="footer-bold">Privacy Policy</p>
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

export default Team;