<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" class="bg-green">
        <b-navbar-brand href="#" id="brand"><img src="data:image/png;base64,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">BD-Recipes</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto">
            <b-nav-item :to="{ name: 'main' }" class="main-page">Main Page</b-nav-item>
            <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-nav-item :to="{ name: 'search' }" size="sm">Search</b-nav-item>
            </b-nav-form>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <span v-if="!$root.store.username" class="nav-not-connected">
              <h6 style="color: #fff;">Hello Guest:</h6>
              <b-nav-item :to="{ name: 'register' }" style="padding-right: 4%">Register</b-nav-item> 
              <b-nav-item :to="{ name: 'login' }" style="padding-right: 4%">Login</b-nav-item>
            </span>
            <span v-else class="nav-connected">
              <span class="greeting">Hello {{ $root.store.username }} :</span>
              <b-nav-item-dropdown text="My Zone" right>
                <router-link :to="{ name: 'MyFavoriteRecipes' }" class="dropdown-item">My Favorite Recipes</router-link>
                <router-link :to="{ name: 'MyRecipes' }" class="dropdown-item">My Recipes</router-link>
                <router-link :to="{ name: 'MyFamilyRecipes' }" class="dropdown-item">My Family Recipes</router-link>
              </b-nav-item-dropdown>
              <b-nav-item @click="showNewRecipeModal">Add a new Recipe</b-nav-item>
              <b-nav-item @click="Logout">Logout</b-nav-item>
            </span>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-modal id="new-recipe-modal" title="Create a New Recipe" hide-footer>
      <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
        <new-recipe />
      </div>    
    </b-modal>
    <router-view />   
  </div>
</template>

<script>
import NewRecipe from "./components/NewRecipe";
import { computed } from 'vue';
import { Logout } from "./services/auth.js";

export default {
  components: { NewRecipe },
  name: "App",
  comments:{
    NewRecipe
  },
  methods: {
    showNewRecipeModal() {
      this.$bvModal.show('new-recipe-modal');
    },
    Logout() {
      this.$root.store.logout();
      Logout();
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/form-style.scss";
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');

/* Apply background to html and body to cover the entire viewport */
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  background-size: cover;
  background-color: #9bbcad ;
  background-image: url("@/assets/b1.jpg");

}

/* Main app container */
#app {
  font-family: Comfortaa;
  font-size: 10pt;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Ensure router-view fills the remaining space */
#app .router-view {
  flex: 1;
}

/* Navbar custom styles */
.b-navbar-nav {
  background-color: rgb(0, 0, 0);
}

.main-page {
  font-weight: bold;
  
}

/* Center the navbar items */
.b-navbar-nav {
  width: 100%;
  display: flex;
  justify-content: center;
}

.nav-connected {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.nav-not-connected {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#nav a.router-link-exact-active {
  color: #9bbcad;
}

.greeting {
  flex: right;
  color: white;
}

#new-recipe-modal .modal-header {
  background-color: #9bbcad;
}
#brand img {
  max-height: 40px; /* Maximum height */
  width: 100%; /* Maintain aspect ratio */
  object-fit: contain; /* Ensure image fits within given dimensions without stretching */
  display: block;
  margin: 0 auto;
}
</style>
