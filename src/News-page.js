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
<div className="news__titleDiv">
<p className="news__heading">News & Updates</p>
<p className="news__text">
Our executive team draws on decades of experience 
across multiple successful technology startups and helps guide the company towards its strategic goals.

</p>
</div>
  <div className="news__overall-div">
    <div className="news__location-swiper swiper-container">
        <div className="swiper-wrapper">
            <div className="news__location__swiper-slide swiper-slide">
                <img className="news__location___slide-image" src={newsHolder}/>
                <div id="chennai" className="news__location__slide-content">
                <p className="news__location__slide-title">Space tech startup Agnikul raises Rs 23.4 cr in pre-series A round led by pi Ventures
</p>
                <p className="news__location__slide-text">The Chennai-based startup manufactures 3D printed single-piece rocket engines.</p>
                <a className="news__location__slide-link">READ ARTICLE</a>
            </div>
            </div>
            <div className="news__location__swiper-slide swiper-slide">
                <img className="news__location___slide-image" src={newsHolder}/>
                <div id="chennai" className="news__location__slide-content">
                <p className="news__location__slide-title">Making the satellites generally invisible
</p>
<p className="news__location__slide-text">The first unit is flying on the next launch, and by flight 9 
                in June all future Starlink satellites will have sun visors.</p>
                <a className="news__location__slide-link">READ ARTICLE</a>
            </div>
            </div>
            <div className="news__location__swiper-slide swiper-slide">
                <img className="news__location___slide-image" src={newsHolder}/>
                <div id="chennai" className="news__location__slide-content">
                <p className="news__location__slide-title">Minimizing Starlink's impact on astronomy
</p>
<p className="news__location__slide-text">The first unit is flying on the next launch, and by flight 9 
                in June all future Starlink satellites will have sun visors.</p>
                <a className="news__location__slide-link">READ ARTICLE</a>
            </div>
            </div>
            <div className="news__location__swiper-slide swiper-slide">
                <img className="news__location___slide-image" src={newsHolder}/>
                <div id="chennai" className="news__location__slide-content">
                <p className="news__location__slide-title">Microsoft is closing all of its stores
</p>
<p className="news__location__slide-text">The first unit is flying on the next launch, and by flight 9 
                in June all future Starlink satellites will have sun visors.</p>
                <a className="news__location__slide-link">READ ARTICLE</a>
            </div>
            </div>
            <div className="news__location__swiper-slide swiper-slide">
                <img className="news__location___slide-image" src={newsHolder}/>
                <div id="chennai" className="news__location__slide-content">
                <p className="news__location__slide-title">Microsoft is closing all of its stores
</p>
<p className="news__location__slide-text">The first unit is flying on the next launch, and by flight 9 
                in June all future Starlink satellites will have sun visors.</p>
                <a className="news__location__slide-link">READ ARTICLE</a>
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

export default News;