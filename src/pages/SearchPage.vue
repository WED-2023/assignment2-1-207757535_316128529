<template>
  <div class="search-page-container">
      <!-- Sidebar button at the top left corner -->
      <div>
      <div class="sidebar-button-container" style="padding-left: 1% ;padding-top: 1%">
        <b-button v-b-toggle.filters-sidebar id="sidebar-button" class="filters-sidebar-button" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
          </svg>
        </b-button>
      </div>
      <div class="top-container" style="padding-left: 20%;">
      <div class="search-button" style="padding-bottom: 10%; padding-right: 0">
        <b-row>
        <b-form-input size="sm" v-model="searchQuery" class="mr-sm-2 search-input" placeholder="Search for a recipe..." required></b-form-input>
        <b-button class="small-button" @click="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
        </b-button>
        </b-row>
      </div>

      <!-- Sort options button to the left of the number of recipes buttons -->
      <div class="sort-options-container" style="padding-left: 2%; padding-bottom: 10%">
        <b-dropdown v-model="selectedSortOption" id="sort-options" size="sm" toggle-class="btn-sm text-decoration-none small-button" no-caret>
          <template #button-content>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
              <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
            </svg>       
          </template>
          <b-dropdown-item value="Default">Default</b-dropdown-item>
          <b-dropdown-item value="Rating High-Low">Rating High-Low</b-dropdown-item>
          <b-dropdown-item value="Rating Low-High">Rating Low-High</b-dropdown-item>
          <b-dropdown-item value="Cooking Time Short-Long">Cooking Time Short-Long</b-dropdown-item>
          <b-dropdown-item value="Cooking Time Long-Short">Cooking Time Long-Short</b-dropdown-item>         
        </b-dropdown>
      </div>

      <!-- Number of recipes buttons at the top right corner -->
      <div class="num-of-showed-recipes-container" style="padding-right: 0%; padding-bottom: 10%; padding-left: 2.5%">
        <b-row class="button-row" >
          <h1 class="small-heading">Presented recipes:</h1>
          <b-col cols="auto" style="padding-left: 8px; padding-right: 8px;">
            <b-button id="5-button" class="number-button small-button" @click="changeNumOfPresentedRec(5)">
              <img src="@/assets/5.png" alt="5 Button" class="small-image">
            </b-button>
          </b-col>
          <b-col cols="auto" style="padding-left: 0%; padding-right: 8px;">
            <b-button id="10-button" class="number-button small-button" @click="changeNumOfPresentedRec(10)">
              <img src="@/assets/10.png" alt="10 Button" class="small-image">
            </b-button>
          </b-col>
          <b-col cols="auto" style="padding: 0;">
            <b-button id="15-button" class="number-button small-button" @click="changeNumOfPresentedRec(15)">
              <img src="@/assets/15.png" alt="15 Button" class="small-image">
            </b-button>
          </b-col>
        </b-row>
      </div>
    </div>

    <!-- Filters sidebar -->
    <b-sidebar id="filters-sidebar" title="Filters" shadow>
      <!-- Dropdown for Cuisines -->
      <b-col>
        <b-dropdown id="cuisine-filter" text="Cuisines" class="mb-3">
          <div class="cuisines-dropdown-options">
            <b-dropdown-item v-for="(cuisine, index) in cuisines" :key="index">
              <b-form-checkbox v-model="selectedFilters.cuisines[cuisine]">{{ cuisine }}</b-form-checkbox>
            </b-dropdown-item>
          </div>
        </b-dropdown>
      </b-col>
      <!-- Dropdown for Diets -->
      <b-col>
        <div class="diets-dropdown">
          <b-dropdown id="diet-filter" text="Diets" class="mb-3">
            <b-dropdown-item v-for="(diet, index) in diets" :key="index">
              <b-form-checkbox v-model="selectedFilters.diets[diet]">{{ diet }}</b-form-checkbox>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </b-col>
      <!-- Dropdown for Intolerances -->
      <b-col>
        <div class="intolerances-dropdown">
          <b-dropdown id="intolerance-filter" text="Intolerances" class="mb-3">
            <b-dropdown-item v-for="(intolerance, index) in intolerances" :key="index">
              <b-form-checkbox v-model="selectedFilters.intolerances[intolerance]">{{ intolerance }}</b-form-checkbox>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </b-col>
    </b-sidebar>
      </div>
      <!-- <div class="search-result-container"> -->
        <div v-if="username" class="recent-searches-container">
          <h1 style="font-size: 20px">Your recent recipes:</h1>
          <div >
          <RecipePreviewList
            :isUserLoggedIn=false
            class="RandomRecipes center"
            :recipes="lastViewedRecipes"
          />
        </div>
        </div>
        <br><br><br><br>
        <div class="current-searches-container">
          <h1 style="font-size: 20px">Your results:</h1>
        </div>
      <!-- </div> -->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";
