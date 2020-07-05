import $ from 'jquery';
import Swiper from "swiper";

export default function Init() {

  var newsSwiper;

  $(document).ready(function () {

    $("body").removeClass("products");
    $(".first-row").removeClass("home__first-row");

    $(".book__terms__link").click(function () {
      $(".custom-modal-out").addClass("show");
      $(".body").css("overflow-y", "hidden");
    });

    $(".close-icon").click(function () {
      $(".custom-modal-out").removeClass("show");
      $(".body").css("overflow-y", "scroll");
    });


    newsSwiper = new Swiper(
      ".news-swiper",
      {
        direction: "horizontal",
        slidesPerView: "auto",
        pagination: {
          el: ".news__swiper-pagination",
          clickable: true
        },
        keyboard: {
          enabled: true
        },
      }
    );

  });

}