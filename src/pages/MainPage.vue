<template>
  <div class="container">
    <br><br><br>
    <h1 class="title">Main Page</h1>
    <br><br><br>
    <div class="content">
      <div class="left-side">
        <div class="container-random">
          <RecipePreviewList
            style="text-align: center; font-family: Comfortaa; margin-top: 3%;"
            numOfRecipes="3"
            title="Explore these recipes"
            class="RandomRecipes center"
            :key="componentKey"
          />
        </div>
        <div class="container-user">
          <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to view this</router-link>
          <RecipePreviewList
            title="Last Viewed Recipes"
            :class="{
              RandomRecipes: true,
              blur: !$root.store.username,
              center: true
            }"
            numOfRecipes="3"
            disabled
          ></RecipePreviewList>
        </div>
      </div>
      <div class="right-side">
        <LoginPage v-if="!$root.store.username" :class="connected"></LoginPage>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from "../pages/LoginPage";
export default {
  data() {
    return {
      componentKey: 0,
      // visited: false
    };
  },
  components: {
    RecipePreviewList,
    LoginPage
  }
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
}

.content {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.left-side {
  width: 60%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
}

.right-side {
  width: 40%;
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: flex-end; /* Align items to the right */
  padding-top: 80px; /* Adjust padding to move the login form up */
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
</style>
