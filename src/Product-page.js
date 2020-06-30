import React from 'react';
import "./css/products.css";
import Init from './js/products';
import navBar from './js/common';
import log from "./images/logo.png";
import truck from "./images/truck.png";
import stand from "./images/stand.png";
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
                <Link to="/products" className="nav-itemc nav-linkc active">
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
           
    <div className="originalDiv">
        <div className="first-scroll-content">
            <p className="first-scroll-heading">A CONFIGURABLE & NIMBLE DESIGN</p>
            <p className="first-scroll-text">
            Agnibaan is a customizable vehicle. When we were at the
drawing board, we carefully analyzed what our customers really
needed. We then engineered enough flexibility into the vehicle
while carefully designing to ensure reliability. Removing a few
engines and flying is more involved than it sounds. We had to
ensure vehicle controllability, stability, lift off thrust-to-weight
ratio (& many other parameters) made sense for each of these
versions. “Agnibaan” is a Sanksrit word that translates to mean
“an arrow of fire”.

            </p>
        </div>
        <div className="rocket-horizontal">
            <img src={rocket1} className="rocket-1"/>
            <img src={rocket2} className="rocket-2"/>
            <img src={rocket3} className="rocket-3"/>
        </div>
        
            <img src={truck} className="truck"/>
            <img src={stand} className="stand"/>

        <div className="first-scroll-specs">
            <div className="row justify-content-around">
                <div className="col-xs">
                    <i className="fa fa-bars"></i>
                    <p className="spec-name">MAX PAYLOAD</p>
                    <p className="spec-value">100 KG to 700 km.LEO</p>
                </div>
                <div className="col-xs">
                    <i className="fa fa-bars"></i>
                    <p className="spec-name">HEIGHT</p>
                    <p className="spec-value">18 M</p>
                </div>
                <div className="col-xs">
                    <i className="fa fa-bars"></i>
                    <p className="spec-name">DIAMETER</p>
                    <p className="spec-value">1.3 M</p>
                </div>
                <div className="col-xs">
                    <i className="fa fa-bars"></i>
                    <p className="spec-name">LIFT OFF MASS</p>
                    <p className="spec-value">14 TONS</p>
                </div>
            </div>
        </div>
        <div className="second-scroll second-scroll-1">
            <p className="number">01</p>
            <p className="content">BABY STAGE</p>
        </div>

        <div className="second-scroll second-scroll-2">
            {/* <p className="heading">A NEW PROPULSION CYCLE</p> */}
            <p className="text">An optional baby stage sits inside the payload fairing with an envelope
large enough for almost all small satellite needs.</p>
        </div>

        <div className="second-scroll second-scroll-3">
            <div className="row justify-content-around">
        <div className="col">
            <i className="fa fa-bars icon"></i>
            <p className="heading">PAYLOAD ENVELOPE</p>
            <p className="text">2 m x 1.5 m envelope with the ability to take one or many satellites.</p>
        </div>

        <div className="col">
            <i className="fa fa-bars icon"></i>
            <p className="heading">1 - 100 Kgs</p>
            <p className="text">Flat costing for any payload between 20 - 100 kgs</p>
        </div>

        <div className="col">
            <i className="fa fa-bars icon"></i>
            <p className="heading">Payload Guide</p>
            <p className="text">For more information, please request our payload guide</p>
        </div>
    </div>
    </div>

    <div className="third-scroll third-scroll-1">
        <p className="number">02</p>
        <p className="content">STAGE 2</p>
    </div>

    <div className="third-scroll third-scroll-2">
        <p className="text">Our second stage is powered by the Agnite vacuum optimized engine</p>
    </div>

    <div className="third-scroll third-scroll-3">
        <i className="fa fa-bars"></i>
        <p className="spec-name">TOTAL THRUST</p>
        <p className="spec-value">Sea Level Thrust - 25 kN</p>
    </div>

    <div className="third-scroll third-scroll-4">
        <p className="text">Agnite is the same engine that powers our first stage as well. It
can deliver upto 355 seconds of Isp in vacuum. Running an
electric pump fed engine offers greater & finer propellant
utilization techniques to enhance payload capacity.</p>
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
        <svg viewBox="0 0 185 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                <image href={homepage} x="-25" width="150" height="100" />
              </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
            <polygon points="140 1 185 25 185 75 140 99 95 75 95 25" fill="url(#img)"/>
            
          </svg>
    </div>

    <div className="fourth-scroll fourth-scroll-1">
        <p className="number">03</p>
        <p className="content">STAGE 3</p>
    </div>


    <div className="fourth-scroll fourth-scroll-2">
        <p className="text">
        Agnibaan’s first stage is powered by 7 Agnite engines each
delivering 25 kN of thrust at sea level. All of these engines are
electric pump fed engines allowing for simplified engine design
and highly configurable engine clustering architectures.

        </p>
    </div>

    <div className="fourth-scroll fourth-scroll-3">
        <p className="text">
        Capable of operating with a sea level of Isp of 285 seconds, the
entire combustion section here is a single piece assembly and
100% 3d printed.

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
            <p className="content">LAUNCH PEDESTAL - DHANUSH</p>
        </div>

        <div className="fifth-scroll fifth-scroll-2">
            <p className="text">Agnibaan was built keeping in mind the capability to launch
from multiple launchports across the world. So, we built
“Dhanush” - the launch pedestal - to support full mobility across
all configurations of Agnibaan. As opposed to (current versions
of) Agnibaan, Dhanush is meant for multiple uses and is built
with durability and transportability in mind. “Dhanush” is a
Sanskrit word that translates to “a celestial bow (from which
arrows are launched)”. So yes, Agnibaan is launched from
Dhanush!
</p>
        </div>

        <div className="fifth-scroll fifth-scroll-3">
            <div className="roww">
        <div className="column">
            <i className="fa fa-bars icon"></i>
            <p className="heading">Access to multiple launchports</p>
            <p className="text">Dhanush was built and conceived as a separate product
that enables the process of launching to be reliable and
repeatable with consistency.
</p>
        </div>
        <div className="column">
            <i className="fa fa-bars icon"></i>
            <p className="heading">Mobility</p>
            <p className="text">Dimensions of Dhanush were designed keeping in mind
road dimensions and transportability restrictions
globally.
</p>
        </div>
    </div>
    </div>
        
</div>
</div>

    );

}

export default Product;