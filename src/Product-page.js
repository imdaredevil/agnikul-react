import React from 'react';
import "./css/products.css";
import Init from './js/products';
import navBar from './js/common';
import log from "./images/logo.png";
import truck from "./images/Launchpad_V6.png";
import rocket1 from "./images/rocket-1.png";
import rocket2 from "./images/rocket-2.png";
import rocket3 from "./images/rocket-3.png";
import homepage from "./images/homepage.jpeg";

import { Link } from 'react-router-dom';

function Product(){

    Init();

    return (
        <div className="body">
       <div className="navBar navFixed">
        <div className="topnav row" id="myTopnav">
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
                <Link to="/" className="nav-itemc nav-linkc">
                    Career
                </Link>
            </div>
            <div className="column-md">
                <Link to="/" className="nav-itemc nav-linkc">
                    Contact Us
                </Link>
            </div>
            <div id="navButtonDiv" className="column-lg">
                <button  className="nav-itemc nav-buttonc">
                   <Link to="/book"> BUILD YOUR LAUNCH</Link>
                </button>
            </div>
            <div className="col-sm iconc">
                <a onClick={navBar}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </div>
       
    <div className="originalDiv">
        <div className="first-scroll-content">
            <p className="first-scroll-heading">REVOLUTIONARY DESIGN</p>
            <p className="first-scroll-text">
                Our payload fairing is designed to decouple payload integration from the main assembly. 
                The all–carbon composite payload fairing is designed and manufactured in-house at Rocket Lab.
            </p>
        </div>
        <div className="rocket-horizontal">
            <img src={rocket1} className="rocket-1"/>
            <img src={rocket2} className="rocket-2"/>
            <img src={rocket3} className="rocket-3"/>
        </div>
        
            <img src={truck} className="truck"/>

        <div className="first-scroll-specs">
            <div className="row justify-content-around">
                <div className="col-auto">
                    <i className="fa fa-bars"></i>
                    <p className="spec-name">MAX PAYLOAD</p>
                    <p className="spec-value">100 KG</p>
                </div>
                <div className="col-auto">
                    <i className="fa fa-bars"></i>
                    <p className="spec-name">MAX PAYLOAD</p>
                    <p className="spec-value">100 KG</p>
                </div>
                <div className="col-auto">
                    <i className="fa fa-bars"></i>
                    <p className="spec-name">MAX PAYLOAD</p>
                    <p className="spec-value">100 KG</p>
                </div>
                <div className="col-auto">
                    <i className="fa fa-bars"></i>
                    <p className="spec-name">MAX PAYLOAD</p>
                    <p className="spec-value">100 KG</p>
                </div>
            </div>
        </div>
        <div className="second-scroll second-scroll-1">
            <p className="number">01</p>
            <p className="content">BABY STAGE</p>
        </div>

        <div className="second-scroll second-scroll-2">
            <p className="heading">A NEW PROPULSION CYCLE</p>
            <p className="text">Rutherford is an oxygen/kerosene pump fed engine specifically
                 designed in-house for Electron using an entirely new propulsion cycle.</p>
        </div>

        <div className="second-scroll second-scroll-3">
            <div className="row justify-content-around">
        <div className="col">
            <i className="fa fa-bars icon"></i>
            <p className="heading">3D PRINTING</p>
            <p className="text">Electron’s first stage is powered by nine Rutherford engines.</p>
        </div>

        <div className="col">
            <i className="fa fa-bars icon"></i>
            <p className="heading">LIFT OFF THRUST</p>
            <p className="text">Its unique high-performance electric propellant pumps reduce mass</p>
        </div>

        <div className="col">
            <i className="fa fa-bars icon"></i>
            <p className="heading">ISP</p>
            <p className="text">Massive customization of function while retaining commonality</p>
        </div>
    </div>
    </div>

    <div className="third-scroll third-scroll-1">
        <p className="number">02</p>
        <p className="content">STAGE 2</p>
    </div>

    <div className="third-scroll third-scroll-2">
        <p className="text">Electron's second stage is powered by a variant of the Rutherford Engine 
            providing improved. Electron makes use of advanced carbon composite materials.</p>
    </div>

    <div className="third-scroll third-scroll-3">
        <i className="fa fa-bars"></i>
        <p className="spec-name">TOTAL THRUST</p>
        <p className="spec-value">22 kN (5,000 lbf)</p>
    </div>

    <div className="third-scroll third-scroll-4">
        <p className="text">Through an extensive research program, Rocket Lab has developed carbon composite
             tanks that are compatible with liquid oxygen, providing impressive weight savings.</p>
    </div>

    <div className="third-scroll  third-image-1">
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image href={homepage} x="-25" width="150" height="100" />
              </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
            
          </svg>
    </div>

    <div className="third-scroll  third-image-2">
        <svg viewBox="0 0 275 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image href={homepage} x="-25" width="150" height="100" />
              </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
            <polygon points="140 1 185 25 185 75 140 99 95 75 95 25" fill="url(#img)"/>
            <polygon points="230 1 275 25 275 75 230 99 185 75 185 25" fill="url(#img)"/>
            
          </svg>
    </div>

    <div className="fourth-scroll fourth-scroll-1">
        <p className="number">03</p>
        <p className="content">STAGE 3</p>
    </div>


    <div className="fourth-scroll fourth-scroll-2">
        <p className="text">
            Powered by Rocket Lab's 3D printed liquid propellant
             Curie engine capable of 120N of thrust and multiple burns.
        </p>
    </div>

    <div className="fourth-scroll fourth-scroll-3">
        <p className="text">
            An optional apogee kick stage that can execute 
            multiple burns to place numerous payloads into different, circularized orbits. 
            It opens up significantly more orbital options, particularly for rideshare customers 
            that have traditionally been limited to the primary payload’s designated orbit. 
        </p>
    </div>

    <div className="fourth-scroll fourth-image fourth-image-1">
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image href={homepage} x="-25" width="150" height="100" />
              </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
          </svg>
    </div>

    <div className="fourth-scroll fourth-image fourth-image-2">
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image href={homepage} x="-25" width="150" height="100" />
              </pattern>
            </defs>
            <polygon points="1 50 25 95 75 95 99 50 75 5 25 5" fill="url(#img)"/>
            50 1 95 25 95 75 50 99 5 75 5 25
          </svg>
    </div>

        <div className="fifth-scroll fifth-scroll-1">
            <p className="number">04</p>
            <p className="content">LAUNCHPAD</p>
        </div>

        <div className="fifth-scroll fifth-scroll-2">
            <p className="text">Rocket Lab offers the world’s only private orbital 
                launch range in Mahia, New Zealand. This FAA compliant site can accommodate..</p>
        </div>

        <div className="fifth-scroll fifth-scroll-3">
            <div className="roww">
        <div className="column">
            <i className="fa fa-bars icon"></i>
            <p className="heading">3D PRINTING</p>
            <p className="text">Electron’s first stage is powered by nine Rutherford engines.</p>
        </div>
        <div className="column">
            <i className="fa fa-bars icon"></i>
            <p className="heading">3D PRINTING</p>
            <p className="text">Electron’s first stage is powered by nine Rutherford engines.</p>
        </div>
    </div>
    </div>
        
</div>
</div>

    );

}

export default Product;