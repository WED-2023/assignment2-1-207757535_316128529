
<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div class="left-side" style="width: 60%; float: left;">
      <div class="container-random" style="padding-left: 10px;">
        <RecipePreviewList style="text-align: center; font-family: Comfortaa; margin-top: 3%;" numOfRecipes=3 title="Explore this recipes" class="RandomRecipes center" :key="componentKey" />
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
          numOfRecipes=3
          disabled
        ></RecipePreviewList>
      </div>
    </div>
    <div class="right-side" style="width: 40%; float: right; padding-top: 50%">
      <LoginPage v-if="!$root.store.username" :class="connected"></LoginPage>
    </div>
    <!--<audio v-if="$root.store.username && !visited" :visited=true autoplay>
      <source src="../assets/HarbuDarbu.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio> -->
  </div>
</template>


<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from "../pages/LoginPage";
export default {
  data(){
    return{
      componentKey: 0,
      // visited: false
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
  display: inline-block;
  flex-direction: column;
  height: 100vh;
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

.connected{
  visibility: hidden;
}

</style>
