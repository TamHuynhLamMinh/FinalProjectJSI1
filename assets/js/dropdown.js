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
  },
  {
    name: "Chirstmas Countdown",
    image:
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "sandbox",
  },
  {
    name: "Cat Coffee",
    image:
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "sandbox",
  },
  {
    name: "Cinamon Cafe",
    image:
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "sandbox",
  },
  {
    name: "Pusheen Cafe",
    image:
      "https://cdna.artstation.com/p/assets/images/images…-lands-mushroom-and-trees-island-1.gif?1665683104",
    category: "sandbox",
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

  let count = 0;
  for (const item of database) {
    console.log(item);
    if (item.toLowerCase().includes(searchInput.value.toLowerCase())) {
      dropdownSearch.innerHTML += `<a href="#" class="dropdown-item">${item}</a>`;
      count++;
    }
  }
  if (count == 0) {
    dropdownSearch.style.display = "none";
  } else {
    dropdownSearch.style.display = "flex";
  }
});
