function changeCss () {
    var bodyElement = document.querySelector("body");
    var navElement = document.querySelector("header");
    this.scrollY > 50 ? navElement.style.opacity = .95 : navElement.style.opacity = 1;
    }
    window.addEventListener("scroll", changeCss , false);