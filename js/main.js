/*
 * Template Name: PRO Card - Material Resume / CV / vCard Template
 * Author: lmpixels
 * Author URL: http://themeforest.net/user/lmpixels
 * Version: 1.0
 */

(function ($) {
  "use strict";

  // Hide Mobile menu
  function mobileMenuHide() {
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
      $("#site_header").addClass("mobile-menu-hide");
    }
  }
  // /Hide Mobile menu

  //On Window load & Resize
  $(window)
    .on("load", function () {
      //Load
      // Animation on Page Loading
      $(".preloader").fadeOut("slow");

      // initializing page transition.
      var ptPage = $(".subpages");
      if (ptPage[0]) {
        PageTransitions.init({
          menu: "ul.site-main-menu",
        });
      }
    })
    .on("resize", function () {
      //Resize
      mobileMenuHide();

      setTimeout(function () {
        subpages_resize();
      }, 500);
    })
    .scroll(function () {
      if ($(window).scrollTop() < 20) {
        $(".header").removeClass("sticked");
      } else {
        $(".header").addClass("sticked");
      }
    })
    .scrollTop(0);

  // On Document Load
  $(document).on("ready", function () {
    // Mobile menu
    $(".menu-toggle").on("click", function () {
      $("#site_header").toggleClass("mobile-menu-hide");
    });

    // Mobile menu hide on main menu item click
    $(".site-main-menu").on("click", "a", function (e) {
      mobileMenuHide();
    });

    // Text rotation
    $(".text-rotation").owlCarousel({
      loop: true,
      dots: false,
      nav: false,
      margin: 0,
      items: 1,
      autoplay: true,
      autoplayHoverPause: false,
      autoplayTimeout: 3800,
      animateOut: "zoomOut",
      animateIn: "zoomIn",
    });

    //Form Controls
    $(".form-control")
      .val("")
      .on("focusin", function () {
        $(this).parent(".form-group").addClass("form-group-focus");
      })
      .on("focusout", function () {
        if ($(this).val().length === 0) {
          $(this).parent(".form-group").removeClass("form-group-focus");
        }
      });
  });
})(jQuery);
