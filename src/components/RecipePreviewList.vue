<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id" cols="12" md="6" lg="5" xl="4" class="mb-5 mx-auto">
        <RecipePreview class="recipePreview" :recipe="r" :showLikeButton="isUserLoggedIn"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    recipes: {
      type: Array,
      required: true
    },
    isUserLoggedIn: {
      type: Boolean,
      default: false
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
