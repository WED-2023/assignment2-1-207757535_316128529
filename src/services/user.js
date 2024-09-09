import axios from "axios";
import shared_data from "@/main.js"; // Import the shared data

export async function AddFavorite(recipeId) {
  try {
    const response = await axios.post(shared_data.server_domain + "/users/favorites", {
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
    const response = await axios.post(shared_data.server_domain + `/users/lastViewed`, {user_id : shared_data.username, recipe_id: recipe_id },
      {withCredentials: true});
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

export async function isViewedRecipe(recipe_id) {
  try {
    const response = await axios.get(shared_data.server_domain + `/users/isViewedRecipe/` + recipe_id);
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

export async function addNewRecipe(recipe_details) {
  try {
    const response = await axios.post(shared_data.server_domain + `/users/MyRecipes`, {recipe_details },
      {withCredentials: true});
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

export async function GetFavoritesRecipes() {
  try {
    const response = await axios.get(shared_data.server_domain + "/users/favorites");
    return  response;
  }
  catch (error) {
    // Handle error response from server
    if (error.response) {
      return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
    } else {
      return { status: 500, message: "Server error", success: false };
    }
  }
}

export async function isLikedRecipe(recipe_id) {
  try {
    const response = await axios.get(shared_data.server_domain + "/users/isLikedRecipe/" + recipe_id);
    return  response;
  }
  catch (error) {
    // Handle error response from server
    if (error.response) {
      return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
    } else {
      return { status: 500, message: "Server error", success: false };
    }
  }
}

export async function getLastThreeRecipes() {
  try {
    const response = await axios.get(shared_data.server_domain + "/users/lastViewed");
    return  response;
  }
  catch (error) {
    // Handle error response from server
    if (error.response) {
      return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
    } else {
      return { status: 500, message: "Server error", success: false };
    }
  }}

  export async function getMyRecipes() {
    try {
      const response = await axios.get(shared_data.server_domain + "/users/MyRecipes");
      return  response;
    }
    catch (error) {
      // Handle error response from server
      if (error.response) {
        return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
      } else {
        return { status: 500, message: "Server error", success: false };
      }
    }
  }

  
