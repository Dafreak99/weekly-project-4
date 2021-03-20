// WOWJS

new WOW().init();
//

$(document).ready(function() {
  $(".feedback .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    dotsEach: true,
    nav: true
  });
  $(".owl-carousel").owlCarousel({
    items: 6,
    loop: true,
    dots: true,
    dotsEach: true
  });
});

let toggle = document.querySelector(".toggle");
let mainMenu = document.querySelector(".main-menu");
let exit = document.querySelector(".exit");

toggle.addEventListener("click", () => {
  mainMenu.style.right = "0%";
  mainMenu.classList.add("slide-in");
});

exit.addEventListener("click", () => {
  mainMenu.style.right = "-50%";
  mainMenu.classList.remove("slide-in");
});

document.body.addEventListener("mouseover", function(e) {
  let x = e.clientX || e.pageX;
  let y = e.clientY || e.pageY;

  let moving = document.querySelector(".moving");

  moving.style.left = x + "px";
  moving.style.top = y + "px";
});
