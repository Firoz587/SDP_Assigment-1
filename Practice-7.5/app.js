const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results-container");

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=A";

async function fetchMeals(query) {
    try {
        const response = await fetch(`${API_BASE_URL}${query}`);
        const data = await response.json();
        displayResults(data.meals);
    } catch (error) {
        console.error("Error fetching data:", error);
        resultsContainer.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    }
}

function displayResults(meals) {
    resultsContainer.innerHTML = "";
    if (!meals) {
        resultsContainer.innerHTML = "<p>No meals found. Try a different search!</p>";
        return;
    }

    meals.forEach((meal) => {
        const mealCard = document.createElement("div");
        mealCard.classList.add("card");

        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="card-body">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strCategory}</p>
            </div>
        `;

        resultsContainer.appendChild(mealCard);
    });
}

searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        //console.log(query);
        fetchMeals(query);
    }
});

searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchButton.click();
    }
});
