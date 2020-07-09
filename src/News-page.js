import React, { Component } from 'react';
import "./css/news.css";
import navBar from './js/common';
import Init from './js/news';
import log from "./images/logo.png";
import "swiper/css/swiper.min.css";
import newsHolder from "./images/news/news-placeholder.jpg";

import { Link } from 'react-router-dom';

var newsItems = [
  {
    title: "Chennai-based space tech start-up Agnikul has raised ₹23.4 crores",
    text:
      "Agnikul, operating out of the National Centre for Combustion. Agnikul, operating out of the National Centre for Combustion.",
    link:
      "https://www.thehindu.com/news/cities/chennai/chennai-based-space-tech-start-up-agnikul-has-raised-234-crore/article31097822.ece",
  },
  {
    title:
      "Made in India, for the world: this startup incubated at IIT Madras is an Uber for putting satellites in orbit",
    text:
      "Launching a satellite is, quite literally, rocket science. Which means it is also expensive...",
    link:
      "https://in.finance.yahoo.com/news/made-india-world-startup-incubated-103000795.html",
  },
  {
    title: "Agnikul Cosmos aims for a new orbit",
    text:
      "The lean start-up manufactures rockets that can launch satellites up to 100 kg",
    link:
      "https://www.thehindubusinessline.com/specials/emerging-entrepreneurs/agnikul-cosmos-aims-for-a-new-orbit/article26703929.ece",
  },
  {
    title:
      "IIT Madras-incubated Agnikul is aiming to become the first Indian startup to put small satellites into space",
    text:
      "Over the years, the Indian aerospace industry has achieved major breakthroughs...",
    link:
      "https://yourstory.com/2019/05/iit-madras-startup-agnikul-space-spacex-isro",
  },
  {
    title:
      "Dreams beyond sky! IIT-Madras incubated 'Agnikul' becomes 1st Indian start-up to launch small satellites",
    text:
      "Agnikul, operating out of the National Centre for Combustion. Agnikul, operating out of the National Centre for Combustion...",
    link:
      "https://m.dailyhunt.in/news/india/english/news+bharati-epaper-newsbhar/dreams+beyond+sky+iit+madras+incubated+agnikul+becomes+1st+indian+start+up+to+launch+small+satellites+in+space-newsid-120690176",
  },
  {
    title:
      "Indian start-up is building a three-stage rocket that could be ready to launch by 2022",
    text:
      "With the government opening up the space sector for private investments..",
    link:
      "https://www.businessinsider.in/science/space/news/indian-start-up-is-building-a-three-stage-rocket-that-could-be-ready-to-launch-by-2022/articleshow/76691391.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
  },
  {
    title:
      "It’s win-win as India expands ‘space’ to accommodate private sector",
    text:
      "Srinath Ravichandran heaved a cathartic sigh of relief that helped loosen the knot in his stomach. The CEO & co-founder of Chennai-based start-up Agnikul Cosmos had everything going right, at least directionally.",
    link:
      "https://www.thehindubusinessline.com/news/its-win-win-as-india-expands-space-to-accommodate-private-sector/article31915844.ece",
  },
  {
    title:
      "Isro to move satellites, rockets to its commercial arm NSIL; boost for private sector in space",
    text:
      "India’s space agency will move all its operational satellites, rockets and applications...",
    link:
      "https://economictimes.indiatimes.com/news/science/private-sector-to-be-allowed-to-build-rockets-provide-launch-services-isro-chief-sivan/articleshow/76619366.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
  },
];

class NewsPagination extends Component { 

  constructor(props) {
    super(props);
    this.moveToPage = props.moveToPage;
    this.getCurrent = props.getCurrent;
  
  }

