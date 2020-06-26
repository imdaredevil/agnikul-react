import React from 'react';
import ScrollHover from './js/home';
import "./css/home.css";
import log from "./images/logo.png";
import agnibaan from "./images/Agnibaan.png";
import satelite from "./images/spaceship.png";
import  navBar from "./js/common";
import fingersnap from "./images/finger-snap.png";
import cardback from "./images/api.png";
import spaceshipWhite from "./images/spaceship-copy.png";
import flag from "./images/flag.png";
import orbit from "./images/pennant.png";
import payload from "./images/scale-4.png";



function Home(){

    ScrollHover();

    return (
        <div class="body">
          <div class="navBar">
        <div class="topnav row" id="myTopnav">
            <div class="column-lg nav-brandc">
                <a href="./"><img class="logo" src={log}/></a>
            </div>
            <div class="column">
                <a href="./about" class="nav-itemc nav-linkc">
                    About
                </a>
            </div>
            <div class="column">
                <a href="./products" class="nav-itemc nav-linkc">
                    Products
                </a>
            </div>
            <div class="column-md">
                <a href="./launch-sites" class="nav-itemc nav-linkc">
                    Launch Sites
                </a>
            </div>
            <div class="column-md">
                <a href="./team" class="nav-itemc nav-linkc">
                    Meet the Team
                </a>
            </div>
            <div class="column">
                <a href="./" class="nav-itemc nav-linkc">
                    Career
                </a>
            </div>
            <div class="column-md">
                <a href="./" class="nav-itemc nav-linkc">
                    Contact Us
                </a>
            </div>
            <div id="navButtonDiv" class="column-lg">
                <button  class="nav-itemc nav-buttonc">
                   <a href="./book"> BUILD YOUR LAUNCH</a>
                </button>
            </div>
            <div class="col-sm iconc">
                <a onClick={navBar}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </div>
    
       <div class="HomeBanner">
        <div class="banner-content">
            <i class="fa fa-bars banner-icon"></i>
            <h1 class="banner-first-line">Bringing Space Within</h1>
            <h1 class="banner-second-line">Everyone's Reach</h1>
            <p class="banner-text">
                Getting there shouldn't be the hardest part of<br/>
                being space-faring. So, why not design and build<br/>
                an orbital-class launch vehicle?
            </p>
            <a class="banner-link">Go To Products</a>
        </div>
    </div>

    <div class="second-section">
        <div class="second-content">
            <img src={satelite} class="second-section-icon"/>
            <h3 class="second-section-heading">
                A 2 stage LOX/Kerosene vehicle with a third "baby stage"
            </h3>
            <p class="second-section-text">
                Agnibaan is a launch vehicle capable of carrying up to 100 kg of payload,
                to low Earth orbits up to 700 km with a plug-and-play engine
                configuration launched from a mobile launch vehicle
            </p>
            <p class="second-section-text">
                Engineering Research Board, Dept. of Science and Technology (DST),
                Government of India. A similar centre has also been established at
                Indian Institute of Science, Bangalore (IISc).
            </p>
        </div>
        <div class="right-image">
            <img class="right-within" src={agnibaan}/>
        </div>
    </div>

    <div class="container-fluid third-section">
        <div class="third-content">
            <img src={fingersnap}class="third-section-icon"/>
            <h3 class="second-section-heading">
                Facts about us
            </h3>
            <p class="second-section-text">
                Agnibaan is a launch vehicle capable of carrying up to 100 kg of payload, to low
                Earth orbits up to 700 km with
            </p>
        </div>
        <div class="row">
            <div class="col-sm">
                <div class="card">
                    <img class="back-icon" src={cardback} />
                    <div class="card-body">
                        <h1 class="card-head"><b>05</b></h1>
                        <h3 class="card-title"><b>Configurations</b></h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card">
                    <img class="back-icon" src={cardback} />
                    <div class="card-body">
                        <h1 class="card-head"><b>3200</b></h1>
                        <h3 class="card-title"><b>Mass</b></h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card">
                    <img class="back-icon" src={cardback} />
                    <div class="card-body">
                        <h1 class="card-head"><b>05</b></h1>
                        <h3 class="card-title"><b>Launch Parts</b></h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card">
                    <img class="back-icon" src={cardback} />
                    <div class="card-body">
                        <h1 class="card-head"><b>05</b></h1>
                        <h3 class="card-title"><b>Launch Ports</b></h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fourth-section">
        <div class="fourth-head">
            <h3><b>Ready To Launch ?</b></h3>
            <p class="fourth-section-text">
                The National Centre for Combustion Research and Development (NCCRD), scheduled to be
                inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
            </p>
            <form>
                <div class="container-fluid custom-form">
                    <div class="row">
                        <div class="col-sm">
                            <div class="dropdown">
                                <button class="custom-form-control dropdown-toggle" type="button"
                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src={flag} class="custom"></img>
                                    <span class="form-control-name">LAUNCH LOCATION</span>
                                    <i class="arrow fa fa-arrow-down"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <div class="dropdown">
                                <button class="custom-form-control-half dropdown-toggle" type="button"
                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src={orbit} class="custom"></img>
                                    <span class="form-control-name">ORIENTAL INCLINATION</span>
                                    <i class="arrow fa fa-arrow-down"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="dropdown">
                                <button class="custom-form-control-half dropdown-toggle" type="button"
                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src={payload} class="custom"></img>
                                    <span class="form-control-name">PAYLOAD MASS</span>
                                    <i class="arrow fa fa-arrow-down"></i>
                                </button>
                                <div class="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button class="custom-button">
                            <img src={spaceshipWhite}></img>
                            <span>  BUILD MY VEHICLE</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="fifth-section">
        <p class="fifth-content">
            Drop us a note. We will revert.
            Yes, we actually do.
        </p>
        <p class="fifth-section-link">
            <a>CONTACT US</a>
        </p>
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