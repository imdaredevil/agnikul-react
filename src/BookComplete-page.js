import React from 'react';
import "./css/book-finish.css";
import satellite from "./images/satilite.png";
import $ from "jquery";

function BookComplete(){

    
    $(document).ready(function(){
        $("body").removeClass("products");
    });

    return (
        <div class="body">
            
            <div class="middleBanner">
        <img class="middle-image" src={satellite}/>
        <p class="middle-head">Congratulations!</p>
        <p class="middle-text">We have received your request. Terms and Conditions agreements act as a legal contract between you 
            (the company) who has t. Our dedicateed team will soon be touch with you.</p>
        <button class="middle-button">GO BACK TO PRODUCTS</button>
    </div>
   
        </div>
    );

}

export default BookComplete;