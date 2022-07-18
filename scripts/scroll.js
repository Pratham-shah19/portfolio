// Hide Header on scroll down, Show Header on scroll up
var didScroll;
var lastScrollTop = 0;
var delta = 1;
var navbarHeight = $(".header").outerHeight();
$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down

    $(".header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $(".header").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}

//scroll trigger...
function scrollTrigger(selector, options = {}, trigger) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options, trigger);
  });
}
function addObserver(el, options, trigger) {
  // Check if `IntersectionObserver` is supported
  if (!("IntersectionObserver" in window)) {
    // Simple fallback
    // The animation/callback will be called immediately so
    // the scroll animation doesn't happen on unsupported browsers
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add(trigger);
    }
    // We don't need to execute the rest of the code
    return;
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el);
        } else {
          entry.target.classList.add(trigger);
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(el);
}
scrollTrigger(".skills", {}, "active");
scrollTrigger(".card-left", {}, "move-right");
scrollTrigger(".card-right", {}, "move-left");

//owl carousel
$(document).ready(function () {
  $(".carousel").owlCarousel({
    autoPlay: true,
    paginationSpeed: 500,
    pagination: false,
    gotToFirst: true,
    responsive: true,
    items: 3,
    itemsDesktop: [1194, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
  });
});




