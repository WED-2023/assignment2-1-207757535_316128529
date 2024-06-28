<template>
  <div class="recipe-container">
    <div class="image-container">
      <img src="@/assets/recipePage.jpg" alt="Recipe Page" class="recipe-image" />
      <div class="overlay">
        <h1>Recipe Page</h1>
      </div>
    </div>
    <br>
    <div class="recipe-content">
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
              <div class="left-tags-container">
                <tags :recipe="recipe"/>
              </div>
              <div class="right-tags-container">
                <div class="watch-container">
                  <watch :recipeID="recipe.id" v-if="showLikeButton"/>
                </div>
                <div class="like-container">
                  <like v-if="showLikeButton"/>
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </div>

      <div class="recipe-details">
        <p class="details"></p>
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
            <li v-for="instruction in recipe.analyzedInstructions" :key="instruction.step">
              {{ instruction.instruction }}
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
import { mockAddFavorite } from "../services/user.js";
import Like from "../components/Like.vue";
import Watch from "../components/Watch.vue";
import Tags from "../components/Tags.vue";

export default {
  name: "recipe",
  components: {
    Like,
    Watch,
    Tags
  },
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
          this.likeButtonImage = require("@/assets/vi.png");
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
  align-items: center;
  background-color: #1d1b1b;
  color: #ffffff;
  padding: 20px;
}

.image-container {
  position: relative;
  display: inline-block;
  width: 100%;
  max-height: 500px;
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

.recipe-content {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe-card {
  width: 70%;
  margin-right: 40%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.recipe-details {
  width: 100%;
  text-align: left;
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #9bbcad;
  margin-top: 0px;
}

.recipe-footer-content {
  font-weight: bold;
  color: #9bbcad;
  font-weight: 2em;
  text-align: center;
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
  margin-left: 20px;
  padding-left: 20px;
}

.ingredients ul li, .instructions ul li, .summary p {
  font-family: Arial, sans-serif;
  font-weight: bold;
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
  text-align: center;
}

.recipe-overview li {
  flex-grow: 1;
  display: table-cell;
}

.tags-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
}

.left-tags-container {
  display: flex;
}

.right-tags-container {
  display: flex;
}

.tag-icon {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}

.like-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.watch-container {
  display: flex;
  align-items: center;
  margin-right: 40px;
}
</style>
