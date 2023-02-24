// Popups
const popupSignup = document.querySelector(".popup-modalsignup");
const formSignup = document.forms.signup;

const popupSignin = document.querySelector(".popup-modalsignin");
const formSignin = document.forms.signin;;

const buttonSignup = document.querySelector(".button_signup");
const buttonSignin = document.querySelector(".button_signin");

const linkSignup = document.querySelector("a.signup");
const linkSigin = document.querySelector("a.signin");

buttonSignup.addEventListener("click", function () {
openSingnup();
});

linkSignup.addEventListener("click", function() {
  openSingnup();
});

function openSingnup() {
  popupSignup.classList.add("opened");

  popupSignup.addEventListener("click", function (e) {
    if (!e.target.closest(".modalsignup")) {
      popupClose(e.target.closest(".popup-modalsignup"), formSignup);
    }
  });
}


buttonSignin.addEventListener("click", function (e) {
  openSingnin();
});

linkSigin.addEventListener("click", function (e) {
  openSingnin();
});

function openSingnin() {

  popupSignin.classList.add("opened");

  popupSignin.addEventListener("click", function (e) {
    if (!e.target.closest(".modalsignin")) {
      popupClose(e.target.closest(".popup-modalsignin"), formSignin);
    }
  });
}

const signupHeaderLink = document.querySelector(".modalsignup-header__link");
const signinHeaderLink = document.querySelector(".modalsignin-header__link");

signupHeaderLink.addEventListener("click", function () {
  popupClose(popupSignup, formSignup);
  popupSignin.classList.add("opened");
});

signinHeaderLink.addEventListener("click", function () {
  popupClose(popupSignin, formSignin);
  popupSignup.classList.add("opened");
});

function popupClose(popup, form) {
  popup.classList.remove("opened");

  form.reset();
  [...form.elements].forEach(element => {
    element.value == "";
    element.style.border = "0.4px solid #DBDBDB";
  });
  [...document.querySelectorAll("form span")].forEach(span => span.style.display = "none");
}

// Form Validation
// Signup
const signupLoginInput = document.querySelector(".form_signup input[name=login]");
const signupPasswordInput = document.querySelector(".form_signup input[type=password]");
const signupEmailInput = document.querySelector(".form_signup input[type=email]");
const signupCheckboxInput = document.querySelector(".form_signup input[type=checkbox]");
const signupRegisterButton = document.querySelector(".form-button_register");

focusInputs(formSignup);

function focusInputs(form) {
  [...form.elements].forEach(input => {

    const inputPlaceholder = input.placeholder;

    input.addEventListener("focus", function () {
      input.placeholder = "";
    });
    input.addEventListener("blur", function () {
      input.placeholder = inputPlaceholder;
    });
  });
}

signupLoginInput.addEventListener("change", checkLengthLogin);


function checkLengthLogin() {
  if (this.value.length < 6) {
    this.nextElementSibling.style.display = "block";
  }
  else {
    this.nextElementSibling.style.display = "none";
  }
}

signupPasswordInput.addEventListener("change", checkFormatPassword);

function checkFormatPassword() {
  if (!checkPassword(this)) {
    this.nextElementSibling.style.display = "block";
  }
  else {
    this.nextElementSibling.style.display = "none";
  }
}

signupEmailInput.addEventListener("change", function () {
  if (!checkEmail(signupEmailInput)) {
    signupEmailInput.nextElementSibling.style.display = "block";
  }
  else {
    signupEmailInput.nextElementSibling.style.display = "none";
  }
});

function checkPassword(input) {
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{6,}/g.test(input.value);
}

function checkEmail(input) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value);
}

signupCheckboxInput.addEventListener("click", function () {
  if (!signupCheckboxInput.checked) {
    signupCheckboxInput.nextElementSibling.style.display = "block";
  } else {
    signupCheckboxInput.nextElementSibling.style.display = "none";
  }

});

signupRegisterButton.addEventListener("click", function (e) {

  checkForm();

  function checkForm() {

    [...formSignup.elements].forEach(input => {
      if (!input.value) {
        input.style.border = "2px solid red";
        e.preventDefault();
      }
    });

    [...formSignup.elements].forEach(input => {
      input.addEventListener("change", function () {
        if (!input.value) {
          input.style.border = "2px solid red";
        } else
          input.style.border = "0.4px solid #DBDBDB";
      });
    });


    if (!signupCheckboxInput.checked) {
      signupCheckboxInput.nextElementSibling.style.display = "block";
    } else {
      signupCheckboxInput.nextElementSibling.style.display = "none";
    }
    const check = formSignup.checkValidity();

    if (!check) {
      alert("Form is incorrect!");
      e.preventDefault();
    }
    else {
      alert("You have succsessfully registered!");
    }
  }
});

//Signin
focusInputs(formSignin);

const signinLoginInput = document.querySelector(".form_signin input[name=login]");
const signinPasswordInput = document.querySelector(".form_signin input[type=password]");

signinLoginInput.addEventListener("change", checkLengthLogin);
signinPasswordInput.addEventListener("change", checkFormatPassword);

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
  document.querySelector("a.signin").parentNode.classList.toggle("active");
  document.querySelector("a.signup").parentNode.classList.toggle("active");
});