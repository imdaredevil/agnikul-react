import React from "react";
import { Link } from "react-router-dom";

import "./css/about.css";
import "swiper/css/swiper.min.css";

import navBar from "./js/common";
import Init from "./js/about";

import worldmap from "./images/about/intermediate-banner-back.png";
import log from "./images/logo.png";
import centeredimage from "./images/about/centered-image.png";

import iit from "./images/about/partners/IITM.jpg";
import ceg from "./images/about/partners/CEG.jpg";
import ciie from "./images/about/partners/CIIE.jpg";

import perumal from "./images/about/advisors/Perumal.jpg";
import pvr from "./images/about/advisors/PVR.jpg";
import satya from "./images/about/advisors/Satya.jpg";
import sekar from "./images/about/advisors/Shekar.jpg";

import alenspace from "./images/about/customers/alenspace.png";
import dcube from "./images/about/customers/Dcube.png";
import dorbit from "./images/about/customers/Dorbit.png";
import leafspace from "./images/about/customers/leafspace.png";
import picosats from "./images/about/customers/Picosats.png";

function About() {
  Init(); // function to initialize animations and swipers

  return (
    <div className="body">
      {/* ***************NAVBAR******************* */}
      <div className="navBar">
        <div
          className="topnav row justify-content-around align-items-baseline"
          id="myTopnav"
        >
          <div className="column-lg nav-brandc">
            <Link to="/">
              <img className="logo" src={log} />
            </Link>
          </div>
          <div className="column">
            <Link to="/about" className="nav-itemc nav-linkc active">
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
            <Link to="/book">
              <button className="nav-itemc nav-buttonc">
                BOOK YOUR LAUNCH
              </button>
            </Link>
          </div>
        </div>
        <div className="iconc">
          <div onClick={navBar}>
            <i className="fa fa-bars fa-lg"></i>
          </div>
        </div>
      </div>

      <div className="about__about-banner">
        <div className="about__banner-content">
          <p className="about__banner-first-line">Who are we? </p>
          <p className="about__banner-text">
            “Agnikul” is a derivative of the Sanskrit word - “Gurukul” and it
            could be interpreted to mean “a place where people learn to use
            fire”.
            <br></br>
            We are a group of enthusiasts, rocket scientists, engineers,
            programmers, lawyers and more - all of us just love enabling space
            access to everyone!
          </p>
        </div>
      </div>

      <div className="timeline">
        <div className="vertical-line"></div>
        <div className="timeline-section">
          <div className="timeline-year">
            <p>2016</p>
          </div>
          <p className="timeline-text">
            Inception ! - This was when Agnikul was an idea on paper and in
            dreams
          </p>
        </div>
        <div className="timeline-section">
          <div className="timeline-year">
            <p>2017</p>
          </div>
          <p className="timeline-text">
            Formation! - Agnikul Cosmos was formally incorporated as a company
            in Chennai, India.
          </p>
          <p className="timeline-text">
            Agnikul moved into the National Center for Combustion R&D at IIT
            Madras, Chennai, India.
          </p>
        </div>
        <div className="timeline-section">
          <div className="timeline-year">
            <p>2018</p>
          </div>
          <p className="timeline-text">
            Incubation & Acceleration - Agnikul incubated at IIT Madras. Agnikul
            became a part of the Airbus Accelerator
          </p>
          <p className="timeline-text">
            First series of hot firings - Agnikul fired it’s first set of
            igniters and single injector element based thrusters.
          </p>
        </div>
        <div className="timeline-section">
          <div className="timeline-year">
            <p>2019</p>
          </div>
          <p className="timeline-text">
            Cash Infusion - Agnikul raised its seed round of funding from
            Speciale Invest
          </p>
          <p className="timeline-text">
            Agnikul grew to have a presence in Kerala as well and became a part
            of the Kerala Startup mission startup community.
          </p>
          <p className="timeline-text">
            Agnikul realized it’s single piece, fully 3d printed, higher stage
            engine.
          </p>
          <p className="timeline-text">
            Commercialization - Agnikul started signing agreements with
            potential customers!
          </p>
        </div>
        <div className="timeline-section">
          <div className="timeline-year">
            <p>2020</p>
          </div>
          <p className="timeline-text">
            A lot more to come .. watch for updates
          </p>
        </div>
      </div>
      <img className="centered-image" src={centeredimage} />

      <div className="about__third-section">
        <p className="about__section-head">Advisors in Agnikul</p>

        <div className="advisors">
          <div className="advisor-swiper swiper-container">
            <div className="swiper-wrapper">
              <div className="advisor-swiper-slide swiper-slide">
                <div className="advisor-slide-content">
                  <img className="advisor-slide-img" src={satya} />
                  <p className="advisor-name">SR Chakravarthy</p>
                  <p className="advisor-award">
                    Professor & Head - Combustion R&D Center, IIT Madras
                  </p>
                  <p className="advisor-desi">
                    An accomplished rocket scientist, combustion expert with
                    over 25 years of experience, cofounder of 3 IIT Madras
                    startups.
                  </p>
                </div>
              </div>
              <div className="advisor-swiper-slide swiper-slide">
                <div className="advisor-slide-content">
                  <img className="advisor-slide-img" src={perumal} />
                  <p className="advisor-name">RV Perumal, Padma Bhushan</p>
                  <p className="advisor-award">
                    (Retd.) GSLV Project Director & ISRO Veteran
                  </p>
                  <p className="advisor-desi">
                    An accomplished rocket scientist and the Project Director of
                    India’s first GSLV rocket. Over 40 years of experience in
                    rocket building.
                  </p>
                </div>
              </div>
              <div className="advisor-swiper-slide swiper-slide">
                <div className="advisor-slide-content">
                  <img className="advisor-slide-img" src={pvr} />
                  <p className="advisor-name">PV Ramakrishnan</p>
                  <p className="advisor-award">
                    Prof. (Emeritus) - Electronics and Communication
                    Engineering.
                  </p>
                  <p className="advisor-desi">
                    Project Director of ANUSAT - 1. Over 35 years of experience
                    in electronics and avionics design.
                  </p>
                </div>
              </div>
              <div className="advisor-swiper-slide swiper-slide">
                <div className="advisor-slide-content">
                  <img className="advisor-slide-img" src={sekar} />
                  <p className="advisor-name">N Shekar</p>
                  <p className="advisor-award">
                    Head of Aerospace Industry Development Association of Tamil
                    Nadu, (Retd.) MD CDG - Boeing, India
                  </p>
                  <p className="advisor-desi">
                    Accomplished aerospace industry veteran with over 40 years
                    of experience in building and scaling industry products.
                  </p>
                </div>
              </div>
            </div>
            <div className="advisor-swiper-pagination swiper-pagination"></div>
            <div className="advisor-swiper-button-prev swiper-button-prev"></div>
            <div className="advisor-swiper-button-next swiper-button-next"></div>
          </div>
        </div>
      </div>

      <div className="intermediate-banner">
        <img className="intermediate-img" src={worldmap} />
        <div className="intermediate-banner-content">
          <p className="intermediate-banner-title">
            Our story wouldn’t have started and isn’t complete without our
            academic partners.
          </p>
          {/* <Link className="intermediate-banner-link" to="/products">GO TO PRODUCTS</Link>           */}
        </div>
      </div>

      <div className="about__fourth-section">
        <p className="about__section-head">Academic Partners of Agnikul</p>
      </div>

      <div className="partners">
        <div className="partner-swiper swiper-container">
          <div className="swiper-wrapper">
            <div className="partner-swiper-slide swiper-slide">
              <div className="partner-slide-content">
                <img className="partner-slide-img" src={iit} />
                <p className="partner-name">IIT Madras</p>
              </div>
            </div>
            <div className="partner-swiper-slide swiper-slide">
              <div className="partner-slide-content">
                <img className="partner-slide-img" src={ceg} />
                <p className="partner-name">CEG, Anna University</p>
              </div>
            </div>
            <div className="partner-swiper-slide swiper-slide">
              <div className="partner-slide-content">
                <img className="partner-slide-img" src={ciie} />
                <p className="partner-name">IIM Ahmedabad’s CIIE</p>
              </div>
            </div>
          </div>
          <div className="partner-swiper-pagination swiper-pagination"></div>
          <div className="partner-swiper-button-prev swiper-button-prev"></div>
          <div className="partner-swiper-button-next swiper-button-next"></div>
        </div>
      </div>

      <div className="about__fifth-section">
        <p className="about__fifth-section-title">Why our partners like us</p>
      </div>

      <div className="businesses">
        <div className="business-swiper swiper-container">
          <div className="swiper-wrapper">
            <div className="business-swiper-slide swiper-slide">
              <div className="business-slide-content">
                <p className="business-slide-quote">
                  "With Agnikul, goal is to make space affordable for everyone
                  in India. If you are excited about our journey,”
                </p>
                {/* $0 */}
                <img className="business-slide-img" src={alenspace} />
              </div>
            </div>
            <div className="business-swiper-slide swiper-slide">
              <div className="business-slide-content">
                <p className="business-slide-quote">
                  "With Agnikul, goal is to make space affordable for everyone
                  in India. If you are excited about our journey,”
                </p>
                {/* <p className="business-slide-author"><b>Elon Musk</b> Chief Executive Officer</p> */}
                <img className="business-slide-img" src={dcube} />
              </div>
            </div>
            <div className="business-swiper-slide swiper-slide">
              <div className="business-slide-content">
                <p className="business-slide-quote">
                  "With Agnikul, goal is to make space affordable for everyone
                  in India. If you are excited about our journey,”
                </p>
                {/* $0 */}
                <img className="business-slide-img" src={dorbit} />
              </div>
            </div>
            <div className="business-swiper-slide swiper-slide">
              <div className="business-slide-content">
                <p className="business-slide-quote">
                  "With Agnikul, goal is to make space affordable for everyone
                  in India. If you are excited about our journey,”
                </p>
                {/* $0 */}
                <img className="business-slide-img" src={leafspace} />
              </div>
            </div>
            <div className="business-swiper-slide swiper-slide">
              <div className="business-slide-content">
                <p className="business-slide-quote">
                  "With Agnikul, goal is to make space affordable for everyone
                  in India. If you are excited about our journey,”
                </p>
                {/* $0 */}
                <img className="business-slide-img" src={picosats} />
              </div>
            </div>
          </div>
          <div className="business-swiper-pagination swiper-pagination"></div>
        </div>
      </div>

      {/* ****************FOOTER AND MODAL FOR PRIVACY POLICY****************** */}
      <div className="custom-modal-out">
        <div className="custom-modal-outer">
          <div className="custom-modal">
            <p className="close-icon">X</p>
            <p className="custom-modal-heading">
              TERMS, CONDITIONS AND PRIVACY POLICY
            </p>
            <p className="custom-modal-text">
              These terms of use are an agreement between Agnikul Cosmos Private
              Limited (“Agnikul”, “we”, “us” or “our”) and users of its website
              (“you”, “your” or “user”). This agreement (the “Agreement”) also
              governs your use of this website{" "}
              <a href="http://agnikul.in">(http://www.agnikul.in/)</a> (the
              “Site”). By using the Site, you acknowledge that you have reviewed
              and agree to all of the terms of this Agreement and agree to be
              bound by them in connection with your use of the Site. By
              entering, accessing, browsing, submitting information to, or
              otherwise using this site, you acknowledge and agree to the
              following terms and conditions.
            </p>
            <div className="custom-modal-section">
              <p className="custom-modal-head">Intellectual Property</p>
              <p className="custom-modal-text">
                All intellectual property rights in the Site including content,
                graphics and copyright works are owned by us. We exclusively own
                all rights in the compilation, design and layout of the Site.
                <br></br>
                You may access, view and print the content on the Site provided
                that you only use that content for your personal use or
                otherwise in relation to using or considering our services.
                <br></br>
                You must obtain our written permission to copy, reproduce or
                publish any of the content (including graphics, videos,
                photographs or other copyright works) on the Site
              </p>
            </div>
            <div className="custom-modal-section">
              <p className="custom-modal-head">Third Party Websites</p>
              <p className="custom-modal_text">
                From time to time, the Site may include features and
                functionality that allow you to interact with other sites that
                are not under our control, including social media websites. We
                provide these features, functionality, and links to you only as
                a convenience and do not endorse any linked websites or social
                media sites and are not responsible for the contents or
                transmission of any linked websites or social media sites.
              </p>
            </div>
            <div className="custom-modal-section">
              <p className="custom-modal-head">
                Provision of Information and Privacy
              </p>
              <p className="custom-modal-text">
                You are not required to provide personal information to us. If
                you provide information to us, you will ensure that such
                information is accurate and complete.<br></br>
                We collect the personal information provided to us and may use
                it for communicating with you, statistical analysis, and
                research and development.<br></br>
                We do not generally disclose personal information to third
                parties for use for their own purposes. In some instances, we
                may do so, including to our affiliates or providers who complete
                transactions or perform services on our behalf, or if we are
                required to by law.<br></br>
                Any personal information you provide to us may be stored on our
                providers’ secure servers. This may involve transferring your
                information to countries which have less legal protection for
                personal information than the countries in which you or we are
                based.<br></br>
                We may also collect technical data and related information when
                you access or log on to the Site. This may include information
                about your computer/tablet/mobile phone and the way users arrive
                at, browse or interact with the Site. We may collect this
                information through the use of cookies or other means. If you
                want to disable cookies, you can do so by changing your browser
                settings, although this may alter the functionality of the Site.
                We use the technical information collected to have a better
                understanding of how people use the Site and how we might
                improve it
              </p>
            </div>
            <div className="custom-modal-section">
              <p className="custom-modal-head">All Liabilities Excluded</p>
              <p className="custom-modal-text">
                You agree that your use of this Site is at your sole risk.
                Because of the number of possible sources of information
                available through the Site, and the inherent hazards and
                uncertainties of electronic distribution, there may be delays,
                omissions, inaccuracies or other problems with such information.
                <br></br>
                To the extent permitted by law:
              </p>
              <ol>
                <li className="custom-modal-text">
                  all warranties, representations and guarantees are excluded,
                  including suitability, fitness for purpose, appropriateness,
                  availability for use, accuracy or completeness of the Site or
                  the content on or accessed through it;
                </li>
                <li className="custom-modal-text">
                  under no circumstances shall Agnikul or its affiliates, agents
                  or licensors be liable to you or anyone else for any damages
                  (whether direct, indirect, punitive, incidental, special,
                  consequential or otherwise, or whether resulting from tort,
                  contract or other theories of law) including but not limited
                  to attorneys’ fees and lost profits, in connection with, or in
                  any manner arising out of: (1) the use or inability to use
                  this Site and its content; (2) any goods or services obtained
                  through third parties referenced or made available on or
                  through this Site; (3) any errors or omissions in the content
                  or information on the Site; or (4) any computer virus or other
                  programming device, even if Agnikul is advised of the
                  possibility thereof; and
                </li>
                <li className="custom-modal-text">
                  you indemnify us against all loss we suffer or incur as a
                  direct or indirect result of your failure to comply with this
                  Agreement.
                </li>
              </ol>
              <p className="custom-modal-text">
                If you become dissatisfied with this Site, or the terms,
                conditions or policies governing this Site, your sole and
                exclusive remedy is to discontinue using this Site. This
                limitation on damages is essential to the agreement between you
                and us and the Site would not be provided free of charge without
                such limitation.
              </p>
            </div>
            <div className="custom-modal-section">
              <p className="custom-modal-head">
                Governing Law and Jurisdiction
              </p>
              <p className="custom-modal-text">
                The Site, all related content, and this Agreement shall be
                governed by and construed in accordance with the laws of India,
                without regard to the principles of conflicts of laws. The
                courts of Chennai, India shall have exclusive jurisdiction on
                any dispute that arises in relation to this Agreement or your
                use of the Site.
              </p>
            </div>
            <div className="custom-modal-section">
              <p className="custom-modal-head">Amendments</p>
              <p className="custom-modal-text">
                We may amend this Agreement from time to time, and you should
                ensure that you check and read the same regularly. If you
                continue to use the Site after this Agreement is amended, you
                are deemed to have agreed with the new terms of this Agreement.
              </p>
            </div>
            <div className="custom-modal-section">
              <p className="custom-modal-head">Contact</p>
              <p className="custom-modal-text">
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
              <p className="footer-bolder">
                +32 50 31 28 32, +91 99625 075240, <br></br> +91 96772 82356, +1
                551 689 2314
              </p>
            </div>
            <div className="col-sm">
              <p className="footer-normal">Launch Services</p>
              <a href="mailto:payloadpeople@agnikul.in">
                <p className="footer-bold">payloadpeople@agnikul.in</p>
              </a>
            </div>
            <div className="col-sm">
              <p className="footer-normal">Careers</p>
              <a href="mailto:humancapital@agnikul.in">
                <p className="footer-bold">humancapital@agnikul.in</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <p className="footer-normal">Agnikul Cosmos Private Limited.</p>
              <p className="footer-bolder">
                National Center for Combustion R&D, <br></br>3rd floor, IIT
                Madras, <br></br> Chennai 600036
              </p>
            </div>
            <div className="col-sm border-column">
              <p className="footer-normal">
                Agnikul Cosmos Launch Vehicles Private Limited
              </p>
              <p className="footer-bolder">
                Kerala Startup Mission, Technopark, Thejaswini, G3B, Technopark
                Rd, Karyavattom, Thiruvananthapuram, Kerala 695581
              </p>
            </div>
            <div className="col-sm">
              <a href="https://medium.com/agnikuls-blog" target="/blank">
                <p className="footer-bold">Blog</p>
              </a>
              <p className="footer-bold">
                <Link to="/news" className="footer-bold">
                  News
                </Link>
              </p>
              <a
                href="https://www.youtube.com/channel/UCZ4l5Je0PVUvSrHr76vP0wA/featured"
                target="_blank"
              >
                <p className="footer-bold">Videos</p>
              </a>
              <p className="footer-bold book__terms__link">Privacy Policy</p>
              <div className="footer-social-logos">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-google-plus" aria-hidden="true"></i>
                <a href="https://twitter.com/@agnikulcosmos" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/agnikul-cosmos/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
