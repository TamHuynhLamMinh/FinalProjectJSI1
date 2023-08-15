function showDropdown() {
  let button = document.getElementById("dropdown-content");
  button.style.display = "flex";
  button.style.flexDirection = "column";
}

function hideDropdown() {
  let button = document.getElementById("dropdown-content");
  button.style.display = "none";
}

let games = [
  {
    name: "Rabbit Races",
    image:
      "assets/images/Rabbit Race.png",
    category: "broadgame",
    link: "game1.html",
  },
  {
    name: "Chirstmas Countdown",
    image:
      "assets/images/Christmas Countdown.png",
    category: "sandbox",
    link: "game2.html",
  },
  {
    name: "Cat Coffee",
    image:
      "assets/images/Cat-Coffe.png",
    category: "sandbox",
    link: "game3.html",
  },
  {
    name: "Cinamon Cafe",
    image:
      "assets/images/Cinamon Cafe.png",
    category: "sandbox",
    link: "game4.html",
  },
  {
    name: "Pusheen Cafe",
    image:
      "assets/images/Pusheen Cafe.png",
    category: "sandbox",
    link: "game5.html",
  },
  {
    name: "Catch Fish",
    image:
      "assets/images/Catch Fish.png",
    category: "sandbox",
    link: "game6.html",
  },
  {
    name: "Collect Flowers",
    image:
      "assets/images/Collect Flowers.png",
    category: "sandbox",
    link: "game7.html",
  },
  {
    name: "Tropical Forest",
    image:
      "assets/images/Tropical Forest.png",
    category: "sandbox",
    link: "game8.html",
  },
  {
    name: "Cat Math",
    image:
      "assets/images/Cat Math.png",
    category: "sandbox",
    link: "game9.html",
  },
  {
    name: "The Spelling Bee",
    image:
      "assets/images/The Spelling Bee.png",
    category: "sandbox",
    link: "game10.html",
  },
];

inputSearch = document.getElementById("searchText");
inputSearch.addEventListener("change", (event) => {
  searchText = inputSearch.value;
  games.forEach((item) => {
    let name = item.name;
    if (name.includes(searchText)) {
    }
  });
});

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", (event) => {
    let link = item.getAttribute("link");
    window.location.href = link;
  });
});

const searchInput = document.getElementById("searchText");
const dropdownSearch = document.getElementById("dropdown-search");
const dropdownItems = document.querySelectorAll(".dropdown-item");

function handleInput() {
  const searchText = searchInput.value.toLowerCase();
  filterDropdown(searchText);
}

function filterDropdown(searchText) {
  for (const item of dropdownItems) {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(searchText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  dropdownSearch.style.display = "block";
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-input")) {
    dropdownSearch.style.display = "none";
  }
});

document.getElementById("searchText").addEventListener("input", () => {
  const database = [
    "Rabbit Race",
    "Chirstmas Countdown",
    "Cat Coffee",
    "Cinamon Cafe",
    "Pusheen Cafe",
    "Catch Fish",
    "Collect Flowers",
    "Tropical Forest",
    "Cat Math",
    "The Spelling Bee",
  ];
  const searchInput = document.getElementById("searchText");
  const dropdownSearch = document.getElementById("dropdown-search");
  if(searchInput.value == '') {
    dropdownSearch.style.display = 'none';
    return;
  }

  dropdownSearch.innerHTML = "";

  let string = "<ul>";
  let count = 0;
  for (const item of games) {
    console.log(item);
    if (item.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
      string += `<li class="img-li"><img src="${item.image}" alt=""><a class="dropdown-item" href="${item.link}">${item.name}</a></li>`;
      count++;
    }
  }
  string += "</ul>";
  dropdownSearch.innerHTML = string;
  if (count == 0) {
    dropdownSearch.style.display = "none";
  } else {
    dropdownSearch.style.display = "flex";
  }
});

let gameList = document.getElementById("game-play");
gameList.addEventListener("click", (event) => {
  gameList.innerHTML = "";
  for (let item of games) {
    gameList.innerHTML += `<div class="col-lg-3 col-sm-6">
    <div class="item">
      <div class="thumb">
        <img
          src="${item.image}"
          alt style="border-radius: 23px;">
        <a href="https://youtu.be/6jY2f6OkpBo"
          target="_blank"><i class="fa fa-play"></i></a>
      </div>
      <div class="down-content">
        <h4>${item.name}</h4>
        <span><i class="fa-solid fa-play"></i> 250</span>
      </div>
    </div>
  </div>`;
  }
});