import  $ from "jquery";
import Swiper from "swiper";


export default function Init() {

var mySwiper,advSwiper,partSwiper,busiSwiper;
$(document).ready(function () {
    $("body").removeClass("products");
    //initialize swiper when document ready
    mySwiper = new Swiper ('.timeline-swiper', {
        direction: 'vertical',
        speed: 300,
        loop: false,
        // If we need pagination
        pagination: {
          el: '.timeline__swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
             return '<span class="' + className + '"> <p class="pagination-text">' + (index + 2010) + '</p></span>';
          }
        },
        mousewheel: {
            forceToAxis: true,
            releaseOnEdges: true,
            sensitivity: 1000
          },

        
        touchReleaseOnEdges: true
          
    });
    // mySwiper.mousewheel.disable();
    // mySwiper.allowTouchMove = false;




    advSwiper = new Swiper('.advisor-swiper',{
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      simulateTouch: false,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: '.advisor__swiper-button-next',
        prevEl: '.advisor__swiper-button-prev',
      },
      pagination: {
        el: '.advisor__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          if((index >= 1 && index <= this.slides.length - 2) || 1200 > window.screen.width)
          return '<span class="' + className + '"></span>';
          else
            return '<span  class="' + className + ' hidden-bullet"></span>';
       }
      },
      
        on: {
            slideChange : function() {
              if(window.screen.width > 1200)
              {
              if(this.activeIndex == 1)
              {
                  this.allowSlidePrev = false;
                  this.navigation.prevEl.classList.add("swiper-button-disabled");
              }
              else
              {
                this.allowSlidePrev = true;
                this.navigation.prevEl.classList.remove("swiper-button-disabled");
              }
               if(this.activeIndex == this.slides.length - 2)
               {
                  this.allowSlideNext = false;
                  this.navigation.nextEl.classList.add("swiper-button-disabled");
               }
              else
              {
                  this.allowSlideNext = true;
                  this.navigation.nextEl.classList.remove("swiper-button-disabled");
              }
            }
              
            }
        }
      
    });
    if(window.screen.width > 1200)
    advSwiper.slideNext();
    
    partSwiper = new Swiper('.partner-swiper',{
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: '.partner__swiper-button-next',
        prevEl: '.partner__swiper-button-prev',
      },
      simulateTouch: false,
      pagination: {
        el: '.partner__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          if((index >= 1 && index <= this.slides.length - 2) || 1200 > window.screen.width)
          return '<span class="' + className + '"></span>';
          else
            return '<span  class="' + className + ' hidden-bullet"></span>';
       }
      },
      
        on: {
            slideChange : function() {
              if(window.screen.width > 1200)
              {
              if(this.activeIndex == 1)
              {
                  this.allowSlidePrev = false;
                  this.navigation.prevEl.classList.add("swiper-button-disabled");
              }
              else
              {
                this.allowSlidePrev = true;
                this.navigation.prevEl.classList.remove("swiper-button-disabled");
              }
               if(this.activeIndex == this.slides.length - 2)
               {
                  this.allowSlideNext = false;
                  this.navigation.nextEl.classList.add("swiper-button-disabled");
               }
              else
              {
              this.allowSlideNext = true;
              this.navigation.nextEl.classList.remove("swiper-button-disabled");
              }
            }
              
            }
        }
      
    });
    if(window.screen.width > 1200)
    partSwiper.slideNext();
    

    busiSwiper = new Swiper(
      ".business-swiper",
      {
          direction: 'horizontal',
          loop: true,
          speed: 1000,
          effect: "slide",
          autoHeight: true,
          pagination: {
            clickable: true,
            el: '.business__swiper-pagination'
          }
      }
    );
    
});

$(window).scroll(function() {
  //   var elementTop = $(".swiper-slide-active .slide-content").offset().top;
  //   var elementBottom = elementTop + $(".swiper-slide-active .slide-content").outerHeight();

  //   var viewportTop = $(window).scrollTop();
  //   var viewportBottom = viewportTop + window.screen.height;
  //  if(elementBottom <= viewportBottom && elementTop >= viewportTop)
  //  {
  //       mySwiper.mousewheel.enable();
  //       mySwiper.allowTouchMove = true;
  //  }
  //   else
  //   {
  //        mySwiper.mousewheel.disable();
  //        mySwiper.allowTouchMove = false;
  //   }
      
});

}
