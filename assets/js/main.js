function initSlider() {
  let slider = tns({
    container: ".hero-banner",
    slideBy: 1,
    autoplay: false,
    controls: true,
    speed: 1300,
    prevButton: ".btn-left",
    nextButton: ".btn-right",
  });
}

function mobileBar() {
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

window.onload = () => {
  initSlider();
  mobileBar();
};
