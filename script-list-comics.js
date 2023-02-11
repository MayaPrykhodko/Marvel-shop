//Filter Form

const comicsRow = document.querySelector(".comics-row__comics-cards");
let template = document.querySelector("#comics-card").innerHTML;
const filter = document.querySelector(".filter-form");
const characters = document.querySelector(".characters-list");
const prices = document.querySelector(".prices");
const sorts = document.querySelector(".sort-list");

let cardsArray = [
  {
    id: 1,
    character: "Spiderman",
    imagePath: "./pictures/card1.png",
    rating: 4.0,
    name: "Spiderman",
    price: 21,
  },
  {
    id: 2,
    character: ["Iron-Man", "Thor", "Captain America", "Hulk"],
    imagePath: "./pictures/card2.png",
    rating: 4.5,
    name: "Avengers",
    price: 41,
  },
  {
    id: 3,
    character: "Star-Lord",
    imagePath: "./pictures/card3.png",
    rating: 2.1,
    name: "Guardian of the Galaxy",
    price: 15,
  },
  {
    id: 4,
    character: "Hulk",
    imagePath: "./pictures/card4.png",
    rating: 3.5,
    name: "Hulk",
    price: 16,
  },
  {
    id: 5,
    character: "Hulk",
    imagePath: "./pictures/card4.png",
    rating: 3.5,
    name: "Hulk",
    price: 16,
  },
  {
    id: 6,
    character: "Spiderman",
    imagePath: "./pictures/card1.png",
    rating: 4.0,
    name: "Spiderman",
    price: 21,
  },
  {
    id: 7,
    character: "Star-Lord",
    imagePath: "./pictures/card3.png",
    rating: 2.1,
    name: "Guardian of the Galaxy",
    price: 15,
  },
  {
    id: 8,
    character: ["Iron-Man", "Thor", "Captain America", "Hulk"],
    imagePath: "./pictures/card2.png",
    rating: 4.5,
    name: "Avengers",
    price: 41,
  },
  {
    id: 9,
    character: ["Iron-Man", "Thor", "Captain America", "Hulk"],
    imagePath: "./pictures/card2.png",
    rating: 4.5,
    name: "Avengers",
    price: 41,
  },
  {
    id: 10,
    character: "Hulk",
    imagePath: "./pictures/card4.png",
    rating: 3.5,
    name: "Hulk",
    price: 16,
  },
  {
    id: 11,
    character: "Star-Lord",
    imagePath: "./pictures/card3.png",
    rating: 2.1,
    name: "Guardian of the Galaxy",
    price: 15,
  },
  {
    id: 12,
    character: "Spiderman",
    imagePath: "./pictures/card1.png",
    rating: 4.0,
    name: "Spiderman",
    price: 21,
  },
  {
    id: 13,
    character: "Spiderman",
    imagePath: "./pictures/card1.png",
    rating: 4.0,
    name: "Spiderman",
    price: 21,
  },
  {
    id: 14,
    character: ["Iron-Man", "Thor", "Captain America", "Hulk"],
    imagePath: "./pictures/card2.png",
    rating: 4.5,
    name: "Avengers",
    price: 41,
  },
  {
    id: 15,
    character: "Star-Lord",
    imagePath: "./pictures/card3.png",
    rating: 2.1,
    name: "Guardian of the Galaxy",
    price: 15,
  },
  {
    id: 16,
    character: "Hulk",
    imagePath: "./pictures/card4.png",
    rating: 3.5,
    name: "Hulk",
    price: 16,
  },
];

class ComicsCard {
  constructor(character, imagePath, rating, name, price, template) {
    this.character = character;
    this.imagePath = imagePath;
    this.rating = rating;
    this.name = name;
    this.price = price;
    this.template = template;
  }

  render(element) {
    let html = Mustache.render(this.template, this);
    element.insertAdjacentHTML("beforeend", html);
  }
}

window.addEventListener("load", function () {
  showCards(cardsArray);
  showComicsDetails();
});


filter.addEventListener("change", function () {

  let character = characters.value;
  let price = prices.value;
  let sort = sorts.value;
  let filteredArray = [];

  if (character != "") {
    cardsArray.map(card => {
      if (card.character == character) {
        filteredArray.push(card);
      }
      if (Array.isArray(card.character)) {
        for (let item of card.character) {
          if (item == character)
            filteredArray.push(card);
        }
      }
    });
  }
  else
    filteredArray = cardsArray;

  filteredArray = filterByPrice(price, filteredArray);
  filteredArray = sortByPrice(sort, filteredArray);
  

  comicsRow.innerHTML = "";
  showCards(filteredArray);

});

function showCards(array) {

  let showedCards = [];
  let comicsCard;

  for (let item of array) {
    let character = item.character;
    let imagePath = item.imagePath;
    let rating = item.rating.toFixed(2);
    let name = item.name;
    let price = item.price.toFixed(2);
    comicsCard = new ComicsCard(character, imagePath, rating, name, price, template);
    showedCards.push(comicsCard);
  }

  showedCards.forEach(item => item.render(comicsRow));
}

function showComicsDetails(){

  const comicsButtons = document.querySelectorAll(".comics-button_release");
  [...comicsButtons].forEach(button => {

    button.addEventListener("click", function() {
      setTimeout(() => {
        document.location.href = "./project_comics-details.html";
      }, 500);
  
    });
  });
}

function filterByPrice(value, filteredArray) {

  switch (value) {
    case "20":
      filteredArray = filteredArray.filter(item => item.price <= 20);
      break;
    case "21-40":
      filteredArray = filteredArray.filter(item => item.price >= 21 && item.price <= 40);
      break;
    case "41":
      filteredArray = filteredArray.filter(item => item.price >= 41);
      break;
    default:
      break;
  }
  return filteredArray;
}

function sortByPrice(value, filteredArray) {
  switch (value) {
    case "cheap-expensive":
      filteredArray.sort((a, b) => a.price - b.price);
      break;
    case "expensive-cheap":
      filteredArray.sort((a, b) => b.price - a.price);
      break;
    default:
      filteredArray.sort((a, b) => a.id - b.id);
      break;
  }
  return filteredArray;
}

// Comics buttons event
document.addEventListener("click", function(e){
 if (e.target.classList.contains("comics-button_release")) {
  showComicsDetails();
 }

});

