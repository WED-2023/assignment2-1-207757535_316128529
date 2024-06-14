<template>
  <div class="recipe-container">
    <div class="image-container">
      <img src="@/assets/recipePage.jpg" alt="Recipe Page" class="recipe-image" />
      <div class="overlay">
        <h1>Recipe Page</h1>
      </div>
    </div>
    <br>
    <div class="recipe-card">
      <b-card v-if="image_load" :img-src="recipe.image" img-alt="Image" tag="article" class="recipe-image">
        <div class="recipe-details">
          <div class="recipe-footer-content">
              <h2>{{ recipe.title }}</h2>
  
            <ul class="recipe-overview">
              <li>{{ recipe.readyInMinutes }} minutes</li>
              <li>{{ recipe.aggregateLikes }} likes</li>
            </ul>
          </div>
      
          <br>
          <div class="tags-container">
            <img v-if="recipe.vegetarian" src="@/assets/vegetarian.png" alt="Vegetarian" class="tag-icon">
            <img v-if="recipe.vegan" src="@/assets/vegan.png" alt="Vegan" class="tag-icon">
            <img v-if="recipe.glutenFree" src="@/assets/gluten.png" alt="Gluten Free" class="tag-icon">
            <div class="like-container" v-if="showLikeButton">
            <b-button id="like-button" @click="addToFavorites">
              <img :src="likeButtonImage" alt="Like Button">
            </b-button>
          </div>
          </div>
        </div>
      </b-card>
    </div>

    <!-- New section for title and details -->
    <div class="recipe-details">
      <p class="details"></p>
      <!-- Ingredients and Summary -->
       
      <div class="ingredients">
        <h3 class="section-title">Serving: {{ recipe.servings }}<br><br>Ingredients</h3>
        <ul>
          <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
            {{ ingredient.amount }} {{ ingredient.unit }} of {{ ingredient.name }}
          </li>
        </ul>
      </div>
      <div class="instructions">
        <h3 class="section-title">Instructions</h3>
        <ul>
          <li v-for=" instruction in recipe.analyzedInstructions" :key="instruction.step">
             {{ instruction.instruction}}
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
import { mockAddFavorite } from "../services/user.js";

export default {
  name: "recipe",
  data() {
    return {
      image_load: false,
      showDetails: false,
      recipe: null,
      likeButtonImage: require("@/assets/like.png")
    };
  },
  mounted() {
    this.getRecipe();
  },
  methods: {
    async getRecipe() {
      try {
        const response = mockGetRecipeFullDetails(1);
        this.image_load = true;
        const recipeDetails = response.data.recipe;
        this.recipe = recipeDetails;
      } catch (error) {
        console.log(error);
      }
    },
    async addToFavorites() {
      try {
        const response = await mockAddFavorite(this.recipe.id);
        if (response.status === 200 && response.response.data.success) {
          this.$root.toast("Recipe added!", "This recipe was added to your favorites", "success");
          this.likeButtonImage = require("@/assets/vi.png"); // Change to the new image
        } else {
          this.$root.toast("Failed to add", "There was an error adding this recipe to your favorites", "danger");
        }
      } catch (err) {
        this.$root.toast("Failed to add", "There was an error adding this recipe to your favorites", "danger");
      }
    }
  },
  props: {
    showLikeButton: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.recipe-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #0c1311;
  color: #ffffff;
  padding: 20px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay h1 {
  font-size: 6em;
  font-weight: bold;
  color: white;
}

.recipe-card {
  width: 50%;
  margin-top: 20px;
}

.recipe-details {
  margin-top: 0px;
  font-family: Arial, sans-serif; /* Change font */
  font-weight: bold; /* Make text bold */
  color: #9bbcad;
  width: 100%;
}
.recipe-footer-content{
  font-weight: bold; /* Make text bold */
  color: #9bbcad;
  font-weight: 2em;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
}

.details {
  margin-bottom: 10px;
}

.ingredients, .instructions, .summary {
  margin-top: 20px;
}

.section-title {
  font-size: 2em;
  margin-bottom: 10px;
  color: #99d4a2;
  font-weight: bold;
}

.ingredients ul, .instructions ul, .summary p {
  list-style-type: disc;
  margin-left: 20px; /* Add padding to the left */
  padding-left: 20px; /* Add padding to the left */
}

.ingredients ul li, .instructions ul li, .summary p {
  font-family: Arial, sans-serif; /* Change font */
  font-weight: bold; /* Make text bold */
  font-size: 1.5em;
  color: #ffffff;
}

.recipe-overview {
  width: 100%;
  display: flex;
  table-layout: fixed;
  margin-left: 0;
  padding-left: 0;
  margin-bottom: 0px;
  font-size: 1.5em;
  font-weight: bold;
}

.recipe-overview li {
  flex-grow: 1;
  display: table-cell;
  text-align: center;
}

.tags-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-top: 10px;
}

.tag-icon {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}

.like-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-left: 70%;
}

.like-container button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
}

.like-container button img {
  width: 30px;
  height: 30px;
}
</style>
