//Cart event
let $ = function (selector) {
    return document.querySelector(selector);
}

$(".cart").addEventListener("click", function () {
    document.location.href = "project_cart.html";
});

// Menu events

const comicsLinks = document.querySelectorAll(".comics");

comicsLinks.forEach(link =>{
  link.addEventListener("click", function () {
    document.location.href = "./project_list-comics.html";
  });
});

const menuBurger = document.querySelector(".burger");
menuBurger.addEventListener("click", function () {

  this.classList.toggle("active");
  document.querySelector(".header__menu").classList.toggle("open");
  document.querySelector("a.account").parentNode.classList.toggle("active");
});