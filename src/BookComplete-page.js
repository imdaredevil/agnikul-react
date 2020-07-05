import React from "react";
import "./css/book-complete.css";
import satellite from "./images/book-complete/satellite.png";
import back from "./images/book-complete/back.png";
import $ from "jquery";

import { Link } from "react-router-dom";

function BookComplete() {
  $(document).ready(function () {
    $("body").removeClass("products");
  });

  return (
    <div className="body">
      <Link to="/">
        <p className="bookc__close">X</p>
      </Link>
      <img src={back} class="back-image" />
      <div className="middle-banner">
        <img className="middle-image" src={satellite} />
        <p className="middle-head">Congratulations!</p>
        <p className="middle-text">
          We have received your request. Terms and Conditions agreements act as
          a legal contract between you (the company) who has t. Our dedicateed
          team will soon be touch with you.
        </p>
        <Link to="/products">
          <button className="middle-button">GO BACK TO PRODUCTS</button>
        </Link>
      </div>
    </div>
  );
}

export default BookComplete;
