<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" class="bg-green">
        <b-navbar-brand href="#" id="brand">DawaraRecipes</b-navbar-brand>
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
              <span class="greeting">Hello {{ $root.store.username }}:</span>
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
      this.$root.toast("Logout", "User logged out successfully", "success");
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
  margin: 0;
  background-size: cover;
  background-color: #9bbcad ;

}

/* Main app container */
#app {
  font-family: Comfortaa;
  font-size: 10pt;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #9bbcad ;
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
</style>
