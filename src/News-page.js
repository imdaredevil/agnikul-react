import React from 'react';
import "./css/news.css";
import navBar from './js/common';
import Init from './js/news';
import log from "./images/logo.png";
import "swiper/css/swiper.min.css";
import newsHolder from "./images/news-placeholder.jpg";

import { Link } from 'react-router-dom';


function News(){

    Init();

    return (
        <div className="body">
      <div className="navBar">
        <div className="topnav row" id="myTopnav">
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
                <Link to="/team" className="nav-itemc nav-linkc">
                    Meet the Team
                </Link>
            </div>
            <div className="column">
                <Link to="/career" className="nav-itemc nav-linkc">
                    Career
                </Link>
            </div>
            <div className="column-md">
                <Link to="/news" className="nav-itemc nav-linkc active">
                    News
                </Link>
            </div>
            <div id="navButtonDiv" className="column-lg">
                <button  className="nav-itemc nav-buttonc">
                   <Link to="/book"> BUILD YOUR LAUNCH</Link>
                </button>
            </div>
            <div className="col-sm iconc">
                <a onClick={navBar}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </div>
     
  <div className="news__overall-div">
    <div className="news__location-swiper swiper-container">
        <div className="swiper-wrapper">
            <div className="news__location__swiper-slide swiper-slide">
                <img className="news__location___slide-image" src={newsHolder}/>
                <div id="chennai" className="news__location__slide-content">
                <p className="news__location__slide-title">Microsoft is closing all of its stores
</p>
                <p className="news__location__slide-paper">Indian Express</p>
            </div>
            </div>
            <div className="news__location__swiper-slide swiper-slide">
                <img className="news__location___slide-image" src={newsHolder}/>
                <div id="chennai" className="news__location__slide-content">
                <p className="news__location__slide-title">Microsoft is closing all of its stores
</p>
                <p className="news__location__slide-paper">NewYork Times</p>
            </div>
            </div>
            <div className="news__location__swiper-slide swiper-slide">
                <img className="news__location___slide-image" src={newsHolder}/>
                <div id="chennai" className="news__location__slide-content">
                <p className="news__location__slide-title">Microsoft is closing all of its stores
</p>
                <p className="news__location__slide-paper">Times of India</p>
            </div>
            </div>
            <div className="news__location__swiper-slide swiper-slide">
                <img className="news__location___slide-image" src={newsHolder}/>
                <div id="chennai" className="news__location__slide-content">
                <p className="news__location__slide-title">Microsoft is closing all of its stores
</p>
                <p className="news__location__slide-paper">The Hindu</p>
            </div>
            </div>
            <div className="news__location__swiper-slide swiper-slide">
                <img className="news__location___slide-image" src={newsHolder}/>
                <div id="chennai" className="news__location__slide-content">
                <p className="news__location__slide-title">Microsoft is closing all of its stores
</p>
                <p className="news__location__slide-paper">The News Minute</p>
            </div>
            </div>
        </div>
        <div className="news__location__swiper-pagination swiper-pagination"></div>
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

export default News;