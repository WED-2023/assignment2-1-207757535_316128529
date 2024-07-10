// src/services/user.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";


  export async function AddFavorite(recipeId) {
    try {
      alert(recipeId);
      // alert("http://localhost:3000/users/favorites/" + recipeId + "");
      const response = await axios.post("http://localhost:3000/users/favorites/" + recipeId + "");
      return response;
    } catch (error) {
      // Handle error response from server
      if (error.response) {
        return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
      } else {
        return { status: 500, message: "Server error", success: false };
      }
    }
    return { status: 200, response: { data: { message: "The Recipe successfully saved as favorite", success: true}} };
  }
  
  export function mockAddUserRecipe(recipeDetails) {
    return { status: 200, response: { data: { message: "The Recipe successfully added to My Recipes", success: true}} };
  }
  
  