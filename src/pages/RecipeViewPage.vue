<template>
  
  <div class="recipe-container">
    <div class="image-container">
        <img src="@/assets/recipePage.jpg" alt="Recipe Page" class="recipe-image" />
        <div class="overlay">
          <h1>Recipe Page</h1>
        </div>
      </div>
    <br>
    <div class="image-cover">
    <div class="recipe-card">
      <b-card
        v-if="image_load"
        :title="recipe.title"
        :img-src="recipe.image"
        img-alt="Image"
        tag="article"
        class="recipe-image"
        
      >
      <b-card-text class="card-text">
        Ready in {{ recipe.readyInMinutes }} minutes  |  {{ recipe.aggregateLikes }} Likes
    </b-card-text>
      </b-card>
    </div>

    <!-- New section for title and details -->
    <div class="recipe-details">
      <p class="details"></p>

      <!-- Ingredients and Summary -->
      <div class="ingredients">
        <h3 class="section-title">Ingredients</h3>
        <ul>
          <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
            {{ ingredient.amount }} {{ ingredient.unit}} of {{ ingredient.name }}  
          </li>
        </ul>
      </div>
      <div class="ingredients">
        <h3 class="section-title">Instractions</h3>
        <ul>
          <li v-for="analyzedInstructions in recipe.analyzedInstructions" :key="analyzedInstructions.step">
            {{ analyzedInstructions.step }}. {{ analyzedInstructions.instruction }} 
          </li>
        </ul>
      </div>

      <div class="summary">
        <h3 class="section-title">Summary</h3>
        <p v-html="recipe.summary"></p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";
export default {
  name: 'recipe',
  data() {
    return {
      image_load: false,
      showDetails: false,
      recipe: null
    };
  },
  mounted() {
    this.getRecipe();
  },
  methods: {
    async getRecipe(){
      try {
        const response = mockGetRecipeFullDetails(1);
        this.image_load = true;
        const recipeDetails = response.data.recipe;
        this.recipe = recipeDetails;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.recipe-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: flex-start; /* Align content to the left */
  height: 100%; /* Ensure container takes full height */
  background-color: #000000;
  
}
.image-cover{
  background-image: url('@/assets/bg1.jpg');
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the image */
  height: 100%; /* Set a height for the container */
  width:100%; /* Optional: Set a width */
}

.recipe-card {
  width: 45%;
}

.recipe-image {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
}

.recipe-details {
  margin-top: 20px;
  font-family: Arial, sans-serif; /* Change font */
  font-weight: bold; /* Make text bold */
  color: rgb(0, 0, 0);

}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.details {
  margin-bottom: 5px;
}

.ingredients, .summary {
  margin-top: 20px;
}

.section-title {
  font-size: 40px;
  margin-bottom: 10px;
  color: #99d4a2;
  font-weight: bold;
}
.card-text{
  font-size: 20px;
  margin-bottom: 10px;
}

.ingredients ul, .summary p {
  list-style-type: disc;
  margin-left: 20px; /* Add padding to the left */
  padding-left: 20px; /* Add padding to the left */

}

.ingredients ul li, .summary p {
  font-family: Arial, sans-serif; /* Change font */
  font-weight: bold; /* Make text bold */
  font-size: 20px;
  color: #ffffff;
}
.image-container {
    position: relative;
    display: inline-block;
    width: 100%;
    max-height: 500px; /* Adjust this value to make the image less tall */
    overflow: hidden;
  }
  
  .recipe-image {
    width: 100%;
    height: 100%;
    display: block;
  }
  
  .overlay {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .summary{
    right: 50%;
    margin-right: 25%; /* Add padding to the left */
  padding-right: 25%;
  }
  
  .overlay h1 {
    font-size: 6em;
    font-weight: bold;
    color: white;
  }
  .ingredients{
    right: 50%;
    margin-right: 25%; /* Add padding to the left */
  padding-right: 25%;
  }
</style>
