import axios from "axios";
import shared_data from "../main"; // Adjust the path based on your project structure

export async function AddFavorite(recipeId) {
  try {
    const response = await axios.post("http://localhost:3000/users/favorites", {
      user_name: shared_data.username,
      recipe_id: recipeId,
    },
    { withCredentials: true });
    return response;
  } catch (error) {
    // Handle error response from server
    if (error.response) {
      return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
    } else {
      return { status: 500, message: "Server error", success: false };
    }
  }
}

export async function addLastViewRecipes(recipe_id) {
  try {
    const response = await axios.post(`http://localhost:3000/users/lastViewed`, {user_id : shared_data.username, recipe_id: recipe_id },
      {withCredentials: true});
    return response;
  } catch (error) {
    // Handle error response from server
    if (error.response) {
      alert("status: " + error.response.status + " message: " + error.response.data + " success: " + error.response.data.success);
      return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
    } else {
      return { status: 500, message: "Server error", success: false };
    }
  }
}

export async function addNewRecipe(recipe_details) {
  try {
    const response = await axios.post(`http://localhost:3000/users/MyRecipes`, {recipe_details },
      {withCredentials: true});
    return response;
  } catch (error) {
    // Handle error response from server
    if (error.response) {
      alert("status: " + error.response.status + " message: " + error.response.data + " success: " + error.response.data.success);
      return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
    } else {
      return { status: 500, message: "Server error", success: false };
    }
  }
}

export async function GetFavoritesRecipes() {
  try {
    const response = await axios.get("http://localhost:3000/users/favorites");
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

export async function getLastThreeRecipes() {
  try {
    const response = await axios.get("http://localhost:3000/users/lastViewed");
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
  }}

  export async function getMyRecipes() {
    try {
      const response = await axios.get("http://localhost:3000/users/MyRecipes");
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

  
