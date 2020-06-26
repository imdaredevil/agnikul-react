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
        <div class="body">
       <div class="navBar">
        <div class="topnav row" id="myTopnav">
            <div class="column-lg nav-brandc">
                <Link  to="/"><img class="logo" src={log}/></Link>
            </div>
            <div class="column">
                <Link to="/about" class="nav-itemc nav-linkc">
                    About
                </Link>
            </div>
            <div class="column">
                <Link to="/products" class="nav-itemc nav-linkc">
                    Products
                </Link>
            </div>
            <div class="column-md">
                <Link to="/launch-sites" class="nav-itemc nav-linkc">
                    Launch Sites
                </Link>
            </div>
            <div class="column-md">
                <Link to="/team" class="nav-itemc nav-linkc">
                    Meet the Team
                </Link>
            </div>
            <div class="column">
                <Link to="/" class="nav-itemc nav-linkc">
                    Career
                </Link>
            </div>
            <div class="column-md">
                <Link to="/" class="nav-itemc nav-linkc">
                    Contact Us
                </Link>
            </div>
            <div id="navButtonDiv" class="column-lg">
                <button  class="nav-itemc nav-buttonc">
                   <Link to="/book"> BUILD YOUR LAUNCH</Link>
                </button>
            </div>
            <div class="col-sm iconc">
                <a onClick={navBar}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </div>
       
    <div class="originalDiv">
        <div class="first-scroll-content">
            <p class="first-scroll-heading">REVOLUTIONARY DESIGN</p>
            <p class="first-scroll-text">
                Our payload fairing is designed to decouple payload integration from the main assembly. 
                The all–carbon composite payload fairing is designed and manufactured in-house at Rocket Lab.
            </p>
        </div>
        <div class="rocket-horizontal">
            <img src={rocket1} class="rocket-1"/>
            <img src={rocket2} class="rocket-2"/>
            <img src={rocket3} class="rocket-3"/>
        </div>
        
            <img src={truck} class="truck"/>

        <div class="first-scroll-specs">
            <div class="row justify-content-around">
                <div class="col-auto">
                    <i class="fa fa-bars"></i>
                    <p class="spec-name">MAX PAYLOAD</p>
                    <p class="spec-value">100 KG</p>
                </div>
                <div class="col-auto">
                    <i class="fa fa-bars"></i>
                    <p class="spec-name">MAX PAYLOAD</p>
                    <p class="spec-value">100 KG</p>
                </div>
                <div class="col-auto">
                    <i class="fa fa-bars"></i>
                    <p class="spec-name">MAX PAYLOAD</p>
                    <p class="spec-value">100 KG</p>
                </div>
                <div class="col-auto">
                    <i class="fa fa-bars"></i>
                    <p class="spec-name">MAX PAYLOAD</p>
                    <p class="spec-value">100 KG</p>
                </div>
            </div>
        </div>
        <div class="second-scroll second-scroll-1">
            <p class="number">01</p>
            <p class="content">BABY STAGE</p>
        </div>

        <div class="second-scroll second-scroll-2">
            <p class="heading">A NEW PROPULSION CYCLE</p>
            <p class="text">Rutherford is an oxygen/kerosene pump fed engine specifically
                 designed in-house for Electron using an entirely new propulsion cycle.</p>
        </div>

        <div class="second-scroll second-scroll-3">
            <div class="row justify-content-around">
        <div class="col">
            <i class="fa fa-bars icon"></i>
            <p class="heading">3D PRINTING</p>
            <p class="text">Electron’s first stage is powered by nine Rutherford engines.</p>
        </div>

        <div class="col">
            <i class="fa fa-bars icon"></i>
            <p class="heading">LIFT OFF THRUST</p>
            <p class="text">Its unique high-performance electric propellant pumps reduce mass</p>
        </div>

        <div class="col">
            <i class="fa fa-bars icon"></i>
            <p class="heading">ISP</p>
            <p class="text">Massive customization of function while retaining commonality</p>
        </div>
    </div>
    </div>

    <div class="third-scroll third-scroll-1">
        <p class="number">02</p>
        <p class="content">STAGE 2</p>
    </div>

    <div class="third-scroll third-scroll-2">
        <p class="text">Electron's second stage is powered by a variant of the Rutherford Engine 
            providing improved. Electron makes use of advanced carbon composite materials.</p>
    </div>

    <div class="third-scroll third-scroll-3">
        <i class="fa fa-bars"></i>
        <p class="spec-name">TOTAL THRUST</p>
        <p class="spec-value">22 kN (5,000 lbf)</p>
    </div>

    <div class="third-scroll third-scroll-4">
        <p class="text">Through an extensive research program, Rocket Lab has developed carbon composite
             tanks that are compatible with liquid oxygen, providing impressive weight savings.</p>
    </div>

    <div class="third-scroll  third-image-1">
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image href={homepage} x="-25" width="150" height="100" />
              </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
            
          </svg>
    </div>

    <div class="third-scroll  third-image-2">
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

    <div class="fourth-scroll fourth-scroll-1">
        <p class="number">03</p>
        <p class="content">STAGE 3</p>
    </div>


    <div class="fourth-scroll fourth-scroll-2">
        <p class="text">
            Powered by Rocket Lab's 3D printed liquid propellant
             Curie engine capable of 120N of thrust and multiple burns.
        </p>
    </div>

    <div class="fourth-scroll fourth-scroll-3">
        <p class="text">
            An optional apogee kick stage that can execute 
            multiple burns to place numerous payloads into different, circularized orbits. 
            It opens up significantly more orbital options, particularly for rideshare customers 
            that have traditionally been limited to the primary payload’s designated orbit. 
        </p>
    </div>

    <div class="fourth-scroll fourth-image fourth-image-1">
        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image href={homepage} x="-25" width="150" height="100" />
              </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
          </svg>
    </div>

    <div class="fourth-scroll fourth-image fourth-image-2">
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

        <div class="fifth-scroll fifth-scroll-1">
            <p class="number">04</p>
            <p class="content">LAUNCHPAD</p>
        </div>

        <div class="fifth-scroll fifth-scroll-2">
            <p class="text">Rocket Lab offers the world’s only private orbital 
                launch range in Mahia, New Zealand. This FAA compliant site can accommodate..</p>
        </div>

        <div class="fifth-scroll fifth-scroll-3">
            <div class="roww">
        <div class="column">
            <i class="fa fa-bars icon"></i>
            <p class="heading">3D PRINTING</p>
            <p class="text">Electron’s first stage is powered by nine Rutherford engines.</p>
        </div>
        <div class="column">
            <i class="fa fa-bars icon"></i>
            <p class="heading">3D PRINTING</p>
            <p class="text">Electron’s first stage is powered by nine Rutherford engines.</p>
        </div>
    </div>
    </div>
        
</div>
</div>

    );

}

export default Product;