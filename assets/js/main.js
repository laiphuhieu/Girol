function initSlider() {
  let slider = tns({
    container: ".hero-banner",
    slideBy: 1,
    autoplay: false,
    controls: true,
    speed: 500,
    prevButton: ".btn-left",
    nextButton: ".btn-right",
  });
}

function initProductsSlider() {
  let slider2 = tns({
    container: ".slider-container",
    items: 1,
    nav: true,
    mouseDrag: true,
    speed: 1000,
    navAsThumbnails: true,
    // controlsContainer: ".products-slider-controler",
    preventActionWhenRunning: true,
  });
}

function handleMobileBar() {
  let btnMenu = document.querySelector(".menu-device-btn");
  let btnCloseMobileBar = document.querySelector(".close-menu");
  let home = document.querySelector(".home");
  let btnShowSubNav = document.querySelector(".more");
  let subNav = document.querySelector(".sub-nav2");

  btnMenu.addEventListener("click", function (e) {
    e.preventDefault();
    home.classList.add("mobile-active");
  });

  btnCloseMobileBar.addEventListener("click", function (e) {
    e.preventDefault();
    home.classList.remove("mobile-active");
  });

  btnShowSubNav.addEventListener("click", function (e) {
    e.preventDefault();
    subNav.classList.toggle("show");
    btnShowSubNav.classList.toggle("show");
  });
}

function handleMobileBarWindowResize() {
  let windowWidth = window.innerWidth;
  let home = document.querySelector(".home");
  let subNav = document.querySelector(".sub-nav2");
  let btnShowSubNav = document.querySelector(".more");

  function clearStateMobileBar() {
    home.classList.remove("mobile-active");
    btnShowSubNav.classList.remove("show");
    subNav.classList.remove("show");
  }

  if (windowWidth > 1023) clearStateMobileBar();
}

function handleMasonry() {
  var elem = document.querySelector(".grid");
  var msnry = new Masonry(elem, {
    // options
    itemSelector: ".product-wrapper",
    gutter: 0,
  });
}

window.addEventListener("resize", function () {
  handleMobileBarWindowResize();
});

window.onload = () => {
  initSlider();
  handleMobileBar();
  initProductsSlider();
  handleMasonry();
};

let accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
