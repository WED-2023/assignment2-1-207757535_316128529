<template>
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
  </template>
  
  <script>
  import cuisines from '../assets/cuisines.json';
  import diets from '../assets/diets.json';
  import intolerances from '../assets/intolerances.json';
  
  export default {
    data() {
      return {
        cuisines: cuisines,
        diets: diets,
        intolerances: intolerances,
        selectedFilters: {
          cuisines: {},
          diets: {},
          intolerances: {}
        }
      };
    },
    methods: {
      resetFilters() {
        this.selectedFilters = {
          cuisines: {},
          diets: {},
          intolerances: {}
        };
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
  </style>
  