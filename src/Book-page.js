import React from 'react';
import "./css/book.css";
import log from "./images/logo.png";
import  navBar from "./js/common";
import spaceshipWhite from "./images/spaceship-copy.png";
import flag from "./images/flag.png";
import orbit from "./images/pennant.png";
import payload from "./images/scale-4.png";



function Book(){


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
    
    <p class="heading">BOOK YOUR LAUNCH</p>

<div class="form-content">
<form>
    <p class="step">STEP 01</p>
    <div class="container-fluid custom-form">
        <div class="row">
            <div class="col-sm">
                <div class="dropdown">
                    <button class="custom-form-control dropdown-toggle" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <img class="custom" src={flag}/>
                        <span class="form-control-name">LAUNCH LOCATION</span>
                        <i class="arrow fa fa-arrow-down"></i>
                    </button>
                    <div class="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton">
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
                        <img class="custom" src={orbit}/>
                        <span class="form-control-name">ORIENTAL INCLINATION</span>
                        <i class="arrow fa fa-arrow-down"></i>
                    </button>
                    <div class="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton">
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
                        <img class="custom" src={payload}/>
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
    <p class="step">STEP 02</p>
    
<div class="container-fluid custom-form">
    <div class="row">
    <div class="col-sm">
        <button class="custom-form-control" type="button">
            <i class="custom fa fa-bars"></i>
            <input placeholder="NAME"/>
        </button>
    </div>
</div>
<div class="row">
    <div class="col-sm">
        <button class="custom-form-control" type="button">
            <i class="custom fa fa-bars"></i>
            <input placeholder="COMPANY / ORGANISATION"/>
        </button>
    </div>
</div>
<div class="row">
    <div class="col-sm">
        <div class="dropdown">
            <button class="custom-form-control dropdown-toggle" type="button"
                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <i class="custom fa fa-bars"></i>
                <span class="form-control-name">COUNTRY OF ORIGIN</span>
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
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-sm">
        <button class="custom-form-control" type="button">
            <i class="custom fa fa-bars"></i>
            <input placeholder="EMAIL ADDRESS"/>
        </button>
    </div>
</div>
<div class="row">
    <div class="col-sm">
        <button class="custom-form-control" type="button">
            <i class="custom fa fa-bars"></i>
            <input placeholder="PHONE NUMBER"/>
        </button>
    </div>
</div>
<div class="row">
    <div class="col-sm">
        <button class="custom-form-control" type="button">
            <i class="custom fa fa-bars"></i>
            <input placeholder="ALTITUDE"/>
        </button>
    </div>
</div>
<div class="custom-form-check-group">
<input class="custom-form-check" type="checkbox" id="tac"/>
<label class="custom-form-check-label" for="tac">Terms and Conditions agreements act as a legal contract between you (the company) who has the website or mobile app and the user who access your website and mobile app.

    Having a Terms and Conditions agreement is completely optional. No laws require you to have one. Not even the super-strict and wide-reaching General Data Protection Regulation (GDPR).
</label>
</div>
    <div class="row">
        <div class="col">
            <button class="custom-button">
            <img src={spaceshipWhite}></img>
                <span>  BUILD MY VEHICLE</span>
            </button>
        </div>
    </div>
</div>
</form>
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

export default Book;