import cuisines from '../assets/cuisines.json';
import diets from '../assets/diets.json';
import intolerances from '../assets/intolerances.json';

export default {
  components: {
    RecipePreviewList,
  },
  data() {
    return {
      recipes: [],
      lastViewedRecipes: [],
      cuisines: cuisines,
      diets: diets,
      intolerances: intolerances,
      selectedFilters: {
        cuisines: {},
        diets: {},
        intolerances: {}
      },
      numOfRecipes: 5,
      selectedSortOption: 'Default', // Add this line
      searchQuery: ""
    };
    
  },
   watch: {

    selectedSortOption() {
      this.handleSortOptionChange();
    }
  },
  computed: {
    username() {
      return this.$root.store.username;
    }
  },
  mounted() {
    
    if (this.$root.store.username) {
      this.fetchLastViewedRecipes(this.numOfRecipes); // Fetch 3 last viewed recipes if the user is logged in
    }
  },
  methods: {
    fetchLastViewedRecipes(amountToFetch) {
      const response = mockGetRecipesPreview(amountToFetch);
      this.lastViewedRecipes = response.data.recipes;
    },
    changeNumOfPresentedRec(number) {
      this.numOfRecipes = number;
      this.fetchLastViewedRecipes(this.numOfRecipes); // Fetch 3 last viewed recipes if the user is logged in

    },
  
  
    search(){
      this.searchQuery = "";
    },
     handleSortOptionChange() {      
      // Implement sorting logic based on selectedSortOption
      switch (this.selectedSortOption) {
        case 'Default':
          // Handle default sorting logic
          this.recipes.sort(/* Add your default sorting logic */);
          break;
        case 'Rating High-Low':
          // Handle rating high to low sorting logic
          this.recipes.sort((a, b) => b.rating - a.rating);
          break;
        case 'Rating Low-High':
          // Handle rating low to high sorting logic
          this.recipes.sort((a, b) => a.rating - b.rating);
          break;
        case 'Cooking Time Short-Long':
          // Handle cooking time short to long sorting logic
          this.recipes.sort((a, b) => a.cookingTime - b.cookingTime);
          break;
        case 'Cooking Time Long-Short':
          // Handle cooking time long to short sorting logic
          this.recipes.sort((a, b) => b.cookingTime - a.cookingTime);
          break;
        default:
          // Handle default case or any additional options
          break;
      }
    },
    resetLastSearch(){

    }
  }
};
</script>

<style scoped>

.filters-sidebar-container {
  display: flex;
  align-items: flex-start; /* Adjust alignment as needed */
}

.filters-sidebar-content {
  width: 100%; /* Ensure content takes full width of sidebar */
}

.filters-sidebar-content > .mb-3 {
  margin-bottom: 1rem; /* Adjust spacing between dropdowns */
}

.cuisines-dropdown,
.diets-dropdown,
.intolerances-dropdown {
  width: 100%; /* Make each dropdown container full width */
  max-width: 100%; /* Ensure they take up full available width */
  padding-right: 15px; /* Compensate for padding */
}

.cuisines-dropdown-options {
  max-height: 300px; /* Adjust height as needed */
  overflow-y: auto;
}

.top-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.recent-searches-container{
    visibility: visible;
}

.button-row {
  display: flex;
  margin-top: 10px;
}

.number-button {
  margin: 0 0; /* Add smaller horizontal spacing between buttons */
}

.small-button {
  padding: 0.25rem 0.5rem;
}

.small-image {
  width: 20px; /* Smaller width */
  height: 20px; /* Smaller height */
}

.small-heading {
  font-size: 1.2rem; /* Make the heading smaller */
  margin-bottom: 10px; 
}

.filters-sidebar-button-container {
  padding: 0.25rem 0.5rem;
}

.search-input {
  width: 400px; /* Adjust the width of the search input */

}

</style>
