<template>
  <div class="recipe-container">
    <br><br><br>
    <div class="recipe-card">
      <b-card
        v-if="image_load"
        :title="recipe.title"
        :img-src="recipe.image"
        img-alt="Image"
        tag="article"
        class="recipe-image"
      >
      <b-card-text>
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
            Product: {{ ingredient.name }}, Amount: {{ ingredient.amount }}
          </li>
        </ul>
      </div>

      <div class="summary">
        <h3 class="section-title">Summary</h3>
        <p v-html="recipe.summary"></p>
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
  background-color: #eeeeee;
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
  color: rgb(4, 72, 50);
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
  color: #1c3e24;
}

</style>
