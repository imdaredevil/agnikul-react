import $ from 'jquery';
import Swiper from "swiper";

export default function Init() {

var careerSwiper;

$(document).ready( function() {

  $("body").removeClass("products");

//   careerSwiper = new Swiper(".career__location-swiper",{
//         direction: "vertical",
//         cssMode: true,
//         slidesPerView: "auto",
//         pagination: {
//             el: ".career__location__swiper-pagination",
//             clickable: true
//         },
//         mousewheel: {
//             invert: false,
//         },
//         keyboard:{
//             enabled: true,
//         }
//   });

//   var prev = 0;

//   var len = $(".career__content").length;

//   $(".career__location__slide-content").each(function(index){
//       $(this).click(function(){
//         index = index % len;
//           if(window.screen.width > 450)
//           {
//             $(".career__location__slide-content").each(function(){
//                     $(this).removeClass("active");
//             });
//             $(this).addClass("active");
//             var contents = document.getElementsByClassName("career__content");
//             if(prev != index)
//             {
//             contents[prev].classList.remove("active");
//             contents[index].classList.add("active");
//             }
//             prev = index;
//           }
//           else
//           {
//             var contents = document.getElementsByClassName("career__content");
//             contents[index].classList.add("show"); 
//           }
//       });
//   });

//   $(".career__close-icon").click(
//       function() {
//         var contents = document.getElementsByClassName("career__content");
//         for(var index in contents)
//         {
//             if(contents[index] != undefined && contents[index].classList != undefined)
//             contents[index].classList.remove("show");
//         }
//       }
//   );

 });

}

