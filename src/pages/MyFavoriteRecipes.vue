<template>
  <div class="carousel-container">
    <b-carousel v-model="slide"
      :interval="4000"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      prev-icon="fas fa-chevron-left"
      next-icon="fas fa-chevron-right"
      >
      <b-carousel-slide v-for="r in recipes" :key="r.id">
        <template #img >
          <img :src="r.image" alt="Recipe Image" class="recipe-image"/>
        <div class="recipe-info">
            {{ r.title }}
            <span>{{ r.readyInMinutes }} minutes </span>
            <br>
            <span>{{ r.aggregateLikes }} likes</span>
        </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue';
import RecipePreview from "../components/RecipePreview";
import { mockGetRecipesPreview } from "../services/recipes.js";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  },
  data() {
    return {
      recipes: [],
      slide: 0,
      sliding: null    
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
     onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
    async updateRecipes() {    
      try {
        const response = mockGetRecipesPreview(4);
        const recipes = response.data.recipes;
        this.recipes = recipes;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-container {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
}

.recipe-image {
  width: 400px; /* Adjust the max-width as needed */
  height: 400px; /* Adjust the max-width as needed */
  display: block;
  flex:top;
}

.recipe-info {
  max-width: 400px; /* Adjust the max-width as needed */
  max-height: 200px; /* Adjust the max-width as needed */
  background-color: white;
  padding: 10px;
  text-align: center;
  margin-top: 10px; /* Add margin between image and info */
  flex:bottom;
}


</style>
