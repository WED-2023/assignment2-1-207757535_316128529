
<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div class="left-side" style="width: 75%; float: left;">
      <div class="container-random">
        <RecipePreviewList style="text-align: center; font-family: Comfortaa; margin-top: 3%; margin-left: -1%;" title="Explore this recipes" class="RandomRecipes center" :key="componentKey" />
      </div>
      <div class="container-user">
        <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
        <!-- {{ !$root.store.username }} -->
        <RecipePreviewList
          title="Last Viewed Recipes"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true
          }"
          disabled
        ></RecipePreviewList>
      </div>
    </div>
    <div class="right-side" style="width: 25%; float: right;">
      <LoginPage v-if="$root.store.username" :class="connected"></LoginPage>
    </div>
  </div>
</template>


<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from "../pages/LoginPage";
export default {
  data(){
    return{
      componentKey: 0,
    }
  },
  components: {
    RecipePreviewList,
    LoginPage
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

// .left-side {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100%;
//   align-self: flex-start; /* Align to top left */
// }

.container-random {
  position: relative; /* Align to top left */
}

.container-user {
  position: relative; /* Align to bottom left */
}

.RandomRecipes {
  margin: 10px 0 10px;
}

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

.connected{
  visibility: hidden;
}

.notConnected{
  visibility: visible;
}
</style>
