import React from "react";
import "./css/career.css";
import navBar from "./js/common";
import Init from "./js/career";
import log from "./images/logo.png";
import orbit from "./images/form-icons/orbital-inclination.png";
import payload from "./images/form-icons/payload-mass.png";
import { Link } from "react-router-dom";
import down from "./images/form-icons/down-arrow.png";
import office from "./images/form-icons/office.png";
import job from "./images/form-icons/job.png";

function Career() {
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
            <Link to="/career" className="nav-itemc nav-linkc active">
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
      <div className="container-fluid custom-form career__form">
        <p className="career__section-head">Careers</p>
        <form>
          <div className="row">
            <div className="col-sm">
              <div className="dropdown">
                <button
                  className="custom-form-control dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xs">
                      <img src={office} className="custom"></img>
                    </div>
                    <div className="col">
                      <p className="form-control-name" id="crew-field">
                        CREW
                      </p>
                    </div>
                    <div className="col-xs">
                      <img className="arrow" src={down} />
                    </div>
                  </div>
                </button>
                <div
                  className="dropdown-menu custom-form-options"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="custom-form-options-inner" id="crew">
                    <p className="dropdown-item" id="elec">
                      Electrical & Electronics Crew
                    </p>
                    <p className="dropdown-item" id="sw">
                      Software Crew
                    </p>
                    <p className="dropdown-item" id="sws">
                      Structural Systems Crew
                    </p>
                    <p className="dropdown-item" id="fls">
                      Fluid Systems Crew
                    </p>
                    <p className="dropdown-item" id="op">
                      Operations Crew
                    </p>
                    <p className="dropdown-item" id="lase">
                      Launch Services Crew
                    </p>
                    <p className="dropdown-item" id="fiac">
                      Finance and Accounting Crew
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="dropdown">
                <button
                  className="custom-form-control dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xs">
                      <img src={job} className="custom"></img>
                    </div>
                    <div className="col">
                      <p className="form-control-name" id="job-field">
                        JOB
                      </p>
                    </div>
                    <div className="col-xs">
                      <img className="arrow" src={down} />
                    </div>
                  </div>
                </button>
                <div
                  className="dropdown-menu custom-form-options"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="custom-form-options-inner" id="job">
                    <p className="dropdown-item" href="#">
                      Select a Crew
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="career__description visible" id="blank">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="career__description" id="other-profiles-desc">
          <br></br>
          <br></br>
          <p className="career__text">
            We have a few more exciting profiles. If you are curious, please
            send your resume in PDF format and a 3 line email describing - who
            you are, why you want to apply to Agnikul and something interesting
            about yourself, Send emails to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="maker-or-fabricator-mechanical-desc"
        >
          <p className="career__job">Associate Fabricator</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Responsible for overseeing the build and inspection process for
                the structural assembly and integration of the Flight systems
              </li>
              <li className="career__text">
                Develop, qualify, and refine manufacturing processes to bring
                vehicle hardware from prototype to flight quality.
              </li>
              <li className="career__text">
                Work with design engineers & Senior Manufacturing Buff to
                evaluate designs for manufacturability and implementation in a
                rapidly-evolving production environment
              </li>
              <li className="career__text">
                Quickly resolve non-conformances and work with the Quality team
                to implement root cause corrective actions.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <p className="career__text">
              Diploma degree in mechanical or aerospace engineering
              <br></br>or<br></br>
              3+ years of experience in a manufacturing environment
              (internship/co-op experience will be considered)
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="careers__text">
                Bachelor’s degree in mechanical, chemical, or aerospace
                engineering
              </li>
              <li className="careers__text">
                Knowledge of metallic manufacturing techniques, processes, and
                equipment related to machining, welding, drilling, and
                automation
              </li>
              <li className="careers__text">
                Mechanical component and/or tooling design and analysis (3D
                computer-aided design)
              </li>
              <li className="careers__text">
                Ability to write detailed repair reports (advanced MS Office
                skills)
              </li>
              <li className="careers__text">
                Experience with process development from R&D to high-volume
                manufacturing
              </li>
              <li className="careers__text">
                Experience writing work instructions and procedures for critical
                aerospace parts
              </li>
              <li className="careers__text">
                Experience in a production environment within the aerospace
                industry
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="careers__text">
                Position may require extended work hours
              </li>
              <li className="careers__text">
                Position requires working directly with hardware on the floor
                for extended periods of time
              </li>
              <li className="careers__text">
                Must be available to work extended hours and weekends as needed
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location:{" "}
            <span className="career__text">IIT Madras, Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself, Send emails to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="maker-or-fabricator-avionics-desc"
        >
          <p className="career__job">Associate Fabricator</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Responsible for overseeing the build and inspection process for
                the electrical and electronics assembly for the integration of
                flight systems
              </li>
              <li className="career__text">
                Develop, qualify, and refine manufacturing processes to bring
                vehicle computer hardware from prototype to flight quality.
              </li>
              <li className="career__text">
                Responsible for interfacing the data acquisitions systems with
                the flight hardware and control systems.
              </li>
              <li className="career__text">
                Work with design engineers & Senior Manufacturing Buff to
                evaluate designs for manufacturability and implementation in a
                rapidly-evolving production environment
              </li>
              <li className="career__text">
                Quickly resolve non-conformances and work with the Quality team
                to implement root cause corrective actions.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <p className="career__text">
              Diploma degree in Electronics or Mechatronics engineering
              <br></br>or<br></br>A minimum of 2 year of maintenance technician
              experience
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="careers__text">
                Bachelor’s degree in electronics engineering technology degree
              </li>
              <li className="careers__text">
                Experience with thermal vacuum testing
              </li>
              <li className="careers__text">
                Experience with vibration and shock testing.
              </li>
              <li className="careers__text">
                Ability to write detailed repair reports (advanced MS Office
                skills)
              </li>
              <li className="careers__text">
                Some experience in space, aviation, military or other
                high-reliability operating environments is highly desirable.
              </li>
              <li className="careers__text">
                Software skills- LabVIEW or Python desired
              </li>
              <li className="careers__text">
                Capable of working with diverse electrical test equipment analog
                and digital and RF.
              </li>
              <li className="career__text">Strong team working skills.</li>
              <li className="career__text">Excellent attention to detail.</li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="careers__text">
                Must be available to work extended hours and weekends as needed
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location:{" "}
            <span className="career__text">IIT Madras, Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself, Send emails to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div className="career__description" id="electric-motor-designer-desc">
          <p className="career__job">Electric Motor Designer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <p className="career__text">
              If you like to think what goes around, comes around - this is for
              you
            </p>
            <p className="career__text">
              If you have wondered why magnetic poles are never lonely - this is
              for you
            </p>
            <p className="career__text">
              If you have wondered if every motor is a Faraday's cage - this is
              for you
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Leads/owns the electromagnetic development of custom
                high-performance electric motors and actuators across PMDC, AC
                Inductor Motors and/or brushless DC motor.
              </li>
              <li className="career__text">
                Design of all aspects of AC universal motor (magnetic circuit,
                winding, brushes, brush holder, commutator, material selection.)
              </li>
              <li className="career__text">
                Understand the development of alternate motor types such as High
                Voltage PM DC and Brushless DC motors, high frequency induction
                motors etc.
              </li>
              <li className="career__text">
                Support in selection of Brushless DC electric motor and PMDC
                motors.
              </li>
              <li className="career__text">
                Ownership of all aspects of motor design including motor system
                mechanical and electrical components such as armature, output
                shaft, terminals, etc.Aids in the creation of CAD and 2D
                drawings for stators, rotors and assemblies
              </li>
              <li className="career__text">
                Develops the design for winding architecture, magnetic
                architecture, flux carrier stamping and lamination joining,
              </li>
              <li className="career__text">
                Creates framework for insulation systems, interconnections,
                thermal systems, sensing, Identifying and qualifying suppliers
                of raw materials, components, and assemblies
              </li>
              <li className="career__text">
                Validates performance and derives and delivers a durability
                testing profile
              </li>
              <li className="career__text">
                Designs keeping in mind - DFM, cost reductions, and second
              </li>
              <li className="career__text">
                Architects and performs thermal performance analysis for
                magnetic designs
              </li>
              <li className="career__text">
                Be able to perform : GD&T, 3D & 2D Drawings, DFMEA, PFMEA,
                structural & thermal FEA
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">EXPERIENCE</p>
            <ul>
              <li className="careers__text">
                BS or MS in Mechanical or Electrical Engineering or similar
                discipline
              </li>
              <li className="careers__text">
                2+ years’ work experience in motor design or electrical machines
              </li>
              <li className="careers__text">
                Experience and familiarity with Finite Element Analysis,
              </li>
              <li className="careers__text">
                Experience and familiarity with electro-magnetics, 3 phase power
                systems
              </li>
              <li className="careers__text">
                Experience with building of prototypes
              </li>
              <li className="careers__text">
                Experience with SolidWorks is a plus
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="careers__text">
                Must be available to work extended hours and weekends as needed
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have designed one of the most compact electric motors
                in the world!
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO
              </li>
              <li className="career__text">
                You will work on shaping space policy in India
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself, Send emails to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="embedded-systems-software-developer-desc"
        >
          <p className="career__job">Embedded Software Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you make typos such as “keil down” instead of “kneel down” -
                this is for you
              </li>
              <li className="career__text">
                If “assembly line” means one line of code - this is for you
              </li>
              <li className="career__text">
                If you think the next cricket match version should be “8080” -
                this is for you
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Design, develop and test (not necessarily space hardened)
                avionics firmware that will support the functions of our launch
                vehicles and test systems.
              </li>
              <li className="career__text">
                Strong firmware debugging capabilities with respect to embedded
                system issues
              </li>
              <li className="career__text">
                Create firmware systems with efficiency, modularity,
                extensibility, and robustness
              </li>
              <li className="career__text">
                Design communication protocols and demonstrate the ability to
                work with I2C, SPI, UART, USB, CAN and Ethernet.
              </li>
              <li className="career__text">
                Support through production and testing phase is expected
              </li>
              <li className="career__text">
                Design and lead boards with different MCUs(Cortex M4, MSP),
                peripherals, features, and development environments.
              </li>
              <li className="career__text">
                Define board schematics and know EE fundamentals
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor of Science Degree in Electrical Engineering, Computer
                Engineering or Physics.
              </li>
              <li className="career__text">
                Proficient in C and C++ embedded firmware development
              </li>
              <li className="career__text">
                Experience with FPGA programming is a plus
              </li>
              <li className="career__text">
                Simple soldering and rework experience is a plus
              </li>
              <li className="career__text">
                Professional experience with experience in fast-paced projects
                (non-aerospace is okay); CPU-based circuit cards, consumer
                electronics, wireless devices, and/or low power platforms.
              </li>
              <li className="career__text">
                Professional experience with analog, digital or mixed-signal
                design principles including designs using operational
                amplifiers, filters, and transistors.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="careers__text">
                Masters of Science Degree in Electrical Engineering, Computer
                Engineering or equivalent area of focus.
              </li>
              <li className="careers__text">
                2+ years of board level experience designing hardware from
                concept through production; strong emphasis on full lifecycle
                development of new hardware systems -- not small incremental
                updates to legacy hardware
              </li>
              <li className="careers__text">
                Strong understanding of computers and programming languages
                (C/C++, Matlab, Assembly language).
              </li>
              <li className="careers__text">
                Ability to work in a fast paced, autonomously driven, and
                demanding start-up atmosphere
              </li>
              <li className="careers__text">
                Excellent communication skills both written and verbal.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="careers__text">
                Must be available to work extended hours and weekends as needed
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have designed one of the most compact electric motors
                in the world!
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO
              </li>
              <li className="career__text">
                You will work on shaping space policy in India
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself, Send emails to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="launch-vehicle-structural-engineer-desc"
        >
          <p className="career__job">
            Launch Vehicle Structural Vehicle Engineer
          </p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES ?</p>
            <ul>
              <li className="career__text">
                If you have wondered where the center of gravity of the Penrose
                Stairs lies, this is for you.
              </li>
              <li className="career__text">
                Even better if you have spent more than 100 hours trying to
                figure out the best material for Space Elevator Tethers.
              </li>
              <li className="career__text">
                Preferably, you have also googled: "Inconel vs. carbon
                composites for 3d printing"
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Responsible for build of initial development hardware, ensuring
                efficient manufacturability and modifying design as needed
                (Can’t “stress” this point enough - pun intended)
              </li>
              <li className="career__text">
                Perform, document, and present static, dynamic, custom-modal,
                thermo-mechanical, fatigue and fracture analyses
              </li>
              <li className="career__text">
                Perform initial sizing analyses by hand calculation, detailed
                structural analysis using Finite element analysis tools
              </li>
              <li className="career__text">
                Perform detailed fluid system layout and/or mechanical design
                utilizing CAD and understanding of materials
              </li>
              <li className="career__text">
                Seek out and evaluate state-of-the-art analysis techniques and
                tools
              </li>
              <li className="career__text">
                Identify and procure long lead items such as machining parts,
                seals, forgings, etc.
              </li>
              <li className="career__text">
                Coordinate and perform development and qualification efforts of
                hardware
              </li>
              <li className="career__text">
                Design and build testing equipment or stands
              </li>
              <li className="career__text">
                Manage the transition from development to production for flight
                quality hardware
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor’s degree in an engineering discipline
              </li>
              <li className="career__text">
                Experience with Finite Element Analysis (FEA) and commercial
                tools
              </li>
              <li className="career__text">
                Excellent understanding of fatigue and fracture mechanics
                principles
              </li>
              <li className="career__text">
                Ability to work extended hours and weekends as needed
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="careers__text">
                Master’s degree or PhD in an engineering discipline
              </li>
              <li className="careers__text">
                Strong background in solid mechanics and structural dynamics
                (custom-modal, transient, and random vibration analysis)
              </li>
              <li className="careers__text">
                Expert on fatigue, crack initiation, propagation mechanisms and
                metallic failure prevention
              </li>
              <li className="careers__text">
                Familiar with crack growth analysis codes
              </li>
              <li className="careers__text">
                Excellent oral and written communication skills
              </li>
              <li className="careers__text">
                Ability to deliver against an aggressive schedule
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="careers__text">
                Must be available to work extended hours and weekends as needed
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO
              </li>
              <li className="career__text">
                You will work on shaping space policy in India
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself, Send emails to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="mission-design-software-developer-desc"
        >
          <p className="career__job">Mission Design Software Developer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you belong to the category of typing a semicolon instead of a
                full stop, this is for you; //(We are syntax agnostic in our
                search though (any language experience is okay!);)
              </li>
              <li className="career__text">
                If you see a car's headlights and wonder what happened to your
                ability for abstraction, this is for you
              </li>
              <li className="career__text">
                If you can see a launch vehicle as a 21st century robot, this is
                for you
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Optimize trajectories the launch vehicle will have to fly in to
                get to orbit
              </li>
              <li className="career__text">
                Work with Propulsion and GNC Engineers to code engine
                characterization, carry out simulations, and integrate programs
                into flight control algorithms;
              </li>
              <li className="career__text">
                Work interdisciplinary trades (e.g. with Avionics, GNC, Thermal,
                and Structures) that result in the most optimal vehicle level
                configuration;
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor’s degree in computer science, physics, electrical
                engineering, or equivalent engineering discipline;
              </li>
              <li className="career__text">
                Understands the basic physics behind projectile motion;
              </li>
              <li className="career__text">
                Applied experience coding in an object-oriented language;
              </li>
              <li className="career__text">
                Ability to work long hours, weekends etc. if needed (almost
                always!);
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Ability to design and implement robust and scalable systems with
                flexible and scalable UI
              </li>
              <li className="career__text">
                Professional experience with standard front-end technologies
                like modern HTML, CSS, JavaScript (we use AngularJS, Polymer,
                Backbone.js, React, and more), REST, JSON
              </li>
              <li className="career__text">
                Deep understanding of object oriented programming
              </li>
              <li className="career__text">
                Deep understanding of distributed, horizontally scalable systems
              </li>
              <li className="career__text">
                Experiences with cloud technologies such as AWS, Azure or Google
                Cloud Engine
              </li>
              <li className="career__text">
                Focus on performance bottlenecks and performance improvement
                techniques
              </li>
              <li className="career__text">
                Familiar with basic principles of compressible and
                incompressible flow, thermodynamics, thermochemistry, mechanics,
                materials, and electrical circuits
              </li>
              <li className="career__text">
                A background in scientific computing, high-performance
                computing, or mathematics
              </li>
              <li className="career__text">
                Strong skills with debuggers, profilers, and unit testing
              </li>
              <li className="career__text">
                Interest in/competence with multiple languages and technologies
                (Python, C++, MATLAB, SQL)
              </li>
              <li className="career__text">
                Familiar with Agile software development techniques,
                particularly Test-Driven Development, and Continuous Integration
              </li>
              <li className="career__text">
                Experience with database management
              </li>
              <li className="career__text">
                Able to prioritize and execute tasks in a high-pressure
                environment with ongoing drive for continuous improvement in all
                aspects of work
              </li>
              <li className="career__text">
                Excellent communication skills and ability to succinctly present
                recommendations to stakeholders, the customer, and management
              </li>
              <li className="career__text">
                Able to work well in an integrated collaborative team
                environment, including frequent interactions with technicians,
                other engineers, and managers
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="careers__text">
                Must be available to work extended hours and weekends as needed
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO
              </li>
              <li className="career__text">
                You will work on shaping space policy in India
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself, Send emails to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="power-electronics-engineer-desc"
        >
          <p className="career__job">Power Electronics Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you end up saying "SMPS me" instead of "SMS me" when you want
                someone to message you - this is for you.
              </li>
              <li className="career__text">
                If you understand jokes like "Life is a bunch of bucks and
                boosts" - this is for you.
              </li>
              <li className="career__text">
                If you wished MOSFET's were current controlled devices or BJTs
                are voltage controlled devices - this is definitely for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Create the fundamental power electronics architecture and
                associated software and hardware systems for Agnikul's vehicle
              </li>
              <li className="career__text">
                Contribute engineering expertise in design, study, and testing
                of DC-DC power converters for harsh environments
              </li>
              <li className="career__text">
                Deliver on power system and sub-system level design trades and
                develop requirements at a system level and a component level.
              </li>
              <li className="career__text">
                Design DC-DC topologies and select optimal architectures and
                components for board level power
              </li>
              <li className="career__text">
                Design, handle and test systems with lithium-ion battery with
                due respect for their safety, and usage
              </li>
              <li className="career__text">
                Design AC-DC converters for both flight and ground systems
              </li>
              <li className="career__text">
                Design extremely compact AC-DC converters with a special focus
                on mechanical design
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelors / Master's degree in electrical engineering, power
                systems or electronics engineering or any degree that enhanced
                your ability to model and deal with power electronics
              </li>
              <li className="career__text">
                Ability to work long hours and weekends as needed.
              </li>
              <li className="career__text">
                Experience in modeling, simulation, and testing of power
                electronics
              </li>
              <li className="career__text">
                Working experience in voltage and current mode control and
                compensator.
              </li>
              <li className="career__text">
                Familiarity with power supply testing and packaging for harsh
                environments
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="careers__text">
                Must be available to work extended hours and weekends as needed
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have designed one of the most compact electric drives
                in the world!
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO
              </li>
              <li className="career__text">
                You will work on shaping space policy in India
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself, Send emails to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="space-robotics-and-control-engineer-desc"
        >
          <p className="career__job">Space Robotics and Controls Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you like to think the other extreme of the north pole is
                north “zero” - this is for you{" "}
              </li>
              <li className="career__text">
                If you don’t need someone to tell you LQR is good enough - this
                is for you
              </li>
              <li className="career__text">
                If you believe lead-lag compensation is the essence of all human
                interactions - this is for you
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Works on independent sections of controller design and
                integration process for launch vehicle control systems and
                related components in the vehicle’s guidance systems
              </li>
              <li className="career__text">
                Specifically,
                <ul>
                  <li className="career__text">
                    Aid in the development of Autopilot linear stability testing
                    and analysis
                  </li>
                  <li className="career__text">
                    Design Non-linear 6DOF simulation analysis and scenario
                    analysis
                  </li>
                  <li className="career__text">
                    Review system level and launch vehicle requirements
                  </li>
                  <li className="career__text">
                    Lead development and maintenance of software tools that
                    predict pre-flight performance under nominal, off-nominal
                    conditions
                  </li>
                  <li className="career__text">
                    Perform post flight verification of simulation predictions
                    and Monte Carlo through multiple flight conditions
                  </li>
                  <li className="career__text">
                    Create hazards assessment programs and tools to understand
                    probability of impact and expected damage from off-nominal
                    and failure modes
                  </li>
                  <li className="career__text">
                    Support design reviews and milestones as necessary
                  </li>
                </ul>
              </li>
              <li className="career__text">
                Assists independent sections of propulsion control systems
              </li>
              <li className="career__text">
                Aid specifically, the development of some or all of the
                following
                <ul>
                  <li className="career__text">
                    Design of Mixture ratio control & stability analysis
                  </li>
                  <li className="career__text">
                    Integration of mixture ratio control, electric motor speed
                    control and propellant utilization loops
                  </li>
                  <li className="career__text">
                    Development of system level requirements for cross coupled
                    dynamics between propellant utilization algorithms and
                    vehicle guidance / autopilot algorithms
                  </li>
                  <li className="career__text">
                    Support design reviews and milestones as necessary
                  </li>
                </ul>
              </li>
              <li className="career__text">
                Supports hardware design & implementation of the vehicle across
                multiple control systems
                <ul>
                  <li className="career__text">
                    Analog and mixed signal design with focus on launch vehicle
                    hardware
                  </li>
                  <li className="career__text">
                    Board level design for both ground checkout systems and
                    flight hardware
                  </li>
                  <li className="career__text">
                    Support design reviews and milestones as necessary
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelors / Master’s Degree in Controls Engineering, Electrical
                engineering, Electronics & Communications engineering
              </li>
              <li className="career__text">
                Highly developed computer skills using EE design/analysis
                software
              </li>
              <li className="career__text">
                Decent software programming skills
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Ph.D. in Electrical engineering, Electronics & Communications
                engineering
              </li>
              <li className="career__text">
                Good understanding of product development and Control network
                (CAN)
              </li>
              <li className="career__text">
                1+ experience with mechanical systems and engines
              </li>
              <li className="career__text">
                Good understanding of engine controller design and
                implementation.
              </li>
              <li className="career__text">
                Good understanding of orbital mechanics, multi-body dynamics,
                and controls-structures interaction
              </li>
              <li className="career__text">
                Experience with static constrained optimization, calculus of
                variations, dynamic optimization, maximum principle
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="careers__text">
                Must be available to work extended hours and weekends as needed
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO
              </li>
              <li className="career__text">
                You will work on shaping space policy in India
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself, Send emails to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="vehicle-dynamics-engineer-desc"
        >
          <p className="career__job">Vehicle Dynamics Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you know why water tanker lorries in India have their tops
                open - this is for you. (Even better if you have tried to model
                slosh dynamics of a water tanker lorry)
              </li>
              <li className="career__text">
                If you can mathematically predict the instantaneous position and
                velocity of how your life will evolve - this is for you.
              </li>
              <li className="career__text">
                If you like designing autopilots - this is definitely for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Design, analyze and build flight dynamics models for launch
                vehicles
              </li>
              <li className="career__text">
                Design high fidelity simulations of hypersonic flight systems,
                deriving from experience in flight dynamics, navigation,
                guidance, and control.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelors / Master's degree in controls engineering, aerospace
                or mechanical engineering or any degree that enhanced your
                ability to model systems mathematically
              </li>
              <li className="career__text">
                2-3 years of experience in mathematically modeling system
                dynamics
              </li>
              <li className="career__text">
                A fascination to bring space closer to everyone on earth
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Master's degree in aeronautical/astronautical, aerospace or
                mechanical engineering
              </li>
              <li className="career__text">
                Understanding of software-in-the-loop and hardware-in-the-loop
                development
              </li>
              <li className="career__text">
                Design and analyze control approaches for complex vehicle
                systems, leveraging modern synthesis and analysis methods.
              </li>
              <li className="career__text">
                Be able to understand vehicle plant dynamics and select
                appropriate control methods
              </li>
              <li className="career__text">
                Research and create launch vehicle guidance algorithm
              </li>
              <li className="career__text">
                Understanding of system dynamics, trajectory optimization to
                develop algorithms suitable for simulation and onboard use.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="careers__text">
                Must be available to work extended hours and weekends as needed
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO
              </li>
              <li className="career__text">
                You will work on shaping space policy in India
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself, Send emails to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
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

export default Career;
