import React, { Component } from 'react';
import "./css/book.css";
import log from "./images/logo.png";
import navBar from "./js/common";
import spaceshipWhite from "./images/spaceship-copy.png";
import flag from "./images/flag.png";
import orbit from "./images/pennant.png";
import payload from "./images/scale-4.png";
import Init from "./js/book";
import { Link } from 'react-router-dom';
import phone from "./images/call-doctor.png";
import mail from "./images/letter.png";
import mountain from "./images/mountain.png";
import office from "./images/office.png";
import location from "./images/property-location.png";
import person from "./images/single-01.png";
import down from "./images/down-arrow.png";
import $ from 'jquery';


const SPREADSHEET_ID = '1k0SYvqDA2ZyI8Ntan3i8hZqk2Wzb5PIKFILZUK86whU';
const CLIENT_ID = "563170352853-288s8j6np8j7ht6hdbo8lpo2aqna4ude.apps.googleusercontent.com";
const API_KEY = "AIzaSyB8w9mYueq9k5x07x0-k_4wUaC4xgLOTB0";
const SCOPE = "https://googleapis.com/auth/spreadsheets";


class Book extends Component {

    
    constructor(props){
        super(props);
   

        this.state = {
            launch : "LAUNCH LOCATION",
            orbit : "ORBITAL INCLINATION",
            payload : "PAYLOAD MASS"
        };
        if(props.location != undefined && props.location.state != undefined)
        {
        if(props.location.state.launch != undefined)
            this.state.launch = props.location.state.launch;
            if(props.location.state.orbit != undefined)
                this.state.orbit = props.location.state.orbit;
                if(props.location.state.payload != undefined)
                    this.state.payload = props.location.state.payload;
        }

        this.enterLaunch = this.enterLaunch.bind(this);
     this.enterPayload = this.enterPayload.bind(this);
     this.enterOrbit = this.enterOrbit.bind(this);
     this.submitForm = this.submitForm.bind(this);
       
    }
    submitForm(e)
    {
        e.preventDefault();
       const URL = 'https://script.google.com/macros/s/AKfycbzXC9Ag_Vl-P78JLJao1ACqIz-LuxTRSLRkO1t3slRkCoB62fc/exec';
       var location = this.state.launch;
       var orbit = this.state.orbit;
       var payload = this.state.payload;
       var name = $("#name-field").val();
       var email = $("#email-field").val();
       var company = $("#company-field").val();
       var country = $("#country-field").text();
       var phone = $("#phone-field").val();
       var altitude = $("#altitude-field").val();
       var tac = document.getElementById("tac");
       if(!($("#location-field").hasClass("selected") && $("#inclination-field").hasClass("selected")
       && $("#payload-field").hasClass("selected") && $("#country-field").hasClass("selected")
       && name != "" && email != "" && company != "" && phone != "" && altitude != "" && tac.checked))
      {
          $(".form-warning").css("display","block");
          return;
      }
      $(".custom-button span").html("SUBMITTING..");
      $(".form-warning").css("display","none");
      var jqxhr = $.ajax({
          url : URL,
          method : 'GET',
          dataType: "json",
          data: {
              "Launch Location" : location,
              "Orbital Inclination" : orbit,
              "Payload Mass" : payload,
              "Name" : name,
              "Email Address" : email,
              "Company" : company,
              "Altitude" : altitude,
              "Country of Origin" : country,
              "Phone" : phone
          }
      }).done(function(response){
          console.log(response);
          window.location = process.env.PUBLIC_URL + "#/book-complete";
          
      }
      );
    }

    enterLaunch(name) {
        if (!document.getElementById("location-field").classList.contains("selected"))
                document.getElementById("location-field").classList.add("selected");
        this.setState({
            launch : name
        });
     }
    
     enterOrbit(name) {
        if (!document.getElementById("inclination-field").classList.contains("selected"))
                document.getElementById("inclination-field").classList.add("selected");
        this.setState({
            orbit : name
        });
     }
    
