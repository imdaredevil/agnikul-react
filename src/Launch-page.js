import React from 'react';
import "./css/launch.css";
import navBar from './js/common';
import Init from './js/launch';
import log from "./images/logo.png";

import { Link } from 'react-router-dom';


function Launch(){

    Init();

    return (
        <div className="body">
      <div className="navBar">
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
                <Link to="/launch-sites" className="nav-itemc nav-linkc active">
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
            <div className="column-md">
                <Link to="/news" className="nav-itemc nav-linkc">
                    News
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
     
    <p className="launch__section-head">Launch-Sites</p>
    <p className="launch__section-head-text">Pavel is a writer and researcher who studied digital humanities and new media. 
        Being addicted to large amount of information, he produces an appropriate.</p>
    
    <div className="launch__overall-div">
    <div className="launch__location-swiper">
        <div className="launch__swiper-wrapper">
            <div className="launch__location__swiper-slide">
                <div id="chennai" className="launch__location__slide-content">
                <p className="launch__location__slide-number">01</p>
                <p className="launch__location__slide-name">Chennai</p>
                <p className="launch__location__slide-country">INDIA</p>
                <p className="launch__location__slide-desc">
                    Construction is currently underway on a second launch pad at Launch Complex 1. 
                </p>
            </div>
            </div>
            <div className="launch__location__swiper-slide">
                <div id="beijing" className="launch__location__slide-content">
                <p className="launch__location__slide-number">02</p>
                <p className="launch__location__slide-name">Beijing</p>
                <p className="launch__location__slide-country">INDIA</p>
                <p className="launch__location__slide-desc">
                    Construction is currently underway on a second launch pad at Launch Complex 1. 
                </p>
            </div>
            </div>
            <div className="launch__location__swiper-slide">
                <div id="kolkata" className="launch__location__slide-content">
                <p className="launch__location__slide-number">03</p>
                <p className="launch__location__slide-name">Kolkata</p>
                <p className="launch__location__slide-country">INDIA</p>
                <p className="launch__location__slide-desc">
                    Construction is currently underway on a second launch pad at Launch Complex 1. 
                </p>
            </div>
            </div>
            <div className="launch__location__swiper-slide">
                <div id="ahmedabad" className="launch__location__slide-content">
                <p className="launch__location__slide-number">04</p>
                <p className="launch__location__slide-name">Ahmedabad</p>
                <p className="launch__location__slide-country">INDIA</p>
                <p className="launch__location__slide-desc">
                    Construction is currently underway on a second launch pad at Launch Complex 1. 
                </p>
            </div>
            </div>
            <div className="launch__location__swiper-slide">
                <div id="rajastan" className="launch__location__slide-content">
                <p className="launch__location__slide-number">05</p>
                <p className="launch__location__slide-name">Rajastan</p>
                <p className="launch__location__slide-country">INDIA</p>
                <p className="launch__location__slide-desc">
                    Construction is currently underway on a second launch pad at Launch Complex 1. 
                </p>
            </div>
            </div>
        </div>
    </div>
    <div className="launch__world-map">
        <svg id="world" width="772px" height="379px" viewBox="0 0 782 379" version="1.1">
            <g id="continents">
                <g id="south-america" transform="translate(184.000000, 215.000000)" fill="#F70044">
                    <circle id="Oval-Copy-1452" cx="18" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-1448" cx="18" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1446" cx="10" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1445" cx="2" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1444" cx="18" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1442" cx="10" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1441" cx="2" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1440" cx="18" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1438" cx="10" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1437" cx="2" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1436" cx="18" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1434" cx="10" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1433" cx="2" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1432" cx="18" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1430" cx="10" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1429" cx="2" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1428" cx="18" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1426" cx="10" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1424" cx="18" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1422" cx="10" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1420" cx="18" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1404" cx="18" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1400" cx="18" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1396" cx="18" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1392" cx="18" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1388" cx="18" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1384" cx="18" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1380" cx="18" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1376" cx="18" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1372" cx="18" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1679" cx="26" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-1677" cx="34" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-1675" cx="26" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1674" cx="42" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1673" cx="34" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1672" cx="50" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1671" cx="26" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1670" cx="42" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1669" cx="34" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1668" cx="50" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1667" cx="26" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1666" cx="42" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1665" cx="34" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1664" cx="50" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1663" cx="26" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1662" cx="42" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1661" cx="34" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1660" cx="50" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1659" cx="26" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1658" cx="42" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1657" cx="34" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1656" cx="50" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1655" cx="26" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1654" cx="42" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1653" cx="34" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1652" cx="50" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1651" cx="26" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1650" cx="42" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1649" cx="34" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1648" cx="50" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1647" cx="26" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1646" cx="42" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1645" cx="34" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1644" cx="50" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1643" cx="26" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1642" cx="42" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1641" cx="34" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1640" cx="50" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1639" cx="26" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1638" cx="42" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1637" cx="34" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1636" cx="50" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1635" cx="26" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1634" cx="42" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1633" cx="34" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1632" cx="50" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1631" cx="26" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1630" cx="42" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1629" cx="34" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1628" cx="50" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1627" cx="26" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1626" cx="42" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1625" cx="34" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1624" cx="50" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1623" cx="26" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1622" cx="42" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1621" cx="34" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1620" cx="50" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1619" cx="26" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1617" cx="34" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1615" cx="26" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1613" cx="34" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1611" cx="26" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1607" cx="26" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1603" cx="26" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1599" cx="26" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1597" cx="34" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1895" cx="58" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1893" cx="66" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1891" cx="58" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1889" cx="66" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1887" cx="58" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1886" cx="74" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1885" cx="66" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1884" cx="82" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1883" cx="58" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1882" cx="74" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1881" cx="66" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1880" cx="82" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1879" cx="58" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1878" cx="74" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1877" cx="66" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1876" cx="82" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1875" cx="58" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1874" cx="74" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1873" cx="66" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1872" cx="82" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1871" cx="58" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1870" cx="74" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1869" cx="66" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1868" cx="82" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1867" cx="58" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1866" cx="74" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1865" cx="66" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1864" cx="82" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1863" cx="58" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1862" cx="74" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1861" cx="66" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1859" cx="58" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1857" cx="66" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1855" cx="58" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1851" cx="58" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2111" cx="90" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2107" cx="90" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2105" cx="98" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2103" cx="90" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2101" cx="98" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2099" cx="90" cy="58" r="2"></circle>
                </g>
                <g id="north-america" fill="#066FA5">
                    <circle id="Oval-Copy-256" cx="18" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-257" cx="34" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-258" cx="26" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-36" cx="10" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-260" cx="18" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-34" cx="2" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-261" cx="34" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-262" cx="26" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-32" cx="10" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-263" cx="42" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-264" cx="18" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-46" cx="2" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-265" cx="34" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-266" cx="26" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-44" cx="10" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-267" cx="42" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-268" cx="18" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-42" cx="2" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-269" cx="34" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-270" cx="26" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-40" cx="10" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-271" cx="42" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-272" cx="18" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-54" cx="2" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-273" cx="34" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-274" cx="26" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-52" cx="10" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-275" cx="42" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-276" cx="18" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-50" cx="2" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-277" cx="34" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-278" cx="26" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-48" cx="10" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-279" cx="42" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-280" cx="18" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-282" cx="26" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-60" cx="10" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-56" cx="10" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-635" cx="50" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-634" cx="66" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-633" cx="58" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-632" cx="74" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-631" cx="50" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-630" cx="66" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-629" cx="58" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-628" cx="74" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-627" cx="50" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-626" cx="66" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-625" cx="58" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-624" cx="74" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-623" cx="50" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-622" cx="66" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-621" cx="58" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-620" cx="74" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-619" cx="50" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-618" cx="66" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-617" cx="58" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-616" cx="74" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-614" cx="66" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-612" cx="74" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-608" cx="74" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-870" cx="98" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-869" cx="90" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-868" cx="106" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-866" cx="98" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-865" cx="90" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-864" cx="106" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-862" cx="98" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-860" cx="106" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-859" cx="82" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-858" cx="98" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-857" cx="90" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-856" cx="106" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-855" cx="82" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-854" cx="98" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-853" cx="90" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-852" cx="106" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-851" cx="82" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-850" cx="98" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-849" cx="90" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-848" cx="106" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-847" cx="82" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-846" cx="98" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-845" cx="90" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-844" cx="106" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-843" cx="82" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-842" cx="98" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-841" cx="90" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-840" cx="106" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-839" cx="82" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-838" cx="98" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-837" cx="90" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-836" cx="106" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-835" cx="82" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-834" cx="98" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-833" cx="90" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-832" cx="106" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-831" cx="82" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-830" cx="98" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-829" cx="90" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-828" cx="106" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-827" cx="82" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-826" cx="98" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-825" cx="90" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-824" cx="106" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-822" cx="98" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-821" cx="90" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-820" cx="106" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-818" cx="98" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-817" cx="90" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-816" cx="106" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-814" cx="98" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-813" cx="90" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-812" cx="106" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-810" cx="98" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-808" cx="106" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-806" cx="98" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-804" cx="106" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-800" cx="106" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1108" cx="130" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1104" cx="138" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1103" cx="114" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1101" cx="122" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1100" cx="138" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1099" cx="114" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1097" cx="122" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1096" cx="138" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1095" cx="114" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1094" cx="130" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1093" cx="122" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1092" cx="138" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1091" cx="114" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1090" cx="130" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1089" cx="122" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1088" cx="138" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1087" cx="114" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1086" cx="130" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1085" cx="122" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1083" cx="114" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1082" cx="130" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1081" cx="122" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1080" cx="138" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1079" cx="114" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1078" cx="130" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1077" cx="122" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1076" cx="138" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1075" cx="114" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1074" cx="130" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1073" cx="122" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1072" cx="138" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1071" cx="114" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1070" cx="130" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1069" cx="122" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1068" cx="138" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1067" cx="114" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1066" cx="130" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1065" cx="122" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1064" cx="138" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1063" cx="114" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1062" cx="130" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1061" cx="122" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1060" cx="138" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1059" cx="114" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1058" cx="130" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1057" cx="122" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1056" cx="138" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1055" cx="114" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1054" cx="130" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1053" cx="122" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1052" cx="138" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1051" cx="114" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1050" cx="130" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1049" cx="122" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1048" cx="138" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1047" cx="114" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1046" cx="130" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1045" cx="122" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1044" cx="138" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1043" cx="114" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1042" cx="130" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1041" cx="122" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1040" cx="138" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1039" cx="114" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1038" cx="130" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1037" cx="122" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1036" cx="138" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1035" cx="114" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1034" cx="130" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1033" cx="122" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1032" cx="138" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1031" cx="114" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1030" cx="130" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1029" cx="122" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1028" cx="138" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1027" cx="114" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1026" cx="130" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1025" cx="122" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1024" cx="138" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1023" cx="114" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-1022" cx="130" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-1021" cx="122" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-1020" cx="138" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-1018" cx="130" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-1017" cx="122" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-1016" cx="138" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-1014" cx="130" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-1012" cx="138" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-1008" cx="138" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-1340" cx="162" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1336" cx="170" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1334" cx="146" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1332" cx="162" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1330" cx="154" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1328" cx="170" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1327" cx="146" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1326" cx="162" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1325" cx="154" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1324" cx="170" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1323" cx="146" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1322" cx="162" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1321" cx="154" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1320" cx="170" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1319" cx="146" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1317" cx="154" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1315" cx="146" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1314" cx="162" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1313" cx="154" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1312" cx="170" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1310" cx="162" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1309" cx="154" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1308" cx="170" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1307" cx="146" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1306" cx="162" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1305" cx="154" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1304" cx="170" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1303" cx="146" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1302" cx="162" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1301" cx="154" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1300" cx="170" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1299" cx="146" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1298" cx="162" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1297" cx="154" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1296" cx="170" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1295" cx="146" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1294" cx="162" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1293" cx="154" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1291" cx="146" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1289" cx="154" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1287" cx="146" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1286" cx="162" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1285" cx="154" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1283" cx="146" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1282" cx="162" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1281" cx="154" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1280" cx="170" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1279" cx="146" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1278" cx="162" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1277" cx="154" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1276" cx="170" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1275" cx="146" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1274" cx="162" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1273" cx="154" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1272" cx="170" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1271" cx="146" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1270" cx="162" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1269" cx="154" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1268" cx="170" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1267" cx="146" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1266" cx="162" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1265" cx="154" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1264" cx="170" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1263" cx="146" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1262" cx="162" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1261" cx="154" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1260" cx="170" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1259" cx="146" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1258" cx="162" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1257" cx="154" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1256" cx="170" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1255" cx="146" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1254" cx="162" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1253" cx="154" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1252" cx="170" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1251" cx="146" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1250" cx="162" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1249" cx="154" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1248" cx="170" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1247" cx="146" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-1243" cx="146" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-1239" cx="146" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-1238" cx="162" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-1236" cx="170" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-1235" cx="146" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-1234" cx="162" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-1233" cx="154" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-1232" cx="170" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-1230" cx="162" cy="218" r="2"></circle>
                    <circle id="Oval-Copy-1228" cx="170" cy="218" r="2"></circle>
                    <circle id="Oval-Copy-1566" cx="178" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1564" cx="194" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1562" cx="186" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1560" cx="202" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1558" cx="178" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1557" cx="194" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-1556" cx="194" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1555" cx="186" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-1554" cx="186" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1553" cx="202" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-1552" cx="202" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1551" cx="178" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1550" cx="194" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1549" cx="186" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1547" cx="178" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1546" cx="194" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1545" cx="186" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1539" cx="178" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1538" cx="194" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1537" cx="186" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1535" cx="178" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1534" cx="194" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1533" cx="186" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1532" cx="202" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1531" cx="178" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1530" cx="194" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1529" cx="186" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1528" cx="202" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1527" cx="178" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1526" cx="194" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1524" cx="202" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1523" cx="178" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1522" cx="194" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1520" cx="202" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1519" cx="178" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1518" cx="194" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1516" cx="202" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1514" cx="194" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1512" cx="202" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1510" cx="194" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1508" cx="202" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1507" cx="178" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1506" cx="194" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1504" cx="202" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1503" cx="178" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1502" cx="194" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1501" cx="186" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1500" cx="202" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1499" cx="178" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1498" cx="194" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1497" cx="186" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1496" cx="202" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1495" cx="178" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1494" cx="194" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1493" cx="186" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1492" cx="202" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1491" cx="178" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1490" cx="194" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1489" cx="186" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1488" cx="202" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1487" cx="178" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1486" cx="194" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1485" cx="186" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1484" cx="202" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-1483" cx="178" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1482" cx="194" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1481" cx="186" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-1479" cx="178" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1478" cx="194" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1477" cx="186" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-1475" cx="178" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1473" cx="186" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-1471" cx="178" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-1469" cx="186" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-1467" cx="178" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-1466" cx="194" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-1465" cx="186" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-1462" cx="194" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-1460" cx="202" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-1459" cx="178" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-1455" cx="178" cy="218" r="2"></circle>
                    <circle id="Oval-Copy-1451" cx="178" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-1450" cx="194" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-1449" cx="186" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-1790" cx="210" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1788" cx="226" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1784" cx="234" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-1783" cx="210" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-1780" cx="226" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1779" cx="218" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-1778" cx="218" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1776" cx="234" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1775" cx="210" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1774" cx="226" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1773" cx="218" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1772" cx="234" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1771" cx="210" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1770" cx="226" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1769" cx="218" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1768" cx="234" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1766" cx="226" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1765" cx="218" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1764" cx="234" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1759" cx="210" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1755" cx="210" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1753" cx="218" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1751" cx="210" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1749" cx="218" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1747" cx="210" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1745" cx="218" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1743" cx="210" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1737" cx="218" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1735" cx="210" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1734" cx="226" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1733" cx="218" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-1731" cx="210" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1730" cx="226" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1729" cx="218" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1728" cx="234" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-1727" cx="210" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1726" cx="226" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1725" cx="218" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1724" cx="234" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1723" cx="210" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1721" cx="218" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1720" cx="234" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1719" cx="210" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1718" cx="226" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1717" cx="218" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-1715" cx="210" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-1687" cx="210" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-2014" cx="242" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2010" cx="250" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2006" cx="242" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2002" cx="250" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1999" cx="242" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1997" cx="250" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1995" cx="242" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1993" cx="250" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1991" cx="242" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1989" cx="250" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1987" cx="242" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1985" cx="250" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1983" cx="242" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1981" cx="250" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1979" cx="242" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1977" cx="250" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1975" cx="242" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1974" cx="258" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1973" cx="250" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1972" cx="266" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-1971" cx="242" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1970" cx="258" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1969" cx="250" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1968" cx="266" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-1966" cx="258" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1965" cx="250" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1964" cx="266" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-1962" cx="258" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1961" cx="250" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1960" cx="266" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-1951" cx="242" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-1947" cx="242" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-1943" cx="242" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-2236" cx="290" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2232" cx="298" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2229" cx="290" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2228" cx="290" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2225" cx="298" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2224" cx="298" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2222" cx="290" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2220" cx="298" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2218" cx="290" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2216" cx="298" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2214" cx="290" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2212" cx="298" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2210" cx="290" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2208" cx="298" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2206" cx="290" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2204" cx="298" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2203" cx="274" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2202" cx="290" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2200" cx="298" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2197" cx="282" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2462" cx="306" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2460" cx="322" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2458" cx="314" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2456" cx="330" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2455" cx="306" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2454" cx="306" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2452" cx="322" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2450" cx="314" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2447" cx="306" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2445" cx="314" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2443" cx="306" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2442" cx="322" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2441" cx="314" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2439" cx="306" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2438" cx="322" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2437" cx="314" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2435" cx="306" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2433" cx="314" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2431" cx="306" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2429" cx="314" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2427" cx="306" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2012" cx="258" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2008" cx="266" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2004" cx="258" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2001" cx="266" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2000" cx="266" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-1998" cx="258" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1996" cx="266" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-1994" cx="258" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1992" cx="266" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-1990" cx="258" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1988" cx="266" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-1986" cx="258" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1984" cx="266" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-1982" cx="258" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1980" cx="266" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-1978" cx="258" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-1976" cx="266" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2238" cx="274" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2234" cx="282" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2231" cx="274" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2230" cx="274" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2227" cx="282" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2226" cx="282" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2223" cx="274" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2221" cx="282" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2219" cx="274" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2217" cx="282" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2215" cx="274" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2213" cx="282" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2211" cx="274" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2209" cx="282" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2207" cx="274" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2205" cx="282" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2201" cx="282" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2199" cx="274" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2198" cx="290" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2195" cx="274" cy="82" r="2"></circle>
                </g>
                <g id="africa" transform="translate(320.000000, 160.000000)" fill="#F6D600">
                    <circle id="Oval-Copy-2364" cx="10" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2362" cx="2" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2360" cx="10" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2358" cx="2" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2356" cx="10" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2354" cx="2" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2352" cx="10" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2350" cx="2" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2348" cx="10" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2344" cx="10" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2599" cx="18" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2601" cx="50" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2603" cx="42" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2602" cx="58" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2598" cx="34" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2597" cx="26" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2596" cx="42" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2595" cx="18" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2594" cx="34" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2593" cx="26" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2592" cx="42" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2591" cx="18" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2590" cx="34" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2589" cx="26" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2588" cx="42" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2587" cx="18" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2586" cx="34" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2585" cx="26" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2584" cx="42" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2583" cx="18" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2582" cx="34" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2581" cx="26" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2580" cx="42" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2579" cx="18" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2578" cx="34" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2577" cx="26" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2576" cx="42" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2575" cx="18" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2574" cx="34" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2573" cx="26" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2572" cx="42" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2571" cx="18" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2570" cx="34" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2569" cx="26" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2568" cx="42" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2567" cx="18" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2566" cx="34" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2565" cx="26" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2823" cx="50" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2822" cx="66" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2821" cx="58" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2819" cx="50" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2818" cx="66" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2817" cx="58" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2816" cx="74" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2815" cx="50" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2814" cx="66" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2813" cx="58" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2812" cx="74" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-2811" cx="50" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2810" cx="66" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2809" cx="58" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2808" cx="74" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-2807" cx="50" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2806" cx="66" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2805" cx="58" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2804" cx="74" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-2803" cx="50" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2802" cx="66" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2801" cx="58" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2800" cx="74" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-2799" cx="50" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2798" cx="66" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2797" cx="58" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2796" cx="74" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2795" cx="50" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2794" cx="66" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2793" cx="58" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2792" cx="74" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2791" cx="50" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2790" cx="66" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2789" cx="58" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2788" cx="74" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2786" cx="66" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-2785" cx="58" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-2784" cx="74" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-2782" cx="66" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-2781" cx="58" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-2780" cx="74" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-2778" cx="66" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-2776" cx="74" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-2772" cx="74" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2770" cx="66" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2768" cx="74" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2766" cx="66" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2764" cx="74" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2762" cx="66" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2760" cx="74" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2756" cx="74" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-2752" cx="74" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-2748" cx="74" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3043" cx="82" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-3041" cx="90" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-3039" cx="82" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-3037" cx="90" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-3035" cx="82" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-3033" cx="90" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-3031" cx="82" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3029" cx="90" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3027" cx="82" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3025" cx="90" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3023" cx="82" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3022" cx="98" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3020" cx="106" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3019" cx="82" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3018" cx="98" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3016" cx="106" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3015" cx="82" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3014" cx="98" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3012" cx="106" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3011" cx="82" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3010" cx="98" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3008" cx="106" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3007" cx="82" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3006" cx="98" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3004" cx="106" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3003" cx="82" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3002" cx="98" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3000" cx="106" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-2999" cx="82" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2998" cx="98" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2996" cx="106" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2995" cx="82" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2994" cx="98" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2992" cx="106" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2991" cx="82" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2990" cx="98" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2988" cx="106" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2987" cx="82" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2986" cx="98" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2984" cx="106" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2983" cx="82" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-2982" cx="98" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-2980" cx="106" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-2979" cx="82" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-2978" cx="98" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-2976" cx="106" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-2975" cx="82" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-2974" cx="98" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-2972" cx="106" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-2971" cx="82" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-2970" cx="98" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3247" cx="114" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3246" cx="130" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3245" cx="122" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3244" cx="138" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3243" cx="114" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3242" cx="130" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3241" cx="122" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3240" cx="138" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3239" cx="114" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3238" cx="130" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3237" cx="122" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3236" cx="138" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3235" cx="114" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3234" cx="130" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3233" cx="122" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3232" cx="138" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3231" cx="114" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3230" cx="130" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3229" cx="122" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3227" cx="114" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3225" cx="122" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3223" cx="114" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3221" cx="122" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3219" cx="114" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3217" cx="122" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3215" cx="114" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3213" cx="122" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3212" cx="138" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3211" cx="114" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3208" cx="138" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3207" cx="114" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3204" cx="138" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3471" cx="146" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3467" cx="146" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3463" cx="146" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3443" cx="146" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3439" cx="146" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3042" cx="98" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-3040" cx="106" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-3038" cx="98" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-3036" cx="106" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-3034" cx="98" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-3032" cx="106" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-3030" cx="98" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3028" cx="106" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3026" cx="98" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3024" cx="106" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3021" cx="90" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3017" cx="90" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3013" cx="90" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3009" cx="90" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3005" cx="90" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3001" cx="90" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-2997" cx="90" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2993" cx="90" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2989" cx="90" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2985" cx="90" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2981" cx="90" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-2977" cx="90" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-2973" cx="90" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-2969" cx="90" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3259" cx="114" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-3255" cx="114" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3251" cx="114" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3249" cx="122" cy="50" r="2"></circle>
                </g>
                <g id="europe" transform="translate(304.000000, 16.000000)" fill="#11CD86">
                    <circle id="Oval-Copy-2422" cx="18" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2421" cx="10" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2419" cx="2" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2418" cx="18" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2417" cx="10" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2416" cx="26" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2630" cx="50" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-2629" cx="42" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-2627" cx="34" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-2626" cx="50" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-2625" cx="42" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-2623" cx="34" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2622" cx="50" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2620" cx="58" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2618" cx="50" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2616" cx="58" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2612" cx="58" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2611" cx="34" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2610" cx="50" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2609" cx="42" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2608" cx="58" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2607" cx="34" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-2606" cx="50" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-2605" cx="42" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-2900" cx="82" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2896" cx="90" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-2894" cx="82" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2892" cx="90" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-2888" cx="90" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-2870" cx="82" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2868" cx="90" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-2866" cx="82" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2864" cx="90" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-2863" cx="66" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2862" cx="82" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2861" cx="74" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2860" cx="90" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-2859" cx="66" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-2858" cx="82" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-2857" cx="74" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-2856" cx="90" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-2854" cx="82" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-2853" cx="74" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-2852" cx="90" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-2850" cx="82" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-2849" cx="74" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-2847" cx="66" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2846" cx="82" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2845" cx="74" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2844" cx="90" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-2843" cx="66" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2842" cx="82" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2841" cx="74" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2840" cx="90" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-2839" cx="66" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2838" cx="82" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2837" cx="74" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2836" cx="90" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-2834" cx="82" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2832" cx="90" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-2828" cx="90" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3126" cx="98" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-3124" cx="114" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-3122" cx="106" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-3119" cx="98" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-3117" cx="106" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-3103" cx="98" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3102" cx="114" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3101" cx="106" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3100" cx="122" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3099" cx="98" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3098" cx="114" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3097" cx="106" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3096" cx="122" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3095" cx="98" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3094" cx="114" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3093" cx="106" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3092" cx="122" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3091" cx="98" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3090" cx="114" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3088" cx="122" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3086" cx="114" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3085" cx="106" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3084" cx="122" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3082" cx="114" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3080" cx="122" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3078" cx="114" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3077" cx="106" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3076" cx="122" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3075" cx="98" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3074" cx="114" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3073" cx="106" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3072" cx="122" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3071" cx="98" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3070" cx="114" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3069" cx="106" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3068" cx="122" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3067" cx="98" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3065" cx="106" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3064" cx="122" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3063" cx="98" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3061" cx="106" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3060" cx="122" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3059" cx="98" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3057" cx="106" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3055" cx="98" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3053" cx="106" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3049" cx="106" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3323" cx="130" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3319" cx="130" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3318" cx="146" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3317" cx="138" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3316" cx="154" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3315" cx="130" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3314" cx="146" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3313" cx="138" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3312" cx="154" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3311" cx="130" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3310" cx="146" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3309" cx="138" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3308" cx="154" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3307" cx="130" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3306" cx="146" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3305" cx="138" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3304" cx="154" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3303" cx="130" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3302" cx="146" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3301" cx="138" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3300" cx="154" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3299" cx="130" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3298" cx="146" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3297" cx="138" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3296" cx="154" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3295" cx="130" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3294" cx="146" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3293" cx="138" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3292" cx="154" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3291" cx="130" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3290" cx="146" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3288" cx="154" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3287" cx="130" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3286" cx="146" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3285" cx="138" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3284" cx="154" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3282" cx="146" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3281" cx="138" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3280" cx="154" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3560" cx="186" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-3558" cx="178" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-3556" cx="186" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-3554" cx="178" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-3553" cx="170" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-3549" cx="170" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3547" cx="162" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3546" cx="178" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3545" cx="170" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3544" cx="186" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3543" cx="162" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3542" cx="178" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3541" cx="170" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3540" cx="186" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3539" cx="162" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3538" cx="178" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3537" cx="170" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3535" cx="162" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3534" cx="178" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3533" cx="170" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3531" cx="162" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3530" cx="178" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3529" cx="170" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3527" cx="162" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3526" cx="178" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3525" cx="170" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3523" cx="162" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3522" cx="178" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3521" cx="170" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3519" cx="162" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3518" cx="178" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3517" cx="170" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3787" cx="194" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-3785" cx="202" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-3771" cx="194" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3767" cx="194" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3066" cx="114" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3062" cx="114" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3058" cx="114" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3289" cx="138" cy="114" r="2"></circle>
                </g>
                <g id="australia" transform="translate(602.000000, 243.000000)" fill="#6441A4">
                    <circle id="Oval-Copy-4403" cx="18" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4405" cx="10" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4407" cx="18" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4409" cx="10" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4410" cx="2" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4411" cx="18" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4413" cx="10" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4414" cx="2" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4415" cx="18" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4417" cx="10" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4419" cx="18" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4421" cx="10" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4423" cx="18" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4562" cx="42" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4561" cx="34" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4560" cx="50" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4559" cx="26" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4558" cx="42" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4557" cx="34" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4556" cx="50" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4555" cx="26" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4554" cx="42" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4553" cx="34" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4552" cx="50" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4551" cx="26" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4550" cx="42" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4549" cx="34" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4548" cx="50" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4547" cx="26" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4546" cx="42" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4545" cx="34" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4544" cx="50" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4543" cx="26" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4542" cx="42" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4541" cx="34" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4540" cx="50" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4539" cx="26" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4536" cx="50" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4798" cx="74" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-4797" cx="66" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-4794" cx="74" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-4793" cx="66" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-4788" cx="82" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-4785" cx="66" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4783" cx="58" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4782" cx="74" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4781" cx="66" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4779" cx="58" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4778" cx="74" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4777" cx="66" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4776" cx="82" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4775" cx="58" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4774" cx="74" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4773" cx="66" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4772" cx="82" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4771" cx="58" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4770" cx="74" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4769" cx="66" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4768" cx="82" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4767" cx="58" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4766" cx="74" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4765" cx="66" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4764" cx="82" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4763" cx="58" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4762" cx="74" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4761" cx="66" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4760" cx="82" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4758" cx="74" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4757" cx="66" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4756" cx="82" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4754" cx="74" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4752" cx="82" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4750" cx="74" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4999" cx="90" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4995" cx="90" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4991" cx="90" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-5210" cx="138" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-5206" cx="138" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-5202" cx="138" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-5201" cx="130" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-5199" cx="122" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-5197" cx="130" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-5195" cx="122" cy="106" r="2"></circle>
                </g>
                <g id="russia" transform="translate(416.000000, 16.000000)" fill="#FF652D">
                    <circle id="Oval-Copy-3054" cx="2" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3052" cx="10" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3050" cx="2" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3048" cx="10" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3279" cx="18" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3278" cx="34" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3277" cx="26" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3276" cx="42" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3275" cx="18" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3274" cx="34" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3273" cx="26" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3272" cx="42" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3271" cx="18" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3270" cx="34" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3269" cx="26" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3268" cx="42" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3267" cx="18" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3266" cx="34" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3265" cx="26" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3264" cx="42" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3262" cx="34" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3261" cx="26" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3260" cx="42" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3258" cx="34" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3257" cx="26" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3256" cx="42" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3254" cx="34" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-3252" cx="42" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-3248" cx="42" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-3536" cx="74" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3532" cx="74" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3528" cx="74" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3524" cx="74" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3520" cx="74" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3516" cx="74" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3515" cx="50" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3514" cx="66" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3513" cx="58" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3512" cx="74" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3511" cx="50" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3510" cx="66" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3509" cx="58" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3508" cx="74" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3507" cx="50" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3506" cx="66" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3505" cx="58" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3504" cx="74" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3503" cx="50" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3502" cx="66" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3501" cx="58" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3500" cx="74" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3499" cx="50" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3498" cx="66" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3497" cx="58" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3496" cx="74" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3495" cx="50" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3494" cx="66" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3493" cx="58" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3492" cx="74" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3491" cx="50" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3490" cx="66" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3489" cx="58" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3488" cx="74" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3487" cx="50" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3486" cx="66" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3485" cx="58" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3484" cx="74" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3483" cx="50" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3482" cx="66" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3481" cx="58" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3480" cx="74" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3479" cx="50" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-3478" cx="66" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-3477" cx="58" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-3475" cx="50" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-3474" cx="66" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-3473" cx="58" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-3778" cx="98" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-3776" cx="106" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-3774" cx="98" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3773" cx="90" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3772" cx="106" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3770" cx="98" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3769" cx="90" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3768" cx="106" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3766" cx="98" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3765" cx="90" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3764" cx="106" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3763" cx="82" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3762" cx="98" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3761" cx="90" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3760" cx="106" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3759" cx="82" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3758" cx="98" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3757" cx="90" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3756" cx="106" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3755" cx="82" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3754" cx="98" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3753" cx="90" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3752" cx="106" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3751" cx="82" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3750" cx="98" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3749" cx="90" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3748" cx="106" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3747" cx="82" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3746" cx="98" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3745" cx="90" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3744" cx="106" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3743" cx="82" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3742" cx="98" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3741" cx="90" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3740" cx="106" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3739" cx="82" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3738" cx="98" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3737" cx="90" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3736" cx="106" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3735" cx="82" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3734" cx="98" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3733" cx="90" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3732" cx="106" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3731" cx="82" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3730" cx="98" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3729" cx="90" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3728" cx="106" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3727" cx="82" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3726" cx="98" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3725" cx="90" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3724" cx="106" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3723" cx="82" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3722" cx="98" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3721" cx="90" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3720" cx="106" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3719" cx="82" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3718" cx="98" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3717" cx="90" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3716" cx="106" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3715" cx="82" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3714" cx="98" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3713" cx="90" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3712" cx="106" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3711" cx="82" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3710" cx="98" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3709" cx="90" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3708" cx="106" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3706" cx="98" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3705" cx="90" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3704" cx="106" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3702" cx="98" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-3700" cx="106" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-3696" cx="106" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-3692" cx="106" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-3688" cx="106" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-4006" cx="130" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4004" cx="138" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4003" cx="114" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4002" cx="130" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4001" cx="122" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4000" cx="138" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-3999" cx="114" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3998" cx="130" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3997" cx="122" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3996" cx="138" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-3995" cx="114" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3994" cx="130" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3993" cx="122" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3992" cx="138" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-3991" cx="114" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3990" cx="130" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3989" cx="122" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3988" cx="138" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-3987" cx="114" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3986" cx="130" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3985" cx="122" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3984" cx="138" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-3983" cx="114" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3982" cx="130" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3981" cx="122" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3980" cx="138" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-3979" cx="114" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3978" cx="130" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3977" cx="122" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3976" cx="138" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-3975" cx="114" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3974" cx="130" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3973" cx="122" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3972" cx="138" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-3971" cx="114" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3970" cx="130" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3969" cx="122" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3968" cx="138" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-3967" cx="114" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3966" cx="130" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3965" cx="122" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3964" cx="138" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-3963" cx="114" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3962" cx="130" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3961" cx="122" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3960" cx="138" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-3959" cx="114" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3958" cx="130" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3957" cx="122" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3956" cx="138" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-3955" cx="114" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3954" cx="130" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3953" cx="122" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3952" cx="138" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-3951" cx="114" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3950" cx="130" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3949" cx="122" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3948" cx="138" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-3947" cx="114" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3946" cx="130" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3945" cx="122" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3944" cx="138" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-3943" cx="114" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3942" cx="130" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3941" cx="122" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3940" cx="138" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-3939" cx="114" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3938" cx="130" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3937" cx="122" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3936" cx="138" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-3935" cx="114" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3934" cx="130" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3933" cx="122" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3932" cx="138" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-3931" cx="114" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3930" cx="130" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3929" cx="122" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3928" cx="138" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-3927" cx="114" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-3926" cx="130" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-3925" cx="122" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-3923" cx="114" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-3921" cx="122" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-3919" cx="114" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-3915" cx="114" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-4246" cx="146" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-4244" cx="162" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-4242" cx="154" cy="2" r="2"></circle>
                    <circle id="Oval-Copy-4238" cx="162" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-4236" cx="170" cy="10" r="2"></circle>
                    <circle id="Oval-Copy-4276" cx="178" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-4234" cx="162" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-4278" cx="186" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-4232" cx="170" cy="18" r="2"></circle>
                    <circle id="Oval-Copy-4231" cx="146" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4280" cx="178" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4230" cx="162" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4229" cx="154" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4282" cx="186" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4228" cx="170" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4227" cx="146" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4284" cx="178" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4226" cx="162" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4285" cx="194" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4225" cx="154" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4286" cx="186" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4224" cx="170" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4287" cx="202" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4223" cx="146" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4288" cx="178" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4222" cx="162" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4289" cx="194" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4221" cx="154" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4290" cx="186" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4220" cx="170" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4291" cx="202" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4219" cx="146" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4292" cx="178" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4218" cx="162" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4293" cx="194" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4217" cx="154" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4294" cx="186" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4216" cx="170" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4295" cx="202" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4215" cx="146" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4296" cx="178" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4214" cx="162" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4297" cx="194" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4213" cx="154" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4298" cx="186" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4212" cx="170" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4299" cx="202" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4211" cx="146" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4300" cx="178" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4210" cx="162" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4301" cx="194" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4209" cx="154" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4302" cx="186" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4208" cx="170" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4303" cx="202" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4207" cx="146" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4304" cx="178" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4206" cx="162" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4305" cx="194" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4205" cx="154" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4306" cx="186" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4204" cx="170" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4307" cx="202" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4203" cx="146" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4308" cx="178" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4202" cx="162" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4309" cx="194" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4201" cx="154" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4310" cx="186" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4200" cx="170" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4311" cx="202" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4199" cx="146" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4312" cx="178" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4198" cx="162" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4313" cx="194" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4197" cx="154" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4314" cx="186" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4196" cx="170" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4315" cx="202" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4195" cx="146" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4316" cx="178" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4194" cx="162" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4317" cx="194" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4193" cx="154" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4318" cx="186" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4192" cx="170" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4319" cx="202" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4191" cx="146" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4320" cx="178" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4190" cx="162" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4321" cx="194" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4189" cx="154" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4322" cx="186" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4188" cx="170" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4323" cx="202" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4187" cx="146" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4324" cx="178" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4186" cx="162" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4325" cx="194" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4185" cx="154" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4326" cx="186" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4184" cx="170" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4327" cx="202" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4183" cx="146" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4328" cx="178" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4182" cx="162" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4329" cx="194" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4181" cx="154" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4330" cx="186" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4180" cx="170" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4331" cx="202" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4179" cx="146" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4332" cx="178" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4178" cx="162" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4333" cx="194" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4177" cx="154" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4334" cx="186" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4176" cx="170" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4335" cx="202" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4175" cx="146" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4336" cx="178" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4174" cx="162" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4337" cx="194" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4173" cx="154" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4338" cx="186" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4172" cx="170" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4339" cx="202" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4171" cx="146" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4340" cx="178" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4170" cx="162" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4341" cx="194" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4169" cx="154" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4342" cx="186" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4168" cx="170" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4343" cx="202" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4167" cx="146" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4344" cx="178" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4166" cx="162" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4345" cx="194" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4165" cx="154" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4346" cx="186" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4164" cx="170" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4347" cx="202" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4163" cx="146" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-4348" cx="178" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-4162" cx="162" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-4349" cx="194" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-4161" cx="154" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-4350" cx="186" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-4160" cx="170" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-4351" cx="202" cy="162" r="2"></circle>
                    <circle id="Oval-Copy-4159" cx="146" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-4352" cx="178" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-4158" cx="162" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-4353" cx="194" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-4157" cx="154" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-4354" cx="186" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-4156" cx="170" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-4355" cx="202" cy="170" r="2"></circle>
                    <circle id="Oval-Copy-4155" cx="146" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-4356" cx="178" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-4154" cx="162" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-4357" cx="194" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-4153" cx="154" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-4358" cx="186" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-4152" cx="170" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-4359" cx="202" cy="178" r="2"></circle>
                    <circle id="Oval-Copy-4151" cx="146" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-4360" cx="178" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-4150" cx="162" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-4149" cx="154" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-4148" cx="170" cy="186" r="2"></circle>
                    <circle id="Oval-Copy-4147" cx="146" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-4364" cx="178" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-4146" cx="162" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-4145" cx="154" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-4144" cx="170" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-4367" cx="202" cy="194" r="2"></circle>
                    <circle id="Oval-Copy-4368" cx="178" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-4142" cx="162" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-4141" cx="154" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-4140" cx="170" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-4371" cx="202" cy="202" r="2"></circle>
                    <circle id="Oval-Copy-4138" cx="162" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-4137" cx="154" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-4136" cx="170" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-4375" cx="202" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-4134" cx="162" cy="218" r="2"></circle>
                    <circle id="Oval-Copy-4377" cx="194" cy="218" r="2"></circle>
                    <circle id="Oval-Copy-4133" cx="154" cy="218" r="2"></circle>
                    <circle id="Oval-Copy-4378" cx="186" cy="218" r="2"></circle>
                    <circle id="Oval-Copy-4380" cx="178" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-4130" cx="162" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-4381" cx="194" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-4129" cx="154" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-4382" cx="186" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-4383" cx="202" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-4126" cx="162" cy="234" r="2"></circle>
                    <circle id="Oval-Copy-4385" cx="194" cy="234" r="2"></circle>
                    <circle id="Oval-Copy-4386" cx="186" cy="234" r="2"></circle>
                    <circle id="Oval-Copy-4124" cx="170" cy="234" r="2"></circle>
                    <circle id="Oval-Copy-4387" cx="202" cy="234" r="2"></circle>
                    <circle id="Oval-Copy-4388" cx="178" cy="242" r="2"></circle>
                    <circle id="Oval-Copy-4390" cx="186" cy="242" r="2"></circle>
                    <circle id="Oval-Copy-4120" cx="170" cy="242" r="2"></circle>
                    <circle id="Oval-Copy-4675" cx="210" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4673" cx="218" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4671" cx="210" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4670" cx="226" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4669" cx="218" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4668" cx="234" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4667" cx="210" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4666" cx="226" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4665" cx="218" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4664" cx="234" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4663" cx="210" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4662" cx="226" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4661" cx="218" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4660" cx="234" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4659" cx="210" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4658" cx="226" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4657" cx="218" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4656" cx="234" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4655" cx="210" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4654" cx="226" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4653" cx="218" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4652" cx="234" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4651" cx="210" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4650" cx="226" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4649" cx="218" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4648" cx="234" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4647" cx="210" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4646" cx="226" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4645" cx="218" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4644" cx="234" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4643" cx="210" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4642" cx="226" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4641" cx="218" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4640" cx="234" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4639" cx="210" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4638" cx="226" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4637" cx="218" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4636" cx="234" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4635" cx="210" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4634" cx="226" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4633" cx="218" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4632" cx="234" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4631" cx="210" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4630" cx="226" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4629" cx="218" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4628" cx="234" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4627" cx="210" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4626" cx="226" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4625" cx="218" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4624" cx="234" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4623" cx="210" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4621" cx="218" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4617" cx="218" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4616" cx="234" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4614" cx="226" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4612" cx="234" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4587" cx="210" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-4585" cx="218" cy="210" r="2"></circle>
                    <circle id="Oval-Copy-4583" cx="210" cy="218" r="2"></circle>
                    <circle id="Oval-Copy-4578" cx="226" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-4576" cx="234" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-4575" cx="210" cy="234" r="2"></circle>
                    <circle id="Oval-Copy-4574" cx="226" cy="234" r="2"></circle>
                    <circle id="Oval-Copy-4572" cx="234" cy="234" r="2"></circle>
                    <circle id="Oval-Copy-4903" cx="242" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4902" cx="258" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4901" cx="250" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4900" cx="266" cy="26" r="2"></circle>
                    <circle id="Oval-Copy-4898" cx="258" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4897" cx="250" cy="34" r="2"></circle>
                    <circle id="Oval-Copy-4895" cx="242" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4894" cx="258" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4893" cx="250" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4892" cx="266" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-4891" cx="242" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4890" cx="258" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4889" cx="250" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4888" cx="266" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-4887" cx="242" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4886" cx="258" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4885" cx="250" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4884" cx="266" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-4883" cx="242" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4882" cx="258" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4881" cx="250" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4880" cx="266" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-4879" cx="242" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4878" cx="258" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4877" cx="250" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4876" cx="266" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-4875" cx="242" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4874" cx="258" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4873" cx="250" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4872" cx="266" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-4871" cx="242" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4869" cx="250" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-4867" cx="242" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4865" cx="250" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-4863" cx="242" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4861" cx="250" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-4859" cx="242" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4857" cx="250" cy="114" r="2"></circle>
                    <circle id="Oval-Copy-4855" cx="242" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4853" cx="250" cy="122" r="2"></circle>
                    <circle id="Oval-Copy-4850" cx="258" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4849" cx="250" cy="130" r="2"></circle>
                    <circle id="Oval-Copy-4847" cx="242" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4845" cx="250" cy="138" r="2"></circle>
                    <circle id="Oval-Copy-4843" cx="242" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4841" cx="250" cy="146" r="2"></circle>
                    <circle id="Oval-Copy-4839" cx="242" cy="154" r="2"></circle>
                    <circle id="Oval-Copy-4803" cx="242" cy="226" r="2"></circle>
                    <circle id="Oval-Copy-4799" cx="242" cy="234" r="2"></circle>
                    <circle id="Oval-Copy-4795" cx="242" cy="242" r="2"></circle>
                    <circle id="Oval-Copy-5119" cx="274" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-5118" cx="290" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-5117" cx="282" cy="42" r="2"></circle>
                    <circle id="Oval-Copy-5115" cx="274" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-5114" cx="290" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-5113" cx="282" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-5112" cx="298" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-5111" cx="274" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5110" cx="290" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5109" cx="282" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5108" cx="298" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5107" cx="274" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-5106" cx="290" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-5105" cx="282" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-5104" cx="298" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-5103" cx="274" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-5102" cx="290" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-5101" cx="282" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-5100" cx="298" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-5099" cx="274" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-5098" cx="290" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-5097" cx="282" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-5096" cx="298" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-5094" cx="290" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-5093" cx="282" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-5092" cx="298" cy="90" r="2"></circle>
                    <circle id="Oval-Copy-5090" cx="290" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-5089" cx="282" cy="98" r="2"></circle>
                    <circle id="Oval-Copy-5085" cx="282" cy="106" r="2"></circle>
                    <circle id="Oval-Copy-5339" cx="306" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-5338" cx="322" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-5337" cx="314" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-5336" cx="330" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-5335" cx="306" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5334" cx="322" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5333" cx="314" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5332" cx="330" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5331" cx="306" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-5330" cx="322" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-5329" cx="314" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-5328" cx="330" cy="66" r="2"></circle>
                    <circle id="Oval-Copy-5327" cx="306" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-5325" cx="314" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-5324" cx="330" cy="74" r="2"></circle>
                    <circle id="Oval-Copy-5323" cx="306" cy="82" r="2"></circle>
                    <circle id="Oval-Copy-5563" cx="338" cy="50" r="2"></circle>
                    <circle id="Oval-Copy-5559" cx="338" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5558" cx="354" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5557" cx="346" cy="58" r="2"></circle>
                    <circle id="Oval-Copy-5553" cx="346" cy="66" r="2"></circle>
                </g>
            </g>
        </svg>
    </div>
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

export default Launch;