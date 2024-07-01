<template>
  <div class="recipe-container">
    <div class="cover-image-container">
      <img src="@/assets/recipePage.jpg" alt="Recipe Page" class="full-width-image" />
      <h1 class="cover-text">{{ recipe.title }}</h1>
    </div>
    <br>
    <div class="recipe-content">
      <div clas = "preview-conteiner">
        <RecipePreviewList
            :isUserLoggedIn="$root.store.username" :recipes="randomRecipes"
            style="text-align: center; font-family: Comfortaa; margin-top: 3%;"
            class="RandomRecipes center"
            :key="componentKey"
          />
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
import RecipePreviewList from "../components/RecipePreviewList";
import { mockGetRecipeFullDetails } from "../services/recipes.js";
import { mockGetRecipesPreview } from "../services/recipes.js"; // Import the mock function

export default {
  name: "recipe",
  components: {
    RecipePreviewList
  },
  data() {
    return {
      showDetails: false,
      recipe: null,
      preview: [],
    };
  },
  mounted() {
    this.getRecipe();
    this.fetchRecipes(1);
  },
  methods: {
    async getRecipe() {
      try {
        const response = mockGetRecipeFullDetails(1);
        const recipeDetails = response.data.recipe;
        this.recipe = recipeDetails;
      } catch (error) {
        console.log(error);
      }
    },
    fetchRecipes(amountToFetch) {
      const response = mockGetRecipesPreview(amountToFetch);
      this.randomRecipes = response.data.recipes;
    
  },
}};
</script>

<style scoped>
.recipe-container {
  flex-direction: column;
  align-items: flex-start;
  color: #ffffff;
  background-color: #151718;

}
.cover-image-container {
    position: relative;
    text-align: center;
    color: white;
  }
  
  .full-width-image {
    width: 100%;
    height: 500px; /* Adjust the height here */
    object-fit: cover;
  }
  .preview-conteiner{
      width: 550%;
  }
  .cover-text {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3em;
    padding: 10px;
    border-radius: 6px;
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
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("@/assets/b2.jpg");
  margin-left: 15%;

}



.recipe-details {
  width: 80%;
  text-align: left;
  font-family: Arial, sans-serif;
  color: #ffffff;
  margin-top: 0px;
  font-size:medium;

}

.recipe-footer-content {
  font-weight: bold;
  font-weight: 2em;
  text-align: center;
}

.title {
  font-size: 28px;
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
  color: #94cb9c;
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


.preview-conteiner { /* Adjusted the class name if it was a typo */
  min-height: 200px;
  background-color: #000000;
}
</style>
