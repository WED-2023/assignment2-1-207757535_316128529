// src/services/user.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import Axios from "axios";
import shared_data from "../main";
const axios = require("axios");


  export function mockAddFavorite(recipeId) {
    return { status: 200, response: { data: { message: "The Recipe successfully saved as favorite", success: true}} };
  }
  
  export function mockAddUserRecipe(recipeDetails) {
    return { status: 200, response: { data: { message: "The Recipe successfully added to My Recipes", success: true}} };
    
  }
  export async function addLastViewRecipes(recipe_id) {
    return await axios.post(`http://localhost:3000/users/lastViewed`, {"user_id": shared_data.username, "recipe_id": recipe_id },
      {withCredentials: true}
    );
  }
  