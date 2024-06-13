<template>
  <div class="container">
    <br><br><br><br>
    <h1 class="title">Main Page</h1>
    <div class="content">
      <div class="left-side">
        <div class="container-random">         
          <RecipePreviewList
            :isUserLoggedIn="$root.store.username"
            style="text-align: center; font-family: Comfortaa; margin-top: 3%;"
            numOfRecipes="3"
            title="Explore these recipes"
            class="RandomRecipes center"
            :key="componentKey"
          />
          <div class="shuffle-container">
            <b-button id="shuffle-button"></b-button>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div v-if="$root.store.username" class="container-user">
          <RecipePreviewList
            :isUserLoggedIn="$root.store.username"
            title="Last Viewed Recipes"
            class="RandomRecipes center"
            numOfRecipes="3"
          />
        </div>
        <div v-else class="login-container">
          <LoginPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from "../pages/LoginPage";
import {mockAddUserRecipe} from "../services/user.js" 

export default {
  data() {
    return {
      componentKey: 0
    };
  },
  components: {
    RecipePreviewList,
    LoginPage,
  },
};
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 80px;
  font-weight: bold;
}

.content {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.left-side, .right-side {
  width: 45%; /* Ensure both sides have the same width */
}

.left-side {
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
}

.right-side {
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the top left */
  justify-content: flex-start; /* Align items to the top */
  padding-top: 3px; /* Adjust padding to move the login form up */
}

.RandomRecipes {
  margin: 10px 0 10px;
  padding-left: 5px;
}

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

.connected {
  visibility: hidden;
}

.container-random, .container-user {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  justify-content: flex-end; /* Align content at the bottom */
  align-items: center; /* Center elements horizontally */
  position: relative; /* Enable positioning for child elements */
  width: 120%; /* Ensure both containers take the full width of their parent */
  height: 100%; /* Ensure both containers take the full height of their parent */
  margin-left: 0%;
  padding-left: 0%;
}

#shuffle-button {
  background-image: url('@/assets/shuffle.png');
  background-size: cover;
  background-color: #9bbcad;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
}

.shuffle-container {
  position: absolute; /* Make element position relative to parent */
  bottom: 17.5%; /* Position at the bottom of the container */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Offset to center perfectly */
}

.login-container {
  width: 100%; /* Ensure login container takes the full width of its parent */
  height: 100%; /* Ensure login container takes the full height of its parent */
  display: flex;
  justify-content: center; /* Center login component horizontally */
  align-items: center; /* Center login component vertically */
}
</style>
