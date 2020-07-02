import React from 'react';
import "./css/home.css";
import ScrollHover from './js/home';
import { Link } from 'react-router-dom';
import log from "./images/logo.png";
import agnibaan from "./images/home-agni.jpg";
import satelite from "./images/small-logo.png";
import navBar from "./js/common";
import fingersnap from "./images/finger-snap.png";
import cardback from "./images/api.png";
import spaceshipWhite from "./images/spaceship-copy.png";
import flag from "./images/flag.png";
import orbit from "./images/pennant.png";
import payload from "./images/scale-4.png";
import bannericon from "./images/combined-shape.png";
import quote from "./images/group-5.png";
import dots from "./images/rectangle-2.png";
import down from "./images/down-arrow.png";


function Home() {

    ScrollHover();

    return (
        <div className="body">
            <div className="navBar">
                <div className="topnav row justify-content-around align-items-baseline" id="myTopnav">
                    <div className="column-lg nav-brandc">
                        <Link to="/"><img className="logo" src={log} /></Link>
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
                        <button className="nav-itemc nav-buttonc">
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

            <div className="home__HomeBanner">
                <div className="home__banner-content">
                    <img src={bannericon} className="home__banner-icon" />
                    <h1 className="home__banner-first-line">Bringing Space Within</h1>
                    <h1 className="home__banner-second-line">Everyone's Reach</h1>
                    <p className="home__banner-text">
                        Going to space shouldn’t be the hardest part of utilizing, living
                        in or working from space. So, why not design & build a product
                        that makes the earth-to-space journey as simple, as quick and
                        as affordable as possible?
            </p>
                    <Link className="home__banner-link" to="/products">CHECK OUT AGNIBAAN</Link>
                </div>
            </div>


            <div className="home__second-section">
                <div className="home__second-content">
                    <img src={satelite} className="home__second-section-icon" />
                    <h3 className="home__second-section-heading">
                        Agnibaan is a highly customizable, 2 stage launch vehicle
            </h3>
                    <p className="home__second-section-text">
                        Capable of taking upto 100 kgs to orbits around 700 km high,
                        Agnibaan can access both low and high inclination orbits and is
                        completely mobile - designed for accessing more than 25
                        launchports.
            </p><br></br>
                    <p className="home__second-section-text">
                        Driven by LOX/Kerosene engines in all its stages, Agnibaan is
                        configurable by the customer. Yes, Agnibaan doesn’t fly with
                        the same number of engines all the time. The mission, the
                        satellite and the launchport itself would decide how many
                        engines go on the first stage.
            </p>
                    <p className="home__second-section-text">
                        How is this possible? What about controllability? Assembly?
            </p>
                    <Link to="/products" className="home__second-section-link">TELL ME MORE</Link>
                </div>
                <div className="home__right-image">
                    <img className="home__right-within" src={agnibaan} />
                </div>
            </div>

            <div className="container-fluid home__third-section">
                <div className="home__third-content">
                    <img src={quote} className="home__quote"></img>
                    <img src={satelite} className="home__third-section-icon" />
                    <h3 className="home__second-section-heading">
                        Facts & Figures
            </h3>
                    <p className="home__second-section-text">
                        Agnibaan’s first stage could have 4 / 5 / 6 or 7 engines. An
                        optional third “baby” stage might be available for select
                        missions.
            </p>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <img className="home__back-icon" src={cardback} />
                            <div className="card-body">
                                <h1 className="card-head"><b>5</b></h1>
                                <h3 className="card-title"><b>Configurations</b></h3>
                                <p className="card-text">A first stage with 4 / 5 / 6 or 7 engines. A “baby” stage
could be made available for select missions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img className="home__back-icon" src={cardback} />
                            <div className="card-body">
                                <h1 className="card-head"><b>2</b></h1>
                                <h3 className="card-title"><b>Weeks</b></h3>
                                <p className="card-text">Payload integration to launch won’t take more than a
                        fortnight. Yes, launch-when-you-want</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img className="home__back-icon" src={cardback} />
                            <div className="card-body">
                                <h1 className="card-head"><b>10+</b></h1>
                                <h3 className="card-title"><b>Launch Parts</b></h3>
                                <p className="card-text">Access to 10+ launchports today. Access to 25+ coming
                                soon. Yes, launch-where-you-want.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img className="home__back-icon" src={cardback} />
                            <div className="card-body">
                                <h1 className="card-head"><b>100 Kg</b></h1>
                                <h3 className="card-title"><b>Mass</b></h3>
                                <p className="card-text">Same price per kg for any payload in the 25-100 kg 
                                range. Yes, pay-for-what-you-launch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__fourth-section">
                <div className="home__fourth-head">
                    <p className="home__midText">Ready To Launch ?</p><br></br><br></br>
                    <p className="home__fourth-section-text">
                        Yes, Agnibaan is configurable! (If you have not picked that up
                        already). So, let’s go to space together.
            </p>
                    <form>
                        <div className="container-fluid custom-form">
                            <div className="row justify-content-center">
                                <div className="col-sm">
                                    <div className="dropdown">
                                        <button className="dropdown-toggle custom-form-control" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                <img src={flag} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                <p className="form-control-name" id="location-field">LAUNCH LOCATION</p>
                                                </div>
                                                <div className="col-xs">
                                                <img className="arrow" src={down}/>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton" id="location">
                                        <p className="dropdown-item">Action</p>
                                            <p className="dropdown-item">Another action</p>
                                            <p className="dropdown-item">Something else here</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="dropdown">
                                        <button className=" custom-form-control-half dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                <img src={orbit} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                <p className="form-control-name" id="inclination-field">ORBITAL INCLINATION</p>
                                                </div>
                                                <div className="col-xs">
                                                <img className="arrow" src={down}/>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton" id="inclination"> 
                                        <p className="dropdown-item">Action</p>
                                            <p className="dropdown-item">Another action</p>
                                            <p className="dropdown-item">Something else here</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="dropdown">
                                            <button className="custom-form-control-half dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                <img src={payload} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                <p className="form-control-name" id="payload-field">PAYLOAD MASS</p>
                                                </div>
                                                <div className="col-xs">
                                                <img className="arrow" src={down}/>
                                                </div>
                                            </div>
                                            </button>
                                            <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton" id="payload">
                                            <p className="dropdown-item">Action</p>
                                            <p className="dropdown-item">Another action</p>
                                            <p className="dropdown-item">Something else here</p>
                                              </div>
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
                        </div>
            </form>
        </div>
                    <img src={dots} className="form-back" />
                </div>

                <div className="home__fifth-section">
                    <p className="home__fifth-content">
                        I am curious
        </p>
                    <p className="home__fifth-section-link">
                        <a>If you have a question, please reach out.</a>
                    </p>
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

export default Home;