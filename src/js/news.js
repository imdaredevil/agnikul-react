import $ from 'jquery';
import Swiper from "swiper";

export default function Init() {

var newsSwiper;

$(document).ready( function() {

  $("body").removeClass("products");
  $(".first-row").removeClass("home__first-row");

  newsSwiper = new Swiper(
              ".news__location-swiper",
              {
                  direction: "horizontal",
                  slidesPerView: "auto",
                  pagination: {
                    el: ".news__location__swiper-pagination",
                    clickable: true
                  },
                  keyboard: {
                    enabled: true
                  }                  
              }
  );

});

}