  render() {
  
    var length = Math.ceil(newsItems.length / 6.0);

    var numbers = [];
    for (var i = 1; i <= length; i++)
      numbers.push(i);
    var pagination = this;
    var bullets = numbers.map(function (number) {
      return (<div key={number.toString()}
        className={
          pagination.getCurrent() == number
            ? "news__pagination-bullet active"
            : "news__pagination-bullet"
        }

        onClick={(e) => pagination.moveToPage(number)}
      >
        {number}
      </div>);
         
    });
    return (
      <div className="news__pagination">
        {length > 1 && (
          <div className="news__pagination-inner">
            <div className="news__pagination-bullet" onClick={(e) => this.moveToPage(this.getCurrent() - 1)}>&lt;&lt;</div>
            {bullets}
            <div className="news__pagination-bullet" onClick={(e) => this.moveToPage(this.getCurrent() + 1)}>&gt;&gt;</div>
          </div>
        )}
      </div>
    );
}

}

function NewsRow(offset,numberOfArticles) {

  var newsIndices = [];
  var currNumberOfArticles = Math.min(3, numberOfArticles);
  for (var i = 0; i < currNumberOfArticles; i++)
    newsIndices.push(offset + i);
  var newsCells = newsIndices.map(function (index) {
    
    return (<div className="col-sm">
      <div className="news__card">
        <div className="row">
          <div className="col-xs news__image-div">
          </div>
          <div className="col-xs">
            <div className="news__content">
              <p className="news__title">
                {newsItems[index].title}
                   </p>
              <p className="news__text">
               {newsItems[index].text}
                   </p>
            </div>
            <a
              href={newsItems[index].link}
              target="_blank"
              className="news__link"
            >
              Read Article
                 </a>
          </div>
        </div>
      </div>
    </div>);
  });

  var numberofEmpty = Math.max(0, 3 - currNumberOfArticles);
  var emptyIndices = [];
  for (var i = 0; i < numberofEmpty; i++) emptyIndices.push(i);
  var emptyCells = emptyIndices.map(function (number) {
    return (<div className="col-sm news__empty-cell"></div>)
  });

  return (
    <div className="row">
      {newsCells}
      {numberOfArticles < 3 && emptyCells}
    </div>
  );

}

