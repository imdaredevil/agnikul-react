import React from 'react';
import "./css/career.css";
import navBar from './js/common';
import Init from './js/career';
import log from "./images/logo.png";
import "swiper/css/swiper.min.css";

import { Link } from 'react-router-dom';


function Career(){

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
                <Link to="/career" className="nav-itemc nav-linkc active">
                    Career
                </Link>
            </div>
            <div id="navButtonDiv" className="column-lg">
                <button  className="nav-itemc nav-buttonc">
                   <Link to="/book"> BUILD YOUR LAUNCH</Link>
                </button>
            </div>
        </div>
        <div className="iconc">
                <div onClick={navBar}>
                    <i className="fa fa-bars fa-lg"></i>
                </div>
            </div>
    </div>
        
  <div className="career__overall-div">
    <div className="career__location-swiper swiper-container">
        <div className="swiper-wrapper">
            <div className="career__location__swiper-slide swiper-slide">
                <div id="chennai" className="career__location__slide-content active">
                <p className="career__location__slide-number">01</p>
                <p className="career__location__slide-name">Chennai</p>
                <p className="career__location__slide-country">INDIA</p>
            </div>
            </div>
            <div className="career__location__swiper-slide swiper-slide">
                <div id="beijing" className="career__location__slide-content">
                <p className="career__location__slide-number">02</p>
                <p className="career__location__slide-name">Beijing</p>
                <p className="career__location__slide-country">INDIA</p>
            </div>
            </div>
            <div className="career__location__swiper-slide swiper-slide">
                <div id="kolkata" className="career__location__slide-content">
                <p className="career__location__slide-number">03</p>
                <p className="career__location__slide-name">Kolkata</p>
                <p className="career__location__slide-country">INDIA</p>
            </div>
            </div>
            <div className="career__location__swiper-slide swiper-slide">
                <div id="ahmedabad" className="career__location__slide-content">
                <p className="career__location__slide-number">04</p>
                <p className="career__location__slide-name">Ahmedabad</p>
                <p className="career__location__slide-country">INDIA</p>
            </div>
            </div>
            <div className="career__location__swiper-slide swiper-slide">
                <div id="rajastan" className="career__location__slide-content">
                <p className="career__location__slide-number">05</p>
                <p className="career__location__slide-name">Rajastan</p>
                <p className="career__location__slide-country">INDIA</p>
            </div>
            </div>
        </div>
        <div className="career__location__swiper-pagination swiper-pagination"></div>
    </div>
    <div className="career__content active">
        <p className="career__close-icon">X</p>
        <p className="career__heading">Software Development Engineer</p>
        <p className="career__location">Chennai, India</p>
        <p className="career__description">
        The National Centre for Combustion Research and Development (NCCRD), scheduled to be
        inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
        Dept. of Science and Technology (DST), Government of India. A similar centre has also been
    established at Indian Institute of Science, Bangalore (IISc).

 Note from designer : We can Accomodate Darpa Qualification and Airbus Accelerator according
 to timeline as we scroll through this page
        </p>

    </div>

    <div className="career__content">
    <p className="career__close-icon">X</p>
        <p className="career__heading">Software Development Engineer</p>
        <p className="career__location">Beijing, India</p>
        <p className="career__description">
        The National Centre for Combustion Research and Development (NCCRD), scheduled to be
        inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
        Dept. of Science and Technology (DST), Government of India. A similar centre has also been
    established at Indian Institute of Science, Bangalore (IISc).

 Note from designer : We can Accomodate Darpa Qualification and Airbus Accelerator according
 to timeline as we scroll through this page
        </p>

    </div>

    <div className="career__content">
    <p className="career__close-icon">X</p>
        <p className="career__heading">Software Development Engineer</p>
        <p className="career__location">Kolkata, India</p>
        <p className="career__description">
        The National Centre for Combustion Research and Development (NCCRD), scheduled to be
        inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
        Dept. of Science and Technology (DST), Government of India. A similar centre has also been
    established at Indian Institute of Science, Bangalore (IISc).

 Note from designer : We can Accomodate Darpa Qualification and Airbus Accelerator according
 to timeline as we scroll through this page
        </p>

    </div>

    <div className="career__content">
    <p className="career__close-icon">X</p>
        <p className="career__heading">Software Development Engineer</p>
        <p className="career__location">Ahmedabad, India</p>
        <p className="career__description">
        The National Centre for Combustion Research and Development (NCCRD), scheduled to be
        inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
        Dept. of Science and Technology (DST), Government of India. A similar centre has also been
    established at Indian Institute of Science, Bangalore (IISc).

 Note from designer : We can Accomodate Darpa Qualification and Airbus Accelerator according
 to timeline as we scroll through this page
        </p>

    </div>

    <div className="career__content">
    <p className="career__close-icon">X</p>
        <p className="career__heading">Software Development Engineer</p>
        <p className="career__location">Rajastan, India</p>
        <p className="career__description">
        The National Centre for Combustion Research and Development (NCCRD), scheduled to be
        inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
        Dept. of Science and Technology (DST), Government of India. A similar centre has also been
    established at Indian Institute of Science, Bangalore (IISc).

 Note from designer : We can Accomodate Darpa Qualification and Airbus Accelerator according
 to timeline as we scroll through this page
        </p>

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

export default Career;