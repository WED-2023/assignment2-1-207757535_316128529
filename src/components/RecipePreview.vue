<template>
  <div class="recipe-container">
    <link
      rel="stylesheet"
      href="http://static.sasongsmat.nu/fonts/vegetarian.css"
    />
<<<<<<< HEAD
    <router-link
      :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
      class="recipe-preview"
    >
      <div class="recipe-card">
        <b-card
          v-if="image_load"
          :img-src="recipe.image"
          img-alt="Image"
          tag="article"
          class="recipe-image"
          img-top
          style="max-width: 50rem; background-color: #9bbcad;"
        >
          <div class="recipe-footer">
=======
    <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }" class="recipe-preview">
      <div class="recipe-card-wrapper">
        <div class="image-container">
          <b-card v-if="image_load" :img-src="recipe.image" img-alt="Image" tag="article" class="recipe-image"></b-card>
        </div>
        <div class="recipe-details">
          <div class="recipe-footer-content">
>>>>>>> d356913c9c2a10773a159f0dd2c94cbf833bb55e
            <div :title="recipe.title" class="recipe-title">
              <b-card-text>{{ recipe.title }}</b-card-text>
            </div>
            <ul class="recipe-overview">
              <li>{{ recipe.readyInMinutes }} minutes</li>
              <li>{{ recipe.aggregateLikes }} likes</li>
            </ul>
          </div>
          <div class="like-container">
            <b-button id="like-button">
              <img src="@/assets/like.png" alt="Like Button">
            </b-button>
          </div>
        </div>
      </div>
    </router-link>
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

.recipe-card {
  width: 200px; /* Adjust the width to make the card readable */
  margin: 10px -30px; /* Add space between the cards */
}

.recipe-preview .recipe-card-wrapper .recipe-details {
  position: absolute;
  bottom: 0;
  width: 100%;
<<<<<<< HEAD
  height: 150px; /* Ensure a consistent height for images */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  overflow: hidden;
  background-color: #9bbcad ;
=======
  display: flex; /* Arrange footer content and like button side-by-side */
  justify-content: space-between; /* Distribute elements evenly */
  align-items: flex-end;
>>>>>>> d356913c9c2a10773a159f0dd2c94cbf833bb55e
  padding: 10px; /* Add padding for better readability */
  box-sizing: border-box; /* Ensure padding is included in the width */
  color: rgb(255, 255, 255);
}

.recipe-preview .recipe-card-wrapper .recipe-footer-content {
  width: calc(100% - 60px); /* Adjust width to accommodate like button */
}

.recipe-footer .recipe-title {
  padding: 5px 10px; /* Increase padding for better readability */
  width: 100%;
  font-size: 14px; /* Increase font size */
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; /* Ensure text wraps to the next line */
<<<<<<< HEAD
  background-color: #9bbcad ;
=======
  background-color: black; /* Set the background color to white */
>>>>>>> d356913c9c2a10773a159f0dd2c94cbf833bb55e
}

.recipe-footer ul.recipe-overview {
  width: 100%;
  display: flex;
  table-layout: fixed;
  margin-bottom: 0px;
  font-size: 12px; /* Adjust font size */
  color: rgb(255, 255, 255);
}

.recipe-footer ul.recipe-overview li {
  flex-grow: 1;
  display: table-cell;
  text-align: center;
}

.like-container button {
  background: none; /* Remove default button background */
  border: none; /* Remove button border */
  padding: 0; /* Remove button padding */
  cursor: pointer; /* Set cursor to pointer on hover */
  display: flex;
  align-items: center;
  justify-content: center; /* Center image horizontally and vertically */
}

.like-container button img {
  width: 40px; /* Adjust width and height as needed */
  height: 40px;
}

.like-container {
  position: absolute; /* Make the container positioned relative to its parent */
  bottom: 10px; /* Position 10px from the bottom */
  right: 10px; /* Position 10px from the right */
}
<<<<<<< HEAD
</style>
=======
</style>

>>>>>>> d356913c9c2a10773a159f0dd2c94cbf833bb55e
