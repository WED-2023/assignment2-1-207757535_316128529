<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="primary">
        <b-navbar-brand href="#" id="brand">DawaraRecipes</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'main' }">Main</b-nav-item>
            <b-nav-item :to="{ name: 'about' }" >About</b-nav-item>
            <b-nav-form >
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search" ></b-form-input>
              <b-nav-item :to="{ name: 'search' }" size="sm" >Search</b-nav-item>
            </b-nav-form>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <span v-if="!$root.store.username" class="nav-not-connected">
              Hello Guest:
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
              <b-nav-item :to="{ name: 'NewRecipe' }" class="nav-link">Add a new Recipe</b-nav-item>
              <b-nav-item @click="Logout">Logout</b-nav-item>
            </span>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />   
  </div>
</template>


<script>
import { computed } from 'vue';
export default {
  name: "App",
  methods: {
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
  background: url('assets/bg7.jpg') no-repeat center center fixed;
  background-size: cover;
}

/* Main app container */
#app {
  font-family: Comfortaa;
  font-size: 10pt;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Ensure router-view fills the remaining space */
#app .router-view {
  flex: 1;
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

// .nav-item {
//   padding-right: 1rem;
//   display: flex;
//   align-items: center;
// }

// .not-connected {
//   display: flex;
//   align-items: center;
// }

#nav a.router-link-exact-active {
  color: #42b983;
}

.greeting {
  flex: right;
}
</style>
