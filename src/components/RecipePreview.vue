<template>
  <div class="recipe-container">
    <link
      rel="stylesheet"
      href="http://static.sasongsmat.nu/fonts/vegetarian.css"
    />
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
        >
          <div class="recipe-footer">
            <div :title="recipe.title" class="recipe-title">
              <b-card-text>
                {{ recipe.title }}
              </b-card-text>
            </div>
            <ul class="recipe-overview">
              <li>{{ recipe.readyInMinutes }} minutes</li>
              <li>{{ recipe.aggregateLikes }} likes</li>
            </ul>
          </div>
        </b-card>
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

.recipe-preview > .recipe-card {
  width: 200px; /* Adjust the width to make the card readable */
  margin: 10px 0; /* Add space between the cards */
}

.recipe-preview .recipe-card .recipe-image {
  display: block;
  width: 100%;
  height: 150px; /* Ensure a consistent height for images */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  overflow: hidden;
  background-color: white; /* Set the background color to white */
  padding: 10px; /* Add padding for better readability */
  box-sizing: border-box; /* Ensure padding is included in the width */
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 5px 10px; /* Increase padding for better readability */
  width: 100%;
  font-size: 14px; /* Increase font size */
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; /* Ensure text wraps to the next line */
  background-color: white; /* Set the background color to white */
}

.recipe-preview .recipe-footer ul.recipe-overview {
  width: 100%;
  display: flex;
  table-layout: fixed;
  margin-bottom: 0px;
  font-size: 12px; /* Adjust font size */
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  flex-grow: 1;
  display: table-cell;
  text-align: center;
}

.details {
  display: flex;
  font-size: 25pt;
  width: 100%;
  table-layout: fixed;
  margin-bottom: 5px;
}
</style>