     enterPayload(name) {
        if (!document.getElementById("payload-field").classList.contains("selected"))
                document.getElementById("payload-field").classList.add("selected");
        this.setState({
            payload : name
        });
     }
    

render() {

    Init();

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
            <div className="book__overallDiv">
                <p className="book_heading">Book your launch</p>

                <div className="book_form-content">
                    <form>
                        <p className="book_step">STEP 01</p>
                        <div className="container-fluid custom-form">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="dropdown" id="form-launch">
                                        <button className="dropdown-toggle custom-form-control" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  data-boundary="form-launch">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                    <img src={flag} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                    <p className={this.state.launch == "LAUNCH LOCATION" ? "form-control-name" : "form-control-name selected"} id="location-field">{this.state.launch}</p>
                                                </div>
                                                <div className="col-xs">
                                                    <img className="arrow" src={down} />
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton" id="location">
                                        <p className="dropdown-item" onClick={(e) => this.enterLaunch("Asia Pacific")}>Asia Pacific</p>
                                            <p className="dropdown-item" onClick={(e) => this.enterLaunch("India")}>India</p>
                                            <p className="dropdown-item" onClick={(e) => this.enterLaunch("Northern Europe")}>Northern Europe</p>
                                            <p className="dropdown-item" onClick={(e) => this.enterLaunch("Northern America")}>Northern America</p>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="dropdown" id="form-orbit">
                                        <button className=" custom-form-control-half dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  data-boundary="form-orbit">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                    <img src={orbit} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                    <p className={this.state.orbit == "ORBITAL INCLINATION" ? "form-control-name" : "form-control-name selected"} id="inclination-field">{this.state.orbit}</p>
                                                </div>
                                                <div className="col-xs">
                                                    <img className="arrow" src={down} />
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton" id="inclination">
                                        <p className="dropdown-item" onClick={(e) => this.enterOrbit("SSO")}>SSO</p>
                                            <p className="dropdown-item" onClick={(e) => this.enterOrbit("50 deg to SSo")}>50 deg to SSO</p>
                                            <p className="dropdown-item" onClick={(e) => this.enterOrbit("0 - 50 deg")}>0 - 50 deg</p>
                                       </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="dropdown" id="form-payload">
                                        <button className="custom-form-control-half dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  data-boundary="form-payload">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                    <img src={payload} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                    <p className={this.state.payload == "PAYLOAD MASS" ? "form-control-name" : "form-control-name selected"} id="payload-field">{this.state.payload}</p>
                                                </div>
                                                <div className="col-xs">
                                                    <img className="arrow" src={down} />
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton" id="payload">
                                        <p className="dropdown-item"  onClick={(e) => this.enterPayload("< 20 kg")}> &lt; 20 kg</p>
                                            <p className="dropdown-item"  onClick={(e) => this.enterPayload("20 - 40 kg")}>20 - 40 kg</p>
                                            <p className="dropdown-item"  onClick={(e) => this.enterPayload("40 - 60 kg")}>40 - 60 kg</p>
                                            <p className="dropdown-item"  onClick={(e) => this.enterPayload("60 - 80 kg")}>60 - 80 kg</p>
                                            <p className="dropdown-item"  onClick={(e) => this.enterPayload("80 - 100 kg")}>80 - 100 kg</p>
                                            <p className="dropdown-item"  onClick={(e) => this.enterPayload("> 100 kg")}> &gt; 100 kg</p>
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
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                    <img src={person} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                    <input className="form-control-name" id="name-field" placeholder="NAME" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="dropdown">
                                        <div className="custom-form-control">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                    <img src={office} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                    <input className="form-control-name" id="company-field" placeholder="COMPANY" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="dropdown" id="form-country">
                                        <button className="dropdown-toggle custom-form-control" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  data-boundary="form-country">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                    <img src={location} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                    <p className="form-control-name" id="country-field">COUNTRY OF ORIGIN</p>
                                                </div>
                                                <div className="col-xs">
                                                    <img className="arrow" src={down} />
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu custom-form-options" aria-labelledby="dropdownMenuButton" id="country">
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
                                        <div className="custom-form-control" type="button">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                    <img src={mail} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                    <input className="form-control-name" id="email-field" placeholder="EMAIL ADDRESS" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="dropdown">
                                        <div className="custom-form-control">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                    <img src={phone} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                    <input className="form-control-name" id="phone-field" placeholder="PHONE NUMBER" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="dropdown">
                                        <div className="custom-form-control">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-xs">
                                                    <img src={mountain} className="custom"></img>
                                                </div>
                                                <div className="col">
                                                    <input className="form-control-name" id="altitude-field" placeholder="ALTITUDE" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-form-check-group">
                                <label className="custom-form-check-label" htmlFor="tac">
                                    <input className="custom-form-check" type="checkbox" id="tac" />
                                    <span className="custom-form-check-span"></span>
   I accept the <a className="book__terms__link bookk__terms__link">terms, conditions and privacy policy</a> of the company.
</label>

<p className="form-warning">Fill out all fields</p>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="custom-button" onClick={(e) => this.submitForm(e)}>
                                        <img src={spaceshipWhite}></img>
                                        <span>BUILD MY VEHICLE</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="book__modal__out">
                <div className="book__modal__outer">
                    <div className="book__modal">
                        <p className="book__close__icon">X</p>
                        <p className="book__modal__heading">TERMS, CONDITIONS AND PRIVACY POLICY</p>
                        <p className="book__modal__text">These terms of use are an agreement between Agnikul Cosmos Private Limited (“Agnikul”, “we”, “us” or
                        “our”) and users of its website (“you”, “your” or “user”). This agreement (the “Agreement”) also
governs your use of this website <a href="http://agnikul.in">(http://www.agnikul.in/)</a> (the “Site”). By using the Site, you
acknowledge that you have reviewed and agree to all of the terms of this Agreement and agree to be
bound by them in connection with your use of the Site. By entering, accessing, browsing, submitting
information to, or otherwise using this site, you acknowledge and agree to the following terms and
conditions.
</p>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Intellectual Property
                </p>
                            <p className="book__modal__text">
                                All intellectual property rights in the Site including content, graphics and copyright works are owned by
us. We exclusively own all rights in the compilation, design and layout of the Site.<br></br>
You may access, view and print the content on the Site provided that you only use that content for your
personal use or otherwise in relation to using or considering our services.<br></br>
You must obtain our written permission to copy, reproduce or publish any of the content (including
graphics, videos, photographs or other copyright works) on the Site
                </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Third Party Websites
                </p>
                            <p className="book__modal_text">
                                From time to time, the Site may include features and functionality that allow you to interact with other
                                sites that are not under our control, including social media websites. We provide these features,
                                functionality, and links to you only as a convenience and do not endorse any linked websites or social
                                media sites and are not responsible for the contents or transmission of any linked websites or social
                                media sites.
                </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Provision of Information and Privacy
                </p>
                            <p className="book__modal__text">
                                You are not required to provide personal information to us. If you provide information to us, you will
ensure that such information is accurate and complete.<br></br>
We collect the personal information provided to us and may use it for communicating with you,
statistical analysis, and research and development.<br></br>
We do not generally disclose personal information to third parties for use for their own purposes. In
some instances, we may do so, including to our affiliates or providers who complete transactions or
perform services on our behalf, or if we are required to by law.<br></br>
Any personal information you provide to us may be stored on our providers’ secure servers. This may
involve transferring your information to countries which have less legal protection for personal
information than the countries in which you or we are based.<br></br>
We may also collect technical data and related information when you access or log on to the Site. This
may include information about your computer/tablet/mobile phone and the way users arrive at, browse
or interact with the Site. We may collect this information through the use of cookies or other means. If
you want to disable cookies, you can do so by changing your browser settings, although this may alter
the functionality of the Site. We use the technical information collected to have a better understanding
of how people use the Site and how we might improve it
                </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                All Liabilities Excluded
                </p>
                            <p className="book__modal__text">
                                You agree that your use of this Site is at your sole risk. Because of the number of possible sources of
                                information available through the Site, and the inherent hazards and uncertainties of electronic
distribution, there may be delays, omissions, inaccuracies or other problems with such information.<br></br>
To the extent permitted by law:
                </p>
                            <ol>
                                <li className="book__modal__text">
                                    all warranties, representations and guarantees are excluded, including suitability, fitness for
                                    purpose, appropriateness, availability for use, accuracy or completeness of the Site or the
                                    content on or accessed through it;
                    </li>
                                <li className="book__modal__text">
                                    under no circumstances shall Agnikul or its affiliates, agents or licensors be liable to you or
                                    anyone else for any damages (whether direct, indirect, punitive, incidental, special,
                                    consequential or otherwise, or whether resulting from tort, contract or other theories of law)
                                    including but not limited to attorneys’ fees and lost profits, in connection with, or in any manner
                                    arising out of: (1) the use or inability to use this Site and its content; (2) any goods or services
                                    obtained through third parties referenced or made available on or through this Site; (3) any
                                    errors or omissions in the content or information on the Site; or (4) any computer virus or other
                                    programming device, even if Agnikul is advised of the possibility thereof; and
                    </li>
                                <li className="book__modal__text">
                                    you indemnify us against all loss we suffer or incur as a direct or indirect result of your failure to
                                    comply with this Agreement.
                    </li>
                            </ol>
                            <p className="book__modal__text">
                                If you become dissatisfied with this Site, or the terms, conditions or policies governing this Site, your
                                sole and exclusive remedy is to discontinue using this Site. This limitation on damages is essential to the
                                agreement between you and us and the Site would not be provided free of charge without such
                                limitation.
            </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Governing Law and Jurisdiction
                </p>
                            <p className="book__modal__text">
                                The Site, all related content, and this Agreement shall be governed by and construed in accordance with
                                the laws of India, without regard to the principles of conflicts of laws. The courts of Chennai, India shall
                                have exclusive jurisdiction on any dispute that arises in relation to this Agreement or your use of the
                                Site.
                </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Amendments
                </p>
                            <p className="book__modal__text">
                                We may amend this Agreement from time to time, and you should ensure that you check and read the
                                same regularly. If you continue to use the Site after this Agreement is amended, you are deemed to
                                have agreed with the new terms of this Agreement.
                </p>
                        </div>
                        <div className="book__modal__section">
                            <p className="book__modal__head">
                                Contact
                </p>
                            <p className="book__modal__text">
                                If you have any queries, please contact privacy@agnikul.in
                </p>
                        </div>
                    </div>
                </div>
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

}

export default Book;