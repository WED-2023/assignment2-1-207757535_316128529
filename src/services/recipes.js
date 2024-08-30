// src/services/recipes.js
// import axios from "axios";
import shared_data from "../main"; // Adjust the path based on your project structure
const axios = require("axios");


export async function getRecipePreview(recipe_id){
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

  export async function getMyRecipePreview(recipe_id){
    try {
      const response = await axios.get("http://localhost:3000/recipes/myRecipePreview/" + recipe_id);
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



export async function getRandomRecipes(){
  try {
    const response = await axios.get(`http://localhost:3000/recipes/random?number=3`);
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

    export async function getMyRecipePage(recipe_id) {
      try {
        const response = await axios.get("http://localhost:3000/recipes/myRecipesFullDetails/" + recipe_id);
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
  

    export async function get_search_result(query, cuisine, diet, intolerances, sort, number) {
      try {
        const response = await axios.get(`http://localhost:3000/recipes/search?query=${query}&number=${number}&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&sort=${sort}`);
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

  
  