function NewsTable(props) {
  var current = props.current;
  var offset = (current - 1) * 6;
  var numberOfArticles = Math.min(6, newsItems.length - offset);
  var firstRow = NewsRow(offset, numberOfArticles);
  var secondRow = undefined;
  if (numberOfArticles > 3)
    secondRow = NewsRow(offset + 3, numberOfArticles - 3);
  return (
    <div className="container-fluid news__div">
      {firstRow}
      {numberOfArticles > 3 && secondRow}
    </div>
  );
}

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 1,
    };

    this.moveToPage = this.moveToPage.bind(this);
    this.getCurrent = this.getCurrent.bind(this);
  }

  moveToPage(number) {
    if (number > Math.ceil(newsItems.length / 6.0 ) || number < 1)
      return;
    this.setState({
      current: number,
    });
  }

  

  getCurrent() {
    return this.state.current;
  }

  render() {
    Init(); // function to initialize animations and swipers
    console.log(this.state.current);
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
            {/* <div className="column-md">
              <Link to="/launch-sites" className="nav-itemc nav-linkc">
                Launch Sites
              </Link>
            </div> */}
            <div className="column">
              <Link to="/team" className="nav-itemc nav-linkc">
                Team
              </Link>
            </div>
            <div className="column">
              <Link to="/news" className="nav-itemc nav-linkc active">
                News
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
        <div className="news__title-div">
          <p className="news__title-div-heading">News & Updates</p>
          {/* <p className="news__title-div-text">
            Our executive team draws on decades of experience across multiple
            successful technology startups and helps guide the company towards
            its strategic goals.
          </p> */}
        </div>

        <NewsTable current={this.state.current}></NewsTable>
        <NewsPagination
          moveToPage={this.moveToPage}
          getCurrent={this.getCurrent}
        ></NewsPagination>

        {/* ****************FOOTER AND MODAL FOR PRIVACY POLICY****************** */}
        <div className="custom-modal-out">
          <div className="custom-modal-outer">
            <div className="custom-modal">
              <p className="close-icon">X</p>
              <p className="custom-modal-heading">
                TERMS, CONDITIONS AND PRIVACY POLICY
              </p>
              <p className="custom-modal-text">
                These terms of use are an agreement between Agnikul Cosmos
                Private Limited (“Agnikul”, “we”, “us” or “our”) and users of
                its website (“you”, “your” or “user”). This agreement (the
                “Agreement”) also governs your use of this website{" "}
                <a href="http://agnikul.in">(http://www.agnikul.in/)</a> (the
                “Site”). By using the Site, you acknowledge that you have
                reviewed and agree to all of the terms of this Agreement and
                agree to be bound by them in connection with your use of the
                Site. By entering, accessing, browsing, submitting information
                to, or otherwise using this site, you acknowledge and agree to
                the following terms and conditions.
              </p>
              <div className="custom-modal-section">
                <p className="custom-modal-head">Intellectual Property</p>
                <p className="custom-modal-text">
                  All intellectual property rights in the Site including
                  content, graphics and copyright works are owned by us. We
                  exclusively own all rights in the compilation, design and
                  layout of the Site.<br></br>
                  You may access, view and print the content on the Site
                  provided that you only use that content for your personal use
                  or otherwise in relation to using or considering our services.
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
                  provide these features, functionality, and links to you only
                  as a convenience and do not endorse any linked websites or
                  social media sites and are not responsible for the contents or
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
                  may do so, including to our affiliates or providers who
                  complete transactions or perform services on our behalf, or if
                  we are required to by law.<br></br>
                  Any personal information you provide to us may be stored on
                  our providers’ secure servers. This may involve transferring
                  your information to countries which have less legal protection
                  for personal information than the countries in which you or we
                  are based.<br></br>
                  We may also collect technical data and related information
                  when you access or log on to the Site. This may include
                  information about your computer/tablet/mobile phone and the
                  way users arrive at, browse or interact with the Site. We may
                  collect this information through the use of cookies or other
                  means. If you want to disable cookies, you can do so by
                  changing your browser settings, although this may alter the
                  functionality of the Site. We use the technical information
                  collected to have a better understanding of how people use the
                  Site and how we might improve it
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">All Liabilities Excluded</p>
                <p className="custom-modal-text">
                  You agree that your use of this Site is at your sole risk.
                  Because of the number of possible sources of information
                  available through the Site, and the inherent hazards and
                  uncertainties of electronic distribution, there may be delays,
                  omissions, inaccuracies or other problems with such
                  information.<br></br>
                  To the extent permitted by law:
                </p>
                <ol>
                  <li className="custom-modal-text">
                    all warranties, representations and guarantees are excluded,
                    including suitability, fitness for purpose, appropriateness,
                    availability for use, accuracy or completeness of the Site
                    or the content on or accessed through it;
                  </li>
                  <li className="custom-modal-text">
                    under no circumstances shall Agnikul or its affiliates,
                    agents or licensors be liable to you or anyone else for any
                    damages (whether direct, indirect, punitive, incidental,
                    special, consequential or otherwise, or whether resulting
                    from tort, contract or other theories of law) including but
                    not limited to attorneys’ fees and lost profits, in
                    connection with, or in any manner arising out of: (1) the
                    use or inability to use this Site and its content; (2) any
                    goods or services obtained through third parties referenced
                    or made available on or through this Site; (3) any errors or
                    omissions in the content or information on the Site; or (4)
                    any computer virus or other programming device, even if
                    Agnikul is advised of the possibility thereof; and
                  </li>
                  <li className="custom-modal-text">
                    you indemnify us against all loss we suffer or incur as a
                    direct or indirect result of your failure to comply with
                    this Agreement.
                  </li>
                </ol>
                <p className="custom-modal-text">
                  If you become dissatisfied with this Site, or the terms,
                  conditions or policies governing this Site, your sole and
                  exclusive remedy is to discontinue using this Site. This
                  limitation on damages is essential to the agreement between
                  you and us and the Site would not be provided free of charge
                  without such limitation.
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">
                  Governing Law and Jurisdiction
                </p>
                <p className="custom-modal-text">
                  The Site, all related content, and this Agreement shall be
                  governed by and construed in accordance with the laws of
                  India, without regard to the principles of conflicts of laws.
                  The courts of Chennai, India shall have exclusive jurisdiction
                  on any dispute that arises in relation to this Agreement or
                  your use of the Site.
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">Amendments</p>
                <p className="custom-modal-text">
                  We may amend this Agreement from time to time, and you should
                  ensure that you check and read the same regularly. If you
                  continue to use the Site after this Agreement is amended, you
                  are deemed to have agreed with the new terms of this
                  Agreement.
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <div className="footer-section">
                  <p className="footer-normal phone">Phone</p>
                  <p className="footer-bolder">+91 99625 075240</p>
                  <p className="footer-bolder">+91 96772 82356</p>
                  <p className="footer-bolder">+1 551 689 2314</p>
                </div>
              </div>
              <div className="col-sm border-column">
                <div className="footer-section">
                  <p className="footer-normal">Addresses</p>
                  <p className="footer-bolder">
                    Agnikul Cosmos Private Limited.
                  </p>
                  <p className="footer-bold">
                    National Center for Combustion R&D, <br></br>3rd floor, IIT
                    Madras, <br></br> Chennai 600036
                  </p>
                </div>
              </div>
              <div className="col-sm">
                <div className="footer-section footer-feel-free">
                  <p className="footer-normal">
                    Curious to know more about us ? Reach out to
                  </p>
                  <a href="mailto:curious@agnikul.in">
                    <p className="footer-bolder">curious@agnikul.in</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="footer-section">
                  <p className="footer-normal">Email</p>
                  <a href="mailto:humancapital@agnikul.in">
                    <p className="footer-bolder">humancapital@agnikul.in</p>
                  </a>
                  <a href="mailto:payloadpeople@agnikul.in">
                    <p className="footer-bolder">payloadpeople@agnikul.in</p>
                  </a>
                </div>
              </div>
              <div className="col-sm border-column">
                <div className="footer-section">
                  <p className="footer-bolder">
                    Agnikul Cosmos Launch Vehicles Private Limited
                  </p>
                  <p className="footer-bold">
                    Kerala Startup Mission, Technopark, Thejaswini, G3B,
                    Technopark Rd, Karyavattom, Thiruvananthapuram, Kerala
                    695581
                  </p>
                </div>
              </div>
              <div className="col-sm">
                <div className="footer-section">
                  <div className="row">
                    <div className="col-xs">
                      <a
                        href="https://medium.com/agnikuls-blog"
                        target="_blank"
                      >
                        <p className="footer-bolder">Blog</p>
                      </a>
                    </div>
                    <div className="col-xs">
                      <Link to="/news" className="footer-bolder">
                        <p className="footer-bolder">News</p>
                      </Link>
                    </div>
                    <div className="col-xs">
                      <a
                        className="footer-bolder"
                        href="https://www.youtube.com/channel/UCZ4l5Je0PVUvSrHr76vP0wA/featured"
                        target="_blank"
                      >
                        <p className="footer-bolder">Videos</p>
                      </a>
                    </div>
                  </div>
                  <p className="footer-bolder book__terms__link">
                    Terms,Conditions and Privacy Policy
                  </p>
                  <div className="footer-social-logos">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                    <a
                      href="https://twitter.com/@agnikulcosmos"
                      target="_blank"
                    >
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
      </div>
    );
  }
}

export default News;