// Comics cards buttons event(show card details)
const comicsButtons = document.querySelectorAll(".comics-button");

[...comicsButtons].forEach(button => {

  button.addEventListener("click", function () {
    setTimeout(() => {
      document.location.href = "./project_comics-details.html";
    }, 500);

  });
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
  document.querySelector(".header").classList.toggle("clicked");
  document.querySelector(".account").parentElement.style.display ="block";
});