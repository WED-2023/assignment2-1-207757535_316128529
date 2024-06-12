<template>
  <div class="recipe-container">
    <link
      rel="stylesheet"
      href="http://static.sasongsmat.nu/fonts/vegetarian.css"
    />
      <div class="recipe-card">
        <b-card
          v-if="image_load"
          :img-src="recipe.image"
          img-alt="Image"
          tag="article"
          class="recipe-image"
        >
          <div class="recipe-footer">
            <div :title="recipe.title" class="recipe-title">
              <b-card-text>
                {{ recipe.title }}
              </b-card-text>
            </div>
            <ul class="recipe-overview">
              <li>{{ recipe.readyInMinutes }} minutes</li>
              <li>{{ recipe.aggregateLikes }} likes</li>
            </ul>
          </div>
        </b-card>
      </div>

    <!-- New section for ingredients and summary -->
    <div class="recipe-details" >
      <h2>Ingredients</h2>
      <ul>
        <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
          Product: {{ ingredient.name }}, Amount: {{ ingredient.amount }}
        </li>
      </ul>

      <h2>Summary</h2>
      <p v-html="recipe.summary"></p>
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
        // recipeID = this.$route.param;
        const response = mockGetRecipeFullDetails(1);
        console.log(response);
        this.image_load = true;
        const recipeDetails = response.data.recipe;
        console.log(recipeDetails);
        this.recipe = recipeDetails;
      } catch (error) {
        console.log(error);
      }
    }

  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amaranth&family=Comfortaa:wght@300&family=Lemonada:wght@400;500&family=Mali:wght@200&family=Shadows+Into+Light+Two&family=Syncopate&display=swap");

html, body {
  height: 100%;
  margin: 0;
  background: url('../assets/bg1.jpg') no-repeat center center fixed;
  background-size: cover;
}


.recipe-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center everything horizontally */
  margin: 0 auto; /* Center the container */
  padding-top: 5px;
}

.recipe-preview {
  display: inline-block;
  width: 100%;
  position: relative;
}

.recipe-preview > .recipe-card {
  width: 150px; /* Reduce the width to make the card smaller */
  margin: 10px auto; /* Center the card horizontally */
}

.recipe-preview .recipe-card .recipe-image {
  display: block;
  width: 100%;
  height: 100px; /* Reduce the height for a smaller image */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
.recipe-preview .recipe-footer {
  width: 100%;
  overflow: hidden;
  background-color: white; /* Set the background color to white */
  padding: 10px; /* Add padding for better readability */
  box-sizing: border-box; /* Ensure padding is included in the width */
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 5px 10px; /* Increase padding for better readability */
  width: 100%;
  font-size: 14px; /* Increase font size */
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; /* Ensure text wraps to the next line */
  background-color: white; /* Set the background color to white */
}

.recipe-preview .recipe-footer ul.recipe-overview {
  width: 100%;
  display: flex;
  table-layout: fixed;
  margin-bottom: 0px;
  font-size: 12px; /* Adjust font size */
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  flex-grow: 1;
  display: table-cell;
  text-align: center;
}

.details {
  display: flex;
  font-size: 25pt;
  width: 100%;
  table-layout: fixed;
  margin-bottom: 5px;
}

.recipe-details {
  margin-top: 20px;
  font-size: 14px; /* Increase font size */
  color: white;
}

.recipe-details h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.recipe-details ul {
  list-style-type: disc;
  margin-left: 20px;
}

.recipe-details p {
  margin-top: 10px;
}
</style>
