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
            <p className="about__banner-first-line">Who <span>we</span> are ? </p>
            <p className="about__banner-text">AgniKul is a derivative of the Sanskrit word "gurukul" and can be interpreted to mean "a place where
                people learn to use fire</p>
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
                            <p>2010</p>
                        </div>
                        <p className="slide-head">NCCRD</p>
                        <p className="slide-text">
                            The National Centre for Combustion Research and Development (NCCRD), scheduled to be
                            inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
                            Dept. of Science and Technology (DST), Government of India. A similar centre has also been
                            established at Indian Institute of Science, Bangalore (IISc).

                            Note from designer : We can Accomodate Darpa Qualification and Airbus Accelerator according
                            to timeline as we scroll through this page
                        </p>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="slide-content">
                        <div className="slide-year">
                            <p>2010</p>
                        </div>
                        <p className="slide-head">NCCRD</p>
                        <p className="slide-text">
                            The National Centre for Combustion Research and Development (NCCRD), scheduled to be
                            inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
                            Dept. of Science and Technology (DST), Government of India. A similar centre has also been
                            established at Indian Institute of Science, Bangalore (IISc).

                            Note from designer : We can Accomodate Darpa Qualification and Airbus Accelerator according
                            to timeline as we scroll through this page
                        </p>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="slide-content">
                        <div className="slide-year">
                            <p>2010</p>
                        </div>
                        <p className="slide-head">NCCRD</p>
                        <p className="slide-text">
                            The National Centre for Combustion Research and Development (NCCRD), scheduled to be
                            inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
                            Dept. of Science and Technology (DST), Government of India. A similar centre has also been
                            established at Indian Institute of Science, Bangalore (IISc).

                            Note from designer : We can Accomodate Darpa Qualification and Airbus Accelerator according
                            to timeline as we scroll through this page
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img className="centered-image" src={centeredimage}/>
    
    <div className="about__third-section">
        <p className="about__section-head">Advisors of Agnikul</p>

    <div className="advisors">
        <div className="advisor-swiper swiper-container">

            <div className="swiper-wrapper">
                <div className="advisor__swiper-slide swiper-slide">
                    <div className="advisor__slide-content">
                        <img className="advisor__slide-img" src={homepage}/>
                        <p className="advisor__name">Initial. Name</p>  
                        <p className="advisor__award">Padma Bushan</p>
                        <p className="advisor__desi">Honarary Professor - India Space Research Organization</p> 
                     </div>
                </div>
                <div className="advisor__swiper-slide swiper-slide">
                    <div className="advisor__slide-content">
                        <img className="advisor__slide-img" src={homepage}/>    
                        <p className="advisor__name">Initial. Name</p>  
                        <p className="advisor__award">Padma Bushan</p>
                        <p className="advisor__desi">Senior Research fellow, EEE, Nanyang Tech University, Singapore & Professor ( Retd.)</p>
                     </div>
                </div>
                <div className="advisor__swiper-slide swiper-slide">
                    <div className="advisor__slide-content">
                        <img className="advisor__slide-img" src={homepage}/>  
                        <p className="advisor__name">Initial. Name</p>  
                        <p className="advisor__award">Padma Bushan</p>
                        <p className="advisor__desi">Honarary Professor - India Space Research Organization</p> 
                     </div>
                </div>
                <div className="advisor__swiper-slide swiper-slide">
                    <div className="advisor__slide-content">
                        <img className="advisor__slide-img" src={homepage}/>
                        <p className="advisor__name">Initial. Name</p>  
                        <p className="advisor__award">Padma Bushan</p>
                        <p className="advisor__desi">Honarary Professor - India Space Research Organization</p> 
                     </div>
                </div>
            </div>
            <div className="advisor__swiper-pagination swiper-pagination"></div>
            <div class="advisor__swiper-button-prev swiper-button-prev"></div>
            <div class="advisor__swiper-button-next swiper-button-next"></div>
        </div>
    </div>
    </div>

    <div className="IntermediateBanner">
        <img className="intermediate-img" src={worldmap}/>
        <div className="intermediate-banner-content">
            <p className="intermediate-banner-title">Bringing space within everyone's reach </p>
            <Link className="intermediate-banner-link" to="/products">GO TO PRODUCTS</Link>          
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
                        <p className="partner__name">Initial. Name</p>  
                        <p className="partner__award">Padma Bushan</p>
                        <p className="partner__desi">Honarary Professor - India Space Research Organization</p> 
                    </div>
                </div>
                <div className="partner__swiper-slide swiper-slide">
                    <div className="partner__slide-content">
                        <img className="partner__slide-img" src={homepage}/>    
                        <p className="partner__name">Initial. Name</p>  
                        <p className="partner__award">Padma Bushan</p>
                        <p className="partner__desi">Senior Research fellow, EEE, Nanyang Tech University, Singapore & Professor ( Retd.)</p> 
                    </div>
                </div>
                <div className="partner__swiper-slide swiper-slide">
                    <div className="partner__slide-content">
                        <img className="partner__slide-img" src={homepage}/>  
                        <p className="partner__name">Initial. Name</p>  
                        <p className="partner__award">Padma Bushan</p>
                        <p className="partner__desi">Honarary Professor - India Space Research Organization</p> 
                    </div>
                </div>
                <div className="partner__swiper-slide swiper-slide">
                    <div className="partner__slide-content">
                        <img className="partner__slide-img" src={homepage}/>  
                        <p className="partner__name">Initial. Name</p>  
                        <p className="partner__award">Padma Bushan</p>
                        <p className="partner__desi">Honarary Professor - India Space Research Organization</p> 
                    </div>
                </div>
            </div>
            <div className="partner__swiper-pagination swiper-pagination"></div>
            <div class="partner__swiper-button-prev swiper-button-prev"></div>
            <div class="partner__swiper-button-next swiper-button-next"></div>
        </div>
    </div>

    <div className="about__fifth-section">
        <p className="about__fifth-section-title">Why businesses love our solution</p>
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