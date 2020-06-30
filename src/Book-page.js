import React from 'react';
import "./css/book.css";
import log from "./images/logo.png";
import  navBar from "./js/common";
import spaceshipWhite from "./images/spaceship-copy.png";
import flag from "./images/flag.png";
import orbit from "./images/pennant.png";
import payload from "./images/scale-4.png";
import $ from 'jquery';
import { Link } from 'react-router-dom';
import phone from "./images/call-doctor.png";
import mail from "./images/letter.png";
import mountain from "./images/mountain.png";
import office from "./images/office.png";
import location from "./images/property-location.png";
import person from "./images/single-01.png";
import down from "./images/down-arrow.png";



function Book(){

    $(document).ready(function(){
        $("body").removeClass("products");
    });

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
            
        <p className="book_heading">Book your launch</p>

<div className="book_form-content">
<form>
    <p className="book_step">STEP 01</p>
    <div className="container-fluid custom-form">
                    <div className="row">
                        <div className="col-sm">
                        <div className="dropdown">
                                        <button className="dropdown-toggle custom-form-control" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src={flag} className="custom"></img>
                                            <span className="form-control-name">LAUNCH LOCATON</span>
                                            <img className="arrow" src={down}/>
                                        </button>
                                        <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                                    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <div className="dropdown">
                                        <button className=" custom-form-control-half dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src={orbit} className="custom"></img>
                                            <span className="form-control-name">ORBITAL INCLINATION</span>
                                            <img className="arrow" src={down}/>
                                        </button>
                                        <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                        </div>
                        <div className="col-sm">
                        <div className="dropdown">
                                            <button className="custom-form-control-half dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src={payload} className="custom"></img>
                                                <span className="form-control-name">PAYLOAD MASS</span>
                                                <img className="arrow" src={down}/>
                                            </button>
                                            <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                              </div>
                                        </div>                    
                            </div>
                    </div>
                </div>
             <p className="book_step">STEP 02</p>
    
<div className="container-fluid custom-form">
    <div className="row">
    <div className="col-sm">
    <div className="dropdown">
        <div className="custom-form-control"> 
        <img src={person} className="custom"></img>
            <input placeholder="NAME"/>
        </div>
    </div>
    </div>
</div>
<div className="row">
    <div className="col-sm">
    <div className="dropdown">
        <div className="custom-form-control"> 
        <img src={office} className="custom"></img>
            <input placeholder="COMPANY / ORGANISATION"/>
        </div>
    </div>
    </div>
</div>
<div className="row">
    <div className="col-sm">
    <div className="dropdown">
                                        <button className="dropdown-toggle custom-form-control" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src={location} className="custom"></img>
                                            <span className="form-control-name">COUNTRY OF ORIGIN</span>
                                            <img className="arrow" src={down}/>
                                        </button>
                                        <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                             </div>
</div>
<div className="row">
    <div className="col-sm">
        <div className="dropdown">
        <div className="custom-form-control" type="button">
        <img src={mail} className="custom"></img>
        <input placeholder="EMAIL ADDRESS"/>
        </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="col-sm">
        <div className="dropdown">
        <div className="custom-form-control">
        <img src={phone} className="custom"></img>
         <input placeholder="PHONE NUMBER"/>
        </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="col-sm">
        <div className="dropdown">
        <div className="custom-form-control">
        <img src={mountain} className="custom"></img>
          <input placeholder="ALTITUDE"/>
        </div>
        </div>
    </div>
</div>
<div className="custom-form-check-group">
<input className="custom-form-check" type="checkbox" id="tac"/>
<label className="custom-form-check-label" htmlFor="tac">Terms and Conditions agreements act as a legal contract between you (the company) who has the website or mobile app and the user who access your website and mobile app.

    Having a Terms and Conditions agreement is completely optional. No laws require you to have one. Not even the super-strict and wide-reaching General Data Protection Regulation (GDPR).
</label>
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

export default Book;