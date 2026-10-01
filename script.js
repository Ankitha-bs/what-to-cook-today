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

// =========================================================
// 4. Initial Page Load: Show All 12 Dishes
// (Search, dropdowns, Surprise me, and heart buttons are
//  intentionally left without event listeners for you to add!)
// =========================================================
showDishes(dishes);
