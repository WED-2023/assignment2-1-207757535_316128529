// src/services/recipes.js
// import axios from "axios";
import shared_data from "../main"; // Adjust the path based on your project structure
const axios = require("axios");
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";

export function mockGetRecipesPreview(amount = 1) {
  let recipes = [];
  for(let i = 0; i < amount; i++){
    recipes.push(recipe_preview);
  }

  return { data: { recipes: recipes } };
}

export async function GetFavoritesRecipes() {
  try {
    const response = await axios.get("http://localhost:3000/users/favorites", {
      data: {
        user_name: shared_data.username,
      },
      withCredentials: true, // Ensure credentials are sent with the request
      headers: {
        "Cache-Control": "no-cache", // Ensure no caching
      },
    });
    return  response;
  }
  catch (error) {
    // Handle error response from server
    if (error.response) {
      alert("status: " + error.response.status + " message: " + error.response.data + " success: " + error.response.data.success);
      return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
    } else {
      return { status: 500, message: "Server error", success: false };
    }
  }
}

export async function getRandomRecipes() {
  return await axios.get(`http://localhost:3000/recipes/random?number=3`);
}

export function mockGetRecipeFullDetails(recipeId) {
    return { data: { recipe: recipe_full_view } } ;
  }
  
