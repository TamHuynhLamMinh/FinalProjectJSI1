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
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "broadgame",
    link: "game1.html",
  },
  {
    name: "Chirstmas Countdown",
    image:
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "sandbox",
    link: "game2.html",
  },
  {
    name: "Cat Coffee",
    image:
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "sandbox",
    link: "game3.html",
  },
  {
    name: "Cinamon Cafe",
    image:
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "sandbox",
    link: "game4.html",
  },
  {
    name: "Pusheen Cafe",
    image:
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "sandbox",
    link: "game5.html",
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
        <span><i class="fa fa-eye"></i> 250</span>
      </div>
    </div>
  </div>`;
  }
});