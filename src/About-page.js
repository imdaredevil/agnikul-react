import React from 'react';
import "./css/about.css";
import Init from './js/about';
import "swiper/css/swiper.min.css";
import log from "./images/logo.png";
import centeredimage from "./images/group-9.png";
import homepage from "./images/homepage.jpeg";
import spacex from "./images/spacex-logo.png";
import navBar from "./js/common";
import worldmap from "./images/bitmap.png";
import { Link } from 'react-router-dom';


function About(){

    Init();

    return (
        <div className="body">
     <div className="navBar">
        <div className="topnav row justify-content-around align-items-baseline" id="myTopnav">
            <div className="column-lg nav-brandc">
                <Link  to="/"><img className="logo" src={log}/></Link>
            </div>
            <div className="column">
                <Link to="/about" className="nav-itemc nav-linkc active">
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
          
   
    <div className="about__AboutBanner">
        <div className="about__banner-content">
            <p className="about__banner-first-line">Who are we? </p>
            <p className="about__banner-text">“Agnikul” is a derivative of the Sanskrit word - “Gurukul” and it
could be interpreted to mean “a place where people learn to
use fire”.
<br>
</br>
We are a group of enthusiasts, rocket scientists, engineers,
programmers, lawyers and more - all of us just love enabling
space access to everyone!
</p>
        </div>
    </div>

    <div className="Timeline">
        <div className="timeline-swiper  swiper-container">
            <div className="timeline__swiper-pagination  swiper-pagination"></div>
            <div className="vertical-line"></div>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slide-content">
                        <div className="slide-year">
                            <p>2016</p>
                        </div>
                        {/* <p className="slide-head">NCCRD</p> */}
                        <p className="slide-text">
                        Inception ! - This was when Agnikul was an idea on paper and in dreams
                        </p>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="slide-content">
                        <div className="slide-year">
                            <p>2017</p>
                        </div>
                        {/* <p className="slide-head">NCCRD</p> */}
                        <p className="slide-text">
                        Formation! - Agnikul Cosmos was formally incorporated as a
company in Chennai, India.
                        </p>
                        <p className="slide-text">
                        Agnikul moved into the National Center for Combustion R&D at IIT Madras, Chennai, India.
                        </p>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="slide-content">
                        <div className="slide-year">
                            <p>2018</p>
                        </div>
                        {/* <p className="slide-head">NCCRD</p> */}
                        <p className="slide-text">
                        Incubation & Acceleration - Agnikul incubated at IIT Madras. Agnikul became a part of the Airbus Accelerator
                        </p>
                        <p className="slide-text">
                        First series of hot firings - Agnikul fired it’s first set of igniters
and single injector element based thrusters.
                        </p>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="slide-content">
                        <div className="slide-year">
                            <p>2019</p>
                        </div>
                        {/* <p className="slide-head">NCCRD</p> */}
                        <p className="slide-text">
                        Cash Infusion - Agnikul raised its seed round of funding from Speciale Invest
                        </p>
                        <p className="slide-text">
                        Agnikul grew to have a presence in Kerala as well and became
a part of the Kerala Startup mission startup community.
                        </p>
                        <p className="slide-text">
                        Agnikul realized it’s single piece, fully 3d printed, higher stage engine.
                        </p>
                        <p className="slide-text">
                        Agnikul realized it’s single piece, fully 3d printed, higher stage engine.
                        </p>
                        <p className="slide-text">
                        Commercialization - Agnikul started signing agreements with potential customers!
                        </p>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="slide-content">
                        <div className="slide-year">
                            <p>2020</p>
                        </div>
                        {/* <p className="slide-head">NCCRD</p> */}
                        <p className="slide-text">
                        More cash infusion - Agnikul raised its pre-series A round from
highly reputed institutional investors.
                        </p>
                        <p className="slide-text">
                        More commercialization - Agreements with Launchpads, more
customers and significant vendor-partners.

                        </p>
                        <p className="slide-text">
                        A lot more to come .. watch for updates
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <img className="centered-image" src={centeredimage}/>
    
    <div className="about__third-section">
        <p className="about__section-head">Advisors in Agnikul</p>

    <div className="advisors">
        <div className="advisor-swiper swiper-container">

            <div className="swiper-wrapper">
                <div className="advisor__swiper-slide swiper-slide">
                    <div className="advisor__slide-content">
                        <img className="advisor__slide-img" src={homepage}/>
                        <p className="advisor__name">SR Chakravarthy</p>  
                        <p className="advisor__award">Professor & Head - Combustion R&D Center, IIT Madras
</p>
                        <p className="advisor__desi">An accomplished rocket scientist, combustion expert with over
25 years of experience, cofounder of 3 IIT Madras startups.</p> 
                     </div>
                </div>
                <div className="advisor__swiper-slide swiper-slide">
                    <div className="advisor__slide-content">
                        <img className="advisor__slide-img" src={homepage}/>    
                        <p className="advisor__name">RV Perumal, Padma Bhushan</p>  
                        <p className="advisor__award">(Retd.) GSLV Project Director & ISRO Veteran</p>
                        <p className="advisor__desi">An accomplished rocket scientist and the Project Director of
India’s first GSLV rocket. Over 40 years of experience in rocket
building.
</p>
                     </div>
                </div>
                <div className="advisor__swiper-slide swiper-slide">
                    <div className="advisor__slide-content">
                        <img className="advisor__slide-img" src={homepage}/>  
                        <p className="advisor__name">PV Ramakrishnan</p>  
                        <p className="advisor__award">Prof. (Emeritus) - Electronics and Communication Engineering.</p>
                        <p className="advisor__desi">Project Director of ANUSAT - 1. Over 35 years of experience in
electronics and avionics design.</p> 
                     </div>
                </div>
                <div className="advisor__swiper-slide swiper-slide">
                    <div className="advisor__slide-content">
                        <img className="advisor__slide-img" src={homepage}/>
                        <p className="advisor__name">N Shekar</p>  
                        <p className="advisor__award">Head of Aerospace Industry Development Association of Tamil
Nadu, (Retd.) MD CDG - Boeing, India</p>
                        <p className="advisor__desi">Accomplished aerospace industry veteran with over 40 years of
experience in building and scaling industry products.</p> 
                     </div>
                </div>
            </div>
            <div className="advisor__swiper-pagination swiper-pagination"></div>
            <div className="advisor__swiper-button-prev swiper-button-prev"></div>
            <div className="advisor__swiper-button-next swiper-button-next"></div>
        </div>
    </div>
    </div>

    <div className="IntermediateBanner">
        <img className="intermediate-img" src={worldmap}/>
        <div className="intermediate-banner-content">
            <p className="intermediate-banner-title">Our story wouldn’t have started and isn’t complete without our
academic partners.
</p>
            {/* <Link className="intermediate-banner-link" to="/products">GO TO PRODUCTS</Link>           */}
        </div>
    </div>

    <div className="about__fourth-section">
        <p className="about__section-head">Partners of Agnikul</p>
    </div>

    <div className="partners">
        <div className="partner-swiper swiper-container">

            <div className="swiper-wrapper">
                <div className="partner__swiper-slide swiper-slide">
                    <div className="partner__slide-content">
                        <img className="partner__slide-img" src={homepage}/>
                        <p className="partner__name">IIT Madras</p>  
                        <p className="partner__award">Padma Bushan</p>
                        <p className="partner__desi">Honarary Professor - India Space Research Organization</p> 
                    </div>
                </div>
                <div className="partner__swiper-slide swiper-slide">
                    <div className="partner__slide-content">
                        <img className="partner__slide-img" src={homepage}/>    
                        <p className="partner__name">College Of Engineering, Guindy, Anna University</p>  
                        <p className="partner__award">Padma Bushan</p>
                        <p className="partner__desi">Senior Research fellow, EEE, Nanyang Tech University, Singapore & Professor ( Retd.)</p> 
                    </div>
                </div>
                <div className="partner__swiper-slide swiper-slide">
                    <div className="partner__slide-content">
                        <img className="partner__slide-img" src={homepage}/>  
                        <p className="partner__name">IIM Ahmedabad’s CIIE</p>  
                        <p className="partner__award">Padma Bushan</p>
                        <p className="partner__desi">Honarary Professor - India Space Research Organization</p> 
                    </div>
                </div>
            </div>
            <div className="partner__swiper-pagination swiper-pagination"></div>
            <div className="partner__swiper-button-prev swiper-button-prev"></div>
            <div className="partner__swiper-button-next swiper-button-next"></div>
        </div>
    </div>

    <div className="about__fifth-section">
        <p className="about__fifth-section-title">Why our partners like us</p>
    </div>

    <div className="businesses">
        <div className="business-swiper swiper-container">
            <div className="swiper-wrapper">
                <div className="business__swiper-slide swiper-slide">
                    <div className="business__slide-content">
                        <p className="business__slide-quote">"With Agnikul, goal is to make space affordable for everyone in India. If you are excited about our journey,”</p>  
                        <p className="business__slide-author"><b>Elon Musk</b> Chief Executive Officer</p> 
                        <img className="business__slide-img" src={spacex}/>
                    </div>
                </div>
                <div className="business__swiper-slide swiper-slide">
                    <div className="business__slide-content">
                        <p className="business__slide-quote">"With Agnikul, goal is to make space affordable for everyone in India. If you are excited about our journey,”</p>  
                        <p className="business__slide-author"><b>Elon Musk</b> Chief Executive Officer</p> 
                        <img className="business__slide-img" src={spacex}/>
                    </div>
                </div>
                <div className="business__swiper-slide swiper-slide">
                    <div className="business__slide-content">
                        <p className="business__slide-quote">"With Agnikul, goal is to make space affordable for everyone in India. If you are excited about our journey,”</p>  
                        <p className="business__slide-author"><b>Elon Musk</b> Chief Executive Officer</p> 
                        <img className="business__slide-img" src={spacex}/>
                    </div>
                </div>
                <div className="business__swiper-slide swiper-slide">
                    <div className="business__slide-content">
                        <p className="business__slide-quote">"With Agnikul, goal is to make space affordable for everyone in India. If you are excited about our journey,”</p>  
                        <p className="business__slide-author"><b>Elon Musk</b> Chief Executive Officer</p> 
                        <img className="business__slide-img" src={spacex}/>
                    </div>
                </div>  
                <div className="business__swiper-slide swiper-slide">
                    <div className="business__slide-content">
                        <p className="business__slide-quote">"With Agnikul, goal is to make space affordable for everyone in India. If you are excited about our journey,”</p>  
                        <p className="business__slide-author"><b>Elon Musk</b> Chief Executive Officer</p> 
                        <img className="business__slide-img" src={spacex}/>
                    </div>
                </div>  
                <div className="business__swiper-slide swiper-slide">
                    <div className="business__slide-content">
                        <p className="business__slide-quote">"With Agnikul, goal is to make space affordable for everyone in India. If you are excited about our journey,”</p>  
                        <p className="business__slide-author"><b>Elon Musk</b> Chief Executive Officer</p> 
                        <img className="business__slide-img" src={spacex}/>
                    </div>
                </div>  
            </div>
                <div className="business__swiper-pagination swiper-pagination"></div>              
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

export default About;