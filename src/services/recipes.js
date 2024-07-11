// src/services/recipes.js
// import axios from "axios";
import shared_data from "../main"; // Adjust the path based on your project structure
const axios = require("axios");


export async function getRecipePreview(recipe_id) {
  try {
    const response = await axios.get("http://localhost:3000/recipes/preview/" + recipe_id);
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

export async function getRandomRecipes() {
  return await axios.get(`http://localhost:3000/recipes/random?number=3`);
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

  export async function getRecipePage(recipe_id) {
    try {
      const response = await axios.get("http://localhost:3000/recipes/fullDetails/" + recipe_id);
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

