// src/services/recipes.js
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



export function mockGetRecipeFullDetails(recipeId) {
    return { data: { recipe: recipe_full_view } } ;
  }
  
  export async function getRandomRecipes() {
    return await axios.get(`http://localhost:3000/recipes/random?number=3`);
  }