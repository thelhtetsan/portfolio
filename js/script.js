/*--------- Animation on scroll ------*/
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});
$(document).ready(function () {
  $(".jp").hide();

  $("#btnDark").click(function () {
    //alert("dark");
    //var element = document.body;
    document.body.classList.toggle("dark-mode");
    $(".navbar a").toggleClass("dark-mode-color");
    $(".div-lang label").toggleClass("dark-mode-color");
    $(".btnDark .iconMode").toggleClass("dark-mode-color");
    $(".btnDark .iconMode").toggleClass("fa-moon fa-sun");
    $(".divAbout").toggleClass("dark-mode-box");
    $(".triangle-left-md").toggleClass("triangle triangle-dark");
    $("h1 ,h2 ,h3,h4 ,h5").toggleClass("dark-mode-color");

    $(".timeline.edu .timeline-container").toggleClass(
      "timeline-icon timeline-icon-dark"
    );
    $(".timeline.exp .timeline-container").toggleClass(
      "timeline-icon timeline-icon-dark"
    );
    $(".footer").toggleClass("dark-mode-footer");
    $("header").toggleClass("dark-nav-top");
    $(".scroll-down span").toggleClass("dark-mode-color");
  });

  /*=========================================================================
   Progress bar animation with Waypoint JS
   =========================================================================*/
  if ($(".skill-item").length > 0) {
    var waypoint = new Waypoint({
      element: document.getElementsByClassName("skill-item"),
      handler: function (direction) {
        $(".progress-bar").each(function () {
          var bar_value = $(this).attr("aria-valuenow") + "%";
          $(this).animate({ width: bar_value }, { easing: "linear" });
        });

        this.destroy();
      },
      offset: "50%",
    });
  }
  /*------------- Swiper ------------- */
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });
  /*------------ magnific --------- */
  //Magnifire

  $("#portfolio-wapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $("#flexSwitchCheckDefault").click(function () {
    if ($("#flexSwitchCheckDefault").prop("checked")) {
      //alert("checked");
      // $(".contentJapan").css("display", "block");
      // $(".contentEnglish").css("display", "none");
      $(".en").hide();
      $(".jp").show();
    } else {
      //alert("Unchecked");
      // $(".contentJapan").css("display", "none");
      // $(".contentEnglish").css("display", "block");
      $(".en").show();
      $(".jp").hide();
    }
  });

  /*=========================================================================
   Text Rotating
   =========================================================================*/
  $(".text-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "bounceIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 4000,
    complete: function () {
      // Called after the entrance animation is executed.
    },
  });

  //mobile nav
  $(
    ".js--nav-icon,#home-link,#about-link,#experience-link,#skills-link,#projects-link,#contact-link"
  ).click(function () {
    //$("ul").slideToggle(200);

    if ($(".js--nav-icon").hasClass("fa-bars")) {
      $(".js--nav-icon").removeClass("fa-bars");
      $(".js--nav-icon").addClass("fa-times");
      $("#nav-ul").removeClass("hidden-ul");
      $("#nav-ul").addClass("mobile-nav-ul");
      $("header").addClass("mobile-header");
      $("#header-div").addClass("mobile-header-div");
      $("#nav-div").addClass("mobile-nav-div");
    } else {
      $(".js--nav-icon").removeClass("fa-times");
      $(".js--nav-icon").addClass("fa-bars");
      $("#nav-ul").addClass("hidden-ul");
      $("#nav-ul").removeClass("mobile-nav-ul");
      $("header").removeClass("mobile-header");
      $("#header-div").removeClass("mobile-header-div");
      $("#nav-div").removeClass("mobile-nav-div");
    }
  });
});
//navbar section
$(document).ready(function () {
  $(window).scroll(function () {
    //For show
    if ($(window).scrollTop() > 50) {
      //console.log($(window).scrollTop());
      $("header").addClass("white-nav-top");
      //$(".navbar-brand img").attr("src", "./resources/img/logo/logo-dark.png");
      $("#back-to-top").fadeIn();
    }
    //for hide
    else {
      $("header").removeClass("white-nav-top");
      //$(".navbar-brand img").attr("src", "./resources/img/logo/logo.png");
      $("#back-to-top").fadeOut();
    }
  });
});
//scroll effect(want to smooth when scrolling)
$(document).ready(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    var select_id = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(select_id).offset().top - 65,
      },
      1250,
      "easeInOutExpo"
    );
  });
});

// $(window).bind("scroll", function () {
//   var currentTop = $(window).scrollTop();
//   var elems = $(".scrollspy");
//   elems.each(function (index) {
//     var elemTop = $(this).offset().top;
//     var elemBottom = elemTop + $(this).height();
//     if (currentTop >= elemTop && currentTop <= elemBottom) {
//       var id = $(this).attr("id");
//       //alert(id);
//       var navElem = $('a[href="#' + id + '"]');
//       navElem.parent().addClass("active").siblings().removeClass("active");
//     }
//   });
// });
