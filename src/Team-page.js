import React from 'react';
import "./css/team.css";
import log from "./images/logo.png";
import  navBar from "./js/common";
import placeHolder from "./images/homepage.jpeg";
import $ from "jquery";


import { Link } from 'react-router-dom';

function Team(){

    
    $(document).ready(function(){
        $("body").removeClass("products");
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
            
    <div className="team__TeamBanner">
        <div className="team__banner-content">
            <p className="team__banner-first-line">Our Team</p>
            <p className="team__banner-text">Pavel is a writer and researcher who studied digital humanities and new media. 
                Being addicted to large amount of information, he produces an appropriate.</p>
        </div>
    </div>

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
                    <p className="footer-normal">Phone</p>
                    <p className="footer-bolder">+32 50 31 28 32</p>
                </div>
                <div className="col-sm">
                    <p className="footer-normal">Address</p>
                    <p className="footer-bolder">491 Merlin Crest Suite 963</p>
                </div>
                <div className="col-sm">

                </div>
                <div className="col-sm">

                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <p className="footer-bold">Services</p>
                    <p className="footer-normal">Strategy Design</p>
                    <p className="footer-normal">Product Design</p>
                    <p className="footer-normal">Content Strategy</p>
                    <p className="footer-normal">Brand Strategy</p>
                    <p className="footer-normal">Development</p>
                </div>
                <div className="col-sm">
                    <p className="footer-bold">Help and Advice</p>
                    <p className="footer-normal">How it Works</p>
                    <p className="footer-normal">Contact Support</p>
                    <p className="footer-normal">Privacy Policy</p>
                    <p className="footer-normal">FAQ</p>
                </div>
                <div className="col-sm border-column">
                    <p className="footer-bold">Company</p>
                    <p className="footer-normal">About</p>
                    <p className="footer-normal">Blog</p>
                    <p className="footer-normal">Contact</p>
                    <p className="footer-normal">Jobs</p>
                </div>
                <div className="col-sm">
                    <p className="footer-bold">Get in Touch</p>
                    <p className="footer-normal">Feel free to get in touch with us via email</p>
                    <p className="footer-email">info.agnikul@gmail.com</p>
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