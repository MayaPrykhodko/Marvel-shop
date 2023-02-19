// Rating comics event
let $ = function (selector) {
    return document.querySelector(selector);
}

const stars = document.querySelectorAll(".comics-card-vector__item");

stars.forEach(star => {
    star.addEventListener("click", function (e) {
        let currentStar = e.target;
        currentStar.classList.toggle("show-star");
    });
});


// Editor icons

$(".button-bold").addEventListener("click", function () {
    if ($("textarea").style.fontWeight == "bold") {
        $("textarea").style.fontWeight = "normal";
    }
    else
        $("textarea").style.fontWeight = "bold";
});

$(".button-italic").addEventListener("click", function () {
    if ($("textarea").style.fontStyle == "italic") {
        $("textarea").style.fontStyle = "normal";
    }
    else
        $("textarea").style.fontStyle = "italic";
});

$(".button-underline").addEventListener("click", function () {
    if ($("textarea").style.textDecoration == "underline") {
        $("textarea").style.textDecoration = "none";
    }
    else
        $("textarea").style.textDecoration = "underline";
});

$(".button-justify").addEventListener("click", function () {
    $("textarea").style.textAlign = "justify";
});

$(".button-left").addEventListener("click", function () {
    $("textarea").style.textAlign = "left";
});

$(".button-right").addEventListener("click", function () {
    $("textarea").style.textAlign = "right";
});

let currentFontSize = 14;

$(".button-height").addEventListener("click", function () {
    currentFontSize++;
    let newFontSize = currentFontSize + "px";
    $("textarea").style.fontSize = newFontSize;
});

// Textarea events

$("textarea").addEventListener("mouseout", function () {
    $("textarea").style.outline = "none";
});

$("textarea").addEventListener("keydown", function (e) {
    if (e.code == "Enter") {
        if ($("textarea").value && $("textarea").value.length < 200) {
            showUserComment($("textarea"), $(".user-comments-list"));
            $("textarea").value = "";
        }
    }
    else return;
});

function showUserComment(textarea, element) {

    let div = document.createElement("div");
    div.classList.add("user-comments-list__item");
    let rating = $(".comics-card-user-rating").innerHTML;
    let button = document.createElement("button");
    button.classList.add("comment-button");
    button.innerHTML = "X";
    div.insertAdjacentHTML("afterbegin", `<div class="user-comment-title"><div class="user-photo"> <img src="./pictures/user.png" alt="user"/></div> <div class="user-name">Yoann TERUEL</div> ${rating}</div>`);
    div.insertAdjacentHTML("beforeend", `<div class="user-comment-text">${textarea.value}</div>`);
    div.prepend(button);
    element.appendChild(div);
}

// Comics cards buttons event(show card details)
const comicsButtons = document.querySelectorAll(".comics-button");

[...comicsButtons].forEach(button => {

    button.addEventListener("click", function () {
        setTimeout(() => {
            document.location.href = "./project_comics-details.html";
        }, 500);

    });
});

// Comment buttons event(remove comment)
document.addEventListener("click", function (e) {
    let currentElement = e.target;
    if (currentElement.classList.contains("comment-button")) {
        let comment = currentElement.closest(".user-comments-list__item");
        comment.remove();
    }
});

let cart = [];

$(".purchase-button_cart").addEventListener("click", function (e) {
    cart.push(e.target.closest(".comics-details__data"));
    $(".count").textContent = cart.length;
});

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