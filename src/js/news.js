import $ from 'jquery';
import Swiper from "swiper";

export default function Init() {

  var newsSwiper;

  $(document).ready(function () {

    $("body").removeClass("products");
    $(".first-row").removeClass("home__first-row");

    $(".book__terms__link").click(function () {
      $(".book__modal__out").addClass("show");
      $(".body").css("overflow-y", "hidden");
    });

    $(".book__close__icon").click(function () {
      $(".book__modal__out").removeClass("show");
      $(".body").css("overflow-y", "scroll");
    });


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
        },
      }
    );

  });

}