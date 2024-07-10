<template>
  <div class="container">
    <br><br><br><br>
    <h1 class="title">MY FAVORITE RECIPES</h1>
      <div >
          <RecipeCarousel :recipes="recipes"/>
          
      </div>
      <div >
          <RecipePreviewList
            :isUserLoggedIn=false
            class="RandomRecipes center"
            :recipes="recipes"
          />
        </div>
    </div>
</template>

<script>
import RecipeCarousel from "../components/RecipeCarousel.vue";
import RecipePreviewList from "../components/RecipePreviewList.vue";
import { GetFavoritesRecipes } from "../services/recipes.js";

export default {
  components: {
    RecipeCarousel,
    RecipePreviewList,
  },
  data() {
    return {
      recipes: [], // Initialize an empty array for recipes
      lastViewedRecipes: [] // Initialize an empty array for last viewed recipes
    };
  },
  mounted() {
    this.showFavorites(); // Fetch 4 recipes when the component is mounted
    // if (this.$root.store.username) {
    //   this.fetchLastViewedRecipes(6); // Fetch 3 last viewed recipes if the user is logged in
    // }
  },
  methods: {
    async showFavorites() {
      const response = await GetFavoritesRecipes();
      if (response.status === 200 && response.data.success) {
        this.recipes = response.data.recipes;
      }
    },
    fetchLastViewedRecipes(amountToFetch) {
      const response = mockGetRecipesPreview(amountToFetch);
      this.lastViewedRecipes = response.data.recipes;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 80px;
  font-weight: bold;
}

.content {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.left-side, .right-side {
  width: 45%; /* Ensure both sides have the same width */
}

.left-side {
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
}

.right-side {
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the top left */
  justify-content: flex-start; /* Align items to the top */
  padding-top: 3px; /* Adjust padding to move the login form up */
}

.RandomRecipes {
  margin: 10px 0 10px;
  padding-left: 5px;
}

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

.connected {
  visibility: hidden;
}

.container-random, .container-user {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  justify-content: flex-end; /* Align content at the bottom */
  align-items: center; /* Center elements horizontally */
  position: relative; /* Enable positioning for child elements */
  width: 120%; /* Ensure both containers take the full width of their parent */
  height: 100%; /* Ensure both containers take the full height of their parent */
  margin-left: 0%;
  padding-left: 0%;
}

</style>
