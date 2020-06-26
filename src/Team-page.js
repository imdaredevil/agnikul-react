import React from 'react';
import "./css/team.css";
import log from "./images/logo.png";
import  navBar from "./js/common";
import placeHolder from "./images/homepage.jpeg";



function Team(){


    return (
        <div class="body">
            <div class="navBar">
        <div class="topnav row" id="myTopnav">
            <div class="column-lg nav-brandc">
                <img class="logo" src={log}/>
            </div>
            <div class="column">
                <a href="#" class="nav-itemc nav-linkc">
                    About
                </a>
            </div>
            <div class="column">
                <a href="/" class="nav-itemc nav-linkc">
                    Products
                </a>
            </div>
            <div class="column-md">
                <a href="/" class="nav-itemc nav-linkc">
                    Launch Sites
                </a>
            </div>
            <div class="column-md">
                <a href="/" class="nav-itemc nav-linkc">
                    Meet the Team
                </a>
            </div>
            <div class="column">
                <a href="/" class="nav-itemc nav-linkc">
                    Career
                </a>
            </div>
            <div class="column-md">
                <a href="/" class="nav-itemc nav-linkc">
                    Contact Us
                </a>
            </div>
            <div id="navButtonDiv" class="column-lg">
                <button href="/" class="nav-itemc nav-buttonc">
                    BUILD YOUR LAUNCH
                </button>
            </div>
            <div class="col-sm iconc">
                <a onClick={navBar}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </div>
    
    <div class="TeamBanner">
        <div class="banner-content">
            <p class="banner-first-line">Our Team</p>
            <p class="banner-text">Pavel is a writer and researcher who studied digital humanities and new media. 
                Being addicted to large amount of information, he produces an appropriate.</p>
        </div>
    </div>

    <div class="second-section">
        <div class="second-content">
            <h3 class="second-section-heading">
                Executive Team
            </h3>
            <p class="second-section-text">
                Our executive team draws on decades of experience across multiple successful technology startups and helps guide the company towards its strategic goals.
            </p>
        </div>
    </div>

    <div class="third-section container-fluid">
        <div class="row justify-content-center founders">
            <div class="col-sm founder-card">
                <img class="founder-image" src={placeHolder}/>
                <p class="founder-name">First Name</p>
                <p class="founder-desi">FOUNDER</p>
                <p class="founder-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div class="founder-logos">
                    <a><i class="fa fa-twitter fa-lg"></i></a>
                    <a><i class="fa fa-linkedin fa-lg"></i></a>
                    <a><i class="fa fa-instagram fa-lg"></i></a>
                    <a><i class="fa fa-facebook fa-lg"></i></a>
                </div>
            </div>
            <div class="col-sm founder-card">
                <img class="founder-image" src={placeHolder}/>
                <p class="founder-name">First Name</p>
                <p class="founder-desi">FOUNDER</p>
                <p class="founder-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div class="founder-logos">
                    <a><i class="fa fa-twitter fa-lg"></i></a>
                    <a><i class="fa fa-linkedin fa-lg"></i></a>
                    <a><i class="fa fa-instagram fa-lg"></i></a>
                    <a><i class="fa fa-facebook fa-lg"></i></a>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="first-row"></div>
        <div class="container-fluid">
            <div class="row border-row">
                <div class="col-sm">
                    <p class="footer-normal">Phone</p>
                    <p class="footer-bolder">+32 50 31 28 32</p>
                </div>
                <div class="col-sm">
                    <p class="footer-normal">Address</p>
                    <p class="footer-bolder">491 Merlin Crest Suite 963</p>
                </div>
                <div class="col-sm">

                </div>
                <div class="col-sm">

                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <p class="footer-bold">Services</p>
                    <p class="footer-normal">Strategy Design</p>
                    <p class="footer-normal">Product Design</p>
                    <p class="footer-normal">Content Strategy</p>
                    <p class="footer-normal">Brand Strategy</p>
                    <p class="footer-normal">Development</p>
                </div>
                <div class="col-sm">
                    <p class="footer-bold">Help and Advice</p>
                    <p class="footer-normal">How it Works</p>
                    <p class="footer-normal">Contact Support</p>
                    <p class="footer-normal">Privacy Policy</p>
                    <p class="footer-normal">FAQ</p>
                </div>
                <div class="col-sm border-column">
                    <p class="footer-bold">Company</p>
                    <p class="footer-normal">About</p>
                    <p class="footer-normal">Blog</p>
                    <p class="footer-normal">Contact</p>
                    <p class="footer-normal">Jobs</p>
                </div>
                <div class="col-sm">
                    <p class="footer-bold">Get in Touch</p>
                    <p class="footer-normal">Feel free to get in touch with us via email</p>
                    <p class="footer-email">info.agnikul@gmail.com</p>
                    <div class="footer-social-logos">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    );

}

export default Team;