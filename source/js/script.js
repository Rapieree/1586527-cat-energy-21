try {
  var mobileMenuButton = document.querySelector(".site-nav-menu__button");
  var mobileMenuList = document.querySelector(".site-nav-menu__list");

  var menuActive = function() {
    if (mobileMenuButton.classList.contains("site-nav-menu__button--open")) {
      mobileMenuButton.classList.remove("site-nav-menu__button--open");
      mobileMenuButton.classList.add("site-nav-menu__button--close");
      mobileMenuList.classList.remove("site-nav-menu__list--open");
    }
    else {
      mobileMenuButton.classList.remove("site-nav-menu__button--close");
      mobileMenuButton.classList.add("site-nav-menu__button--open");
      mobileMenuList.classList.add("site-nav-menu__list--open");
    }
  }

  menuActive();
  mobileMenuButton.addEventListener("click", function(evt) {
    menuActive();
  })
}
catch {

}

try {
  sliderControl = document.querySelector(".control-range");
  sliderWrapper = document.querySelector(".slider__wrapper");

  sliderControl.addEventListener("input", function(evt) {
    sliderWrapper.style.gridTemplateColumns = Number(100 - sliderControl.value) + "% " + sliderControl.value + "%";
  })
}
catch {

}
