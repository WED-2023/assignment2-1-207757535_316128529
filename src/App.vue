<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <router-link :to="{ name: 'about' }">About</router-link>|
      <!-- {{ !$root.store.username }} -->
      <span v-if="!$root.store.username">
        Hello Guest:
        <router-link :to="{ name: 'register' }">Register</router-link>|
        <router-link :to="{ name: 'login' }">Login</router-link>|
      </span>
      <span v-else>
        <!-- {{ $root.store.username }}:  -->
        <div class="dropdown">
          <button @click="toggleDropdown" class="dropbtn">My Zone</button>|
          <div id="myDropdown" class="dropdown-content">
              <router-link :to="{ name: 'MyFavoriteRecipes' }">My Favorite Recipes</router-link>|
              <router-link :to="{ name: 'MyRecipes' }">My Recipes</router-link>|
              <router-link :to="{ name: 'MyFamilyRecipes' }">My Family Recipes</router-link>|
          </div>
        </div>
        <router-link :to="{ name: 'NewRecipe' }">Add a new Recipe</router-link>|
        <button @click="Logout">Logout</button>|
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: "App",
  methods: {
    toggleDropdown() {
            document.getElementById("myDropdown").classList.toggle("show");
            window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dropdown {
            position: relative;
            display: inline-block;
        }

        .dropbtn {
            background-color: #4CAF50; /* Green background */
            color: white; /* White text */
            padding: 16px; /* Some padding */
            font-size: 16px; /* Larger text size */
            border: none; /* No borders */
            cursor: pointer; /* Pointer/hand icon */
        }

        .dropbtn:hover, .dropbtn:focus {
            background-color: #3e8e41; /* Darker green on hover */
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }

        .dropdown-content a:hover {
            background-color: #f1f1f1;
        }

        .show {
            display: block;
        }
</style>
