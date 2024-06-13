<template>
  <div class="recipe-container">
    <link
      rel="stylesheet"
      href="http://static.sasongsmat.nu/fonts/vegetarian.css"
    />
    <div class="recipe-card-wrapper">
      <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }" class="recipe-preview">
          <div class="image-container">
            <b-card v-if="image_load" :img-src="recipe.image" img-alt="Image" tag="article" class="recipe-image" style="height: 100%"></b-card>
          </div>
          </router-link>
          <div class="recipe-details">
            <div class="recipe-footer-content">
              <div :title="recipe.title" class="recipe-title">
                <b-card-text>{{ recipe.title }}</b-card-text>
              </div>
              <ul class="recipe-overview">
                <li>{{ recipe.readyInMinutes }} minutes</li>
                <li>{{ recipe.aggregateLikes }} likes</li>
              </ul>
            </div>
            <div class="like-container" v-if="showLikeButton">
              <b-button id="like-button" @click="addToFavorites">
                <img src="@/assets/like.png" alt="Like Button">
              </b-button>
            </div>
          </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
  },
  data() {
    return {
      image_load: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
  showLikeButton: {
      type: Boolean,
      default: true
  }
  },
  methods: {
    addToFavorites(){
        this.$root.toast("Recipe added!", "This recipe was added to your favorites", "success");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amaranth&family=Comfortaa:wght@300&family=Lemonada:wght@400;500&family=Mali:wght@200&family=Shadows+Into+Light+Two&family=Syncopate&display=swap");

.recipe-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.recipe-preview {
  display: inline-block;
  width: 100%;
  position: relative;
}

.recipe-card-wrapper {
  display: flex;
  flex-direction: column; /* Stacks children vertically */
  width: 100%; /* Full width of the parent */
}

.image-container {
  flex: 1; /* Takes up necessary space for the image */
}

.recipe-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distributes space between elements */
  padding: 5px; /* Reduced padding */
  box-sizing: border-box;
}

.recipe-footer-content {
  width: calc(100% - 50px); /* Adjust width to accommodate like button */
  color:black;
}

.recipe-title {
  padding: 3px 5px; /* Reduced padding */
  width: 100%;
  font-size: 12px; /* Reduced font size */
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.card-body {
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
}

.recipe-overview {
  width: 100%;
  display: flex;
  table-layout: fixed;
  margin-left: 0; /* Remove default margin */
  padding-left: 0; /* Remove default padding */  margin-bottom: 0px;
  font-size: 10px; /* Reduced font size */
}

.recipe-overview li {
  flex-grow: 1;
  display: table-cell;
  text-align: center;
}

.like-container {
  position: absolute;
  bottom: 5%; /* Adjusted position */
  right: 10%;
}

.like-container button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  
}

.like-container button img {
  width: 30px; /* Adjusted width and height */
  height: 30px;
}

</style>

