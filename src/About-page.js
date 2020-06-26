import React from 'react';
import Init from './js/about';
import "./css/about.css";
import "swiper/css/swiper.min.css";
import log from "./images/logo.png";
import centeredimage from "./images/group-9.png";
import homepage from "./images/homepage.jpeg";
import spacex from "./images/spacex-logo.png";
import navBar from "./js/common";
import worldmap from "./images/bitmap.png";


function Home(){

    Init();

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
    
   
    <div class="AboutBanner">
        <div class="banner-content">
            <p class="banner-first-line">Who <span>we</span> are ? </p>
            <p class="banner-text">AgniKul is a derivative of the Sanskrit word "gurukul" and can be interpreted to mean "a place where
                people learn to use fire</p>
        </div>
    </div>

    <div class="Timeline">
        <div class="timeline-swiper  swiper-container">
            <div class="timeline__swiper-pagination  swiper-pagination"></div>
            <div class="vertical-line"></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="slide-content">
                        <div class="slide-year">
                            <p>2010</p>
                        </div>
                        <p class="slide-head">NCCRD</p>
                        <p class="slide-text">
                            The National Centre for Combustion Research and Development (NCCRD), scheduled to be
                            inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
                            Dept. of Science and Technology (DST), Government of India. A similar centre has also been
                            established at Indian Institute of Science, Bangalore (IISc).

                            Note from designer : We can Accomodate Darpa Qualification and Airbus Accelerator according
                            to timeline as we scroll through this page
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide-content">
                        <div class="slide-year">
                            <p>2010</p>
                        </div>
                        <p class="slide-head">NCCRD</p>
                        <p class="slide-text">
                            The National Centre for Combustion Research and Development (NCCRD), scheduled to be
                            inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
                            Dept. of Science and Technology (DST), Government of India. A similar centre has also been
                            established at Indian Institute of Science, Bangalore (IISc).

                            Note from designer : We can Accomodate Darpa Qualification and Airbus Accelerator according
                            to timeline as we scroll through this page
                        </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide-content">
                        <div class="slide-year">
                            <p>2010</p>
                        </div>
                        <p class="slide-head">NCCRD</p>
                        <p class="slide-text">
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
    <img class="centered-image" src={centeredimage}/>
    
    <div class="third-section">
        <div class="curved-line"></div>
        <p class="section-head">Advisors of Agnikul</p>
    </div>

    <div class="advisors">
        <div class="advisor-swiper swiper-container">

            <div class="swiper-wrapper">
                <div class="advisor__swiper-slide swiper-slide">
                    <div class="advisor__slide-content">
                        <img class="advisor__slide-img" src={homepage}/>
                        <p class="advisor__name">Initial. Name</p>  
                        <p class="advisor__award">Padma Bushan</p>
                        <p class="advisor__desi">Honarary Professor - India Space Research Organization</p> 
                     </div>
                </div>
                <div class="advisor__swiper-slide swiper-slide">
                    <div class="advisor__slide-content">
                        <img class="advisor__slide-img" src={homepage}/>    
                        <p class="advisor__name">Initial. Name</p>  
                        <p class="advisor__award">Padma Bushan</p>
                        <p class="advisor__desi">Senior Research fellow, EEE, Nanyang Tech University, Singapore & Professor ( Retd.)</p>
                     </div>
                </div>
                <div class="advisor__swiper-slide swiper-slide">
                    <div class="advisor__slide-content">
                        <img class="advisor__slide-img" src={homepage}/>  
                        <p class="advisor__name">Initial. Name</p>  
                        <p class="advisor__award">Padma Bushan</p>
                        <p class="advisor__desi">Honarary Professor - India Space Research Organization</p> 
                     </div>
                </div>
                <div class="advisor__swiper-slide swiper-slide">
                    <div class="advisor__slide-content">
                        <img class="advisor__slide-img" src={homepage}/>
                        <p class="advisor__name">Initial. Name</p>  
                        <p class="advisor__award">Padma Bushan</p>
                        <p class="advisor__desi">Honarary Professor - India Space Research Organization</p> 
                     </div>
                </div>
            </div>
            <div class="advisor__swiper-pagination swiper-pagination"></div>
        </div>
    </div>

    <div class="IntermediateBanner">
        <img class="intermediate-img" src={worldmap}/>
        <div class="intermediate-banner-content">
            <p class="intermediate-banner-title">Bringing space withing <br/> everyone's reach </p>
            <a class="intermediate-banner-link">GO TO PRODUCTS</a>          
        </div>
    </div>

    <div class="fourth-section">
        <p class="section-head">Partners of Agnikul</p>
    </div>

    <div class="partners">
        <div class="partner-swiper swiper-container">

            <div class="swiper-wrapper">
                <div class="partner__swiper-slide swiper-slide">
                    <div class="partner__slide-content">
                        <img class="partner__slide-img" src={homepage}/>
                        <p class="partner__name">Initial. Name</p>  
                        <p class="partner__award">Padma Bushan</p>
                        <p class="partner__desi">Honarary Professor - India Space Research Organization</p> 
                    </div>
                </div>
                <div class="partner__swiper-slide swiper-slide">
                    <div class="partner__slide-content">
                        <img class="partner__slide-img" src={homepage}/>    
                        <p class="partner__name">Initial. Name</p>  
                        <p class="partner__award">Padma Bushan</p>
                        <p class="partner__desi">Senior Research fellow, EEE, Nanyang Tech University, Singapore & Professor ( Retd.)</p> 
                    </div>
                </div>
                <div class="partner__swiper-slide swiper-slide">
                    <div class="partner__slide-content">
                        <img class="partner__slide-img" src={homepage}/>  
                        <p class="partner__name">Initial. Name</p>  
                        <p class="partner__award">Padma Bushan</p>
                        <p class="partner__desi">Honarary Professor - India Space Research Organization</p> 
                    </div>
                </div>
                <div class="partner__swiper-slide swiper-slide">
                    <div class="partner__slide-content">
                        <img class="partner__slide-img" src={homepage}/>  
                        <p class="partner__name">Initial. Name</p>  
                        <p class="partner__award">Padma Bushan</p>
                        <p class="partner__desi">Honarary Professor - India Space Research Organization</p> 
                    </div>
                </div>
            </div>
            <div class="partner__swiper-pagination swiper-pagination"></div>

        </div>
    </div>

    <div class="fifth-section">
        <p class="fifth-section-title">Why businesses love our solution</p>
    </div>

    <div class="businesses">
        <div class="business-swiper swiper-container">
            <div class="swiper-wrapper">
                <div class="business__swiper-slide swiper-slide">
                    <div class="business__slide-content">
                        <p class="business__slide-quote">"With Agnikul, goal is to make space affordable for everyone in India. If you are excited about our journey,”</p>  
                        <p class="business__slide-author"><b>Elon Musk</b> Chief Executive Officer</p> 
                        <img class="business__slide-img" src={spacex}/>
                    </div>
                </div>
                <div class="business__swiper-slide swiper-slide">
                    <div class="business__slide-content">
                        <p class="business__slide-quote">"With Agnikul, goal is to make space affordable for everyone in India. If you are excited about our journey,”</p>  
                        <p class="business__slide-author"><b>Elon Musk</b> Chief Executive Officer</p> 
                        <img class="business__slide-img" src={spacex}/>
                    </div>
                </div>
                <div class="business__swiper-slide swiper-slide">
                    <div class="business__slide-content">
                        <p class="business__slide-quote">"With Agnikul, goal is to make space affordable for everyone in India. If you are excited about our journey,”</p>  
                        <p class="business__slide-author"><b>Elon Musk</b> Chief Executive Officer</p> 
                        <img class="business__slide-img" src={spacex}/>
                    </div>
                </div>
                <div class="business__swiper-slide swiper-slide">
                    <div class="business__slide-content">
                        <p class="business__slide-quote">"With Agnikul, goal is to make space affordable for everyone in India. If you are excited about our journey,”</p>  
                        <p class="business__slide-author"><b>Elon Musk</b> Chief Executive Officer</p> 
                        <img class="business__slide-img" src={spacex}/>
                    </div>
                </div>  
            </div>
                <div class="business__swiper-pagination swiper-pagination"></div>              
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

export default Home;