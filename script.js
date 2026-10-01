// =========================================================
// 1. Data: Array of 12 Indian Home Dishes
// =========================================================
const dishes = [
  {
    name: "Masala Dosa",
    meal: "Breakfast",
    time: "25 mins",
    type: "Veg"
  },
  {
    name: "Rava Upma",
    meal: "Breakfast",
    time: "20 mins",
    type: "Veg"
  },
  {
    name: "Aloo Paratha",
    meal: "Breakfast",
    time: "25 mins",
    type: "Veg"
  },
  {
    name: "Egg Bhurji",
    meal: "Breakfast",
    time: "15 mins",
    type: "Non-veg"
  },
  {
    name: "Vegetable Pulao",
    meal: "Lunch",
    time: "30 mins",
    type: "Veg"
  },
  {
    name: "Sambar",
    meal: "Lunch",
    time: "35 mins",
    type: "Veg"
  },
  {
    name: "Rajma Chawal",
    meal: "Lunch",
    time: "40 mins",
    type: "Veg"
  },
  {
    name: "Fish Curry",
    meal: "Lunch",
    time: "35 mins",
    type: "Non-veg"
  },
  {
    name: "Chapati",
    meal: "Dinner",
    time: "20 mins",
    type: "Veg"
  },
  {
    name: "Palak Paneer",
    meal: "Dinner",
    time: "30 mins",
    type: "Veg"
  },
  {
    name: "Dal Tadka",
    meal: "Dinner",
    time: "25 mins",
    type: "Veg"
  },
  {
    name: "Chicken Curry",
    meal: "Dinner",
    time: "40 mins",
    type: "Non-veg"
  }
];

// =========================================================
// 2. Select the Grid Container from the DOM
// =========================================================
const dishGrid = document.getElementById("dish-grid");

// =========================================================
// 3. Function to Render Dish Cards into the Grid
// =========================================================
function showDishes(dishList) {
  // Clear any existing content inside the grid
  dishGrid.innerHTML = "";

  // Loop through each dish object and create a card
  dishList.forEach(function (dish) {
    // Create the main card element
    const card = document.createElement("article");
    card.className = "dish-card";

    // Choose the CSS class for the Veg or Non-veg tag
    const dietClass = dish.type === "Veg" ? "diet-veg" : "diet-non-veg";

    // Fill the card with the dish name, heart button, meal type, cooking time, and veg/non-veg tag
    card.innerHTML = `
      <div class="card-header">
        <h2 class="dish-name">${dish.name}</h2>
        <button type="button" class="heart-btn" aria-label="Favorite ${dish.name}">♡</button>
      </div>
      <div class="card-details">
        <div class="dish-meta">
          <span class="meal-type">${dish.meal}</span>
          <span class="meta-separator" aria-hidden="true">·</span>
          <span class="cooking-time">${dish.time}</span>
        </div>
        <span class="diet-tag ${dietClass}">
          <span class="diet-dot" aria-hidden="true"></span>
          ${dish.type}
        </span>
      </div>
    `;

    // Add the finished card to the grid
    dishGrid.appendChild(card);
  });
}

 
showDishes(dishes);
const searchBox = document.querySelector("input");
const selects = document.querySelectorAll("select");
const mealSelect = selects[0];
const dietSelect = selects[1];

let currentList = dishes;
function applyFilters() {
  const text = searchBox.value.toLowerCase();
  const meal = mealSelect.value.toLowerCase();
  const diet = dietSelect.value.toLowerCase();

  const result = dishes.filter(function (dish) {
    const nameOk = dish.name.toLowerCase().includes(text);
    const mealOk = meal === "all" || dish.meal.toLowerCase() === meal;
    const dietOk = diet === "all" || dish.type.toLowerCase() === diet;
    return nameOk && mealOk && dietOk;
  });
currentList = result;
  showDishes(result);
}

searchBox.addEventListener("input", applyFilters);
mealSelect.addEventListener("change", applyFilters);
dietSelect.addEventListener("change", applyFilters);
const surpriseBtn = document.querySelector("button");
surpriseBtn.addEventListener("click", function () {
  if (currentList.length === 0) return;
  const randomIndex = Math.floor(Math.random() * currentList.length);
  const randomDish = currentList[randomIndex];
  showDishes([randomDish]);
});