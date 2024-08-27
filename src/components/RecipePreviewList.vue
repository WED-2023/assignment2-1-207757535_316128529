<template>
  <b-container>
    <h3>
      {{ title }}
      <slot></slot>
    </h3>
    <b-row>
    <b-col
      v-for="(r, index) in recipes"
      :key="r.id"
      cols="12"
      md="6"
      lg="5"
      xl="4"
      class="mb-5 mx-auto"
    >
      <RecipePreview
        class="recipePreview"
        :recipe="r"
        :showLikeButton="isUserLoggedIn"
        v-bind="viewedRecipes ? { Viewed: viewedRecipes[index] } : {}"/>
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
  data() {
    return{
      index: 0

    }
  },
  props: {
    title: {
      type: String,
      required: false
    },
    recipes: {
      type: Array,
      required: true
    },
    isUserLoggedIn: {
      type: Boolean,
      default: false
    },
    viewedRecipes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}

</style>
