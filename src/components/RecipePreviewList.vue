<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id" cols="12" md="6" lg="5" xl="4" class="mb-5 mx-auto">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  data() {
    return {
      recipes: [],
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    numOfRecipes: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.updateRecipes(this.numOfRecipes);
  },
  methods: {
    async updateRecipes(amountToFetch) {
      try {
        const response = mockGetRecipesPreview(amountToFetch);
        const recipes = response.data.recipes;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
.recipePreview {
  padding: 10px;
  background: #fff; /* Optional: Add a background color to see the spacing more clearly */
  border-radius: 5px; /* Optional: Add some rounding to the corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
}
</style>
