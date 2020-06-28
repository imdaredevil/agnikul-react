import React from 'react';
import "./css/home.css";
import ScrollHover from './js/home';
import { Link } from 'react-router-dom';
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
import { Dropdown } from "react-bootstrap";



function Home(){

    ScrollHover();

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
    
       <div className="home__HomeBanner">
        <div className="home__banner-content">
            <i className="home__fa fa-bars banner-icon"></i>
            <h1 className="home__banner-first-line">Bringing Space Within</h1>
            <h1 className="home__banner-second-line">Everyone's Reach</h1>
            <p className="home__banner-text">
                Getting there shouldn't be the hardest part of<br/>
                being space-faring. So, why not design and build<br/>
                an orbital-clas launch vehicle?
            </p>
            <a className="home__banner-link">Go To Products</a>
        </div>
    </div>

    <div className="home__second-section">
        <div className="home__second-content">
            <img src={satelite} className="home__second-section-icon"/>
            <h3 className="home__second-section-heading">
                A 2 stage LOX/Kerosene vehicle with a third "baby stage"
            </h3>
            <p className="home__second-section-text">
                Agnibaan is a launch vehicle capable of carrying up to 100 kg of payload,
                to low Earth orbits up to 700 km with a plug-and-play engine
                configuration launched from a mobile launch vehicle
            </p>
            <p className="home__second-section-text">
                Engineering Research Board, Dept. of Science and Technology (DST),
                Government of India. A similar centre has also been established at
                Indian Institute of Science, Bangalore (IISc).
            </p>
        </div>
        <div className="home__right-image">
            <img className="home__right-within" src={agnibaan}/>
        </div>
    </div>

    <div className="container-fluid home__third-section">
        <div className="home__third-content">
            <img src={fingersnap} className="home__third-section-icon"/>
            <h3 className="home__second-section-heading">
                Facts about us
            </h3>
            <p className="home__second-section-text">
                Agnibaan is a launch vehicle capable of carrying up to 100 kg of payload, to low
                Earth orbits up to 700 km with
            </p>
        </div>
        <div className="row">
            <div className="col-sm">
                <div className="card">
                    <img className="home__back-icon" src={cardback} />
                    <div className="card-body">
                        <h1 className="card-head"><b>05</b></h1>
                        <h3 className="card-title"><b>Configurations</b></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <img className="home__back-icon" src={cardback} />
                    <div className="card-body">
                        <h1 className="card-head"><b>3200</b></h1>
                        <h3 className="card-title"><b>Mass</b></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <img className="home__back-icon" src={cardback} />
                    <div className="card-body">
                        <h1 className="card-head"><b>05</b></h1>
                        <h3 className="card-title"><b>Launch Parts</b></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <img className="home__back-icon" src={cardback} />
                    <div className="card-body">
                        <h1 className="card-head"><b>05</b></h1>
                        <h3 className="card-title"><b>Launch Ports</b></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="home__fourth-section">
        <div className="home__fourth-head">
            <h3><b>Ready To Launch ?</b></h3>
            <p className="home__fourth-section-text">
                The National Centre for Combustion Research and Development (NCCRD), scheduled to be
                inaugurated on 13th October 2017, is supported by Science and Engineering Research Board,
            </p>
            <form>
                <div className="container-fluid custom-form">
                    <div className="row">
                        <div className="col-sm">
                        <Dropdown>
                                <Dropdown.Toggle className="custom-form-control">
                                    <img src={flag} className="custom"></img>
                                    <span className="form-control-name">LAUNCH LOCATION</span>
                                    <i className="arrow fa fa-arrow-down"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu custom-form-options">
                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                                    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Dropdown>
                                <Dropdown.Toggle className="custom-form-control-half">
                                    <img src={orbit} className="custom"></img>
                                    <span className="form-control-name">ORIENTAL INCLINATION</span>
                                    <i className="arrow fa fa-arrow-down"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu custom-form-options">
                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-sm">
                        <Dropdown>
                                <Dropdown.Toggle className="custom-form-control-half">
                                    <img src={payload} className="custom"></img>
                                    <span className="form-control-name">PAYLOAD MASS</span>
                                    <i className="arrow fa fa-arrow-down"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu custom-form-options">
                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>                      
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="custom-button">
                            <img src={spaceshipWhite}></img>
                            <span>  BUILD MY VEHICLE</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div className="home__fifth-section">
        <p className="home__fifth-content">
            Drop us a note. We will revert.
            Yes, we actually do.
        </p>
        <p className="home__fifth-section-link">
            <a>CONTACT US</a>
        </p>
    </div>
    
    <div className="footer">
        <div className="home__first-row"></div>
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

export default Home;