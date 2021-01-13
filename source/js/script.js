try {
  var mobileMenuButton = document.querySelector(".site-nav-menu__button");
  var mobileMenuList = document.querySelector(".site-nav-menu__list");

  var menuActive = function () {
    if (mobileMenuButton.classList.contains("site-nav-menu__button--close")) {
      mobileMenuButton.classList.remove("site-nav-menu__button--close");
      mobileMenuButton.classList.add("site-nav-menu__button--open");
      mobileMenuList.classList.add("site-nav-menu__list--open");
    }
    else {
      mobileMenuButton.classList.remove("site-nav-menu__button--open");
      mobileMenuButton.classList.add("site-nav-menu__button--close");
      mobileMenuList.classList.remove("site-nav-menu__list--open");
    }
  }

  menuActive();
  mobileMenuButton.addEventListener("click", function (evt) {
    menuActive();
  })
}
catch {

}

try {
  var mapLink = document.querySelector(".contacts__map-link");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    let mapFrame = document.createElement("iframe");
    mapFrame.className = "contacts__map";
    mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6037999040354!2d30.322010416394033!3d59.938716271971415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2sBolshaya+Konyushennaya+ul.%2C+19%2C+Sankt-Peterburg%2C+Russia%2C+191186!5e0!3m2!1sen!2s!4v1441888483426";
    mapFrame.title = "Офис компании по адресу ул. Большая Конюшенная 19/8, Санкт-Петербург";
    mapLink.replaceWith(mapFrame)
  })
}
catch {

}

try {
  function mask(event) {
    var matrix = "8 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
      if (this.value.length == 1) this.value = ""
    } else setCursorPosition(this.value.length, this)
  };
  var input = document.querySelector(".program__phone");
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
}
catch {

}
