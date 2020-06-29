import React from 'react';
import "./css/book-finish.css";
import satellite from "./images/satellite.png";
import back from "./images/rectangle-3.png";
import $ from "jquery";

function BookComplete(){

    
    $(document).ready(function(){
        $("body").removeClass("products");
    });

    return (
        <div className="body">
            <p className="bookc__close">X</p>
            <img src={back} class="back-image" />
            <div className="middleBanner">
        <img className="middle-image" src={satellite}/>
        <p className="middle-head">Congratulations!</p>
        <p className="middle-text">We have received your request. Terms and Conditions agreements act as a legal contract between you 
            (the company) who has t. Our dedicateed team will soon be touch with you.</p>
        <button className="middle-button">GO BACK TO PRODUCTS</button>
    </div>
   
        </div>
    );

}

export default BookComplete;