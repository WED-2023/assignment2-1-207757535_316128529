<template>
      <div class="tags-container">
          <img v-if="recipe.vegetarian" src="@/assets/vegetarian.png" alt="Vegetarian" class="tag-icon">
          <img v-if="recipe.vegan" src="@/assets/vegan.png" alt="Vegan" class="tag-icon">
          <img v-if="recipe.glutenFree" src="@/assets/gluten.png" alt="Gluten Free" class="tag-icon">
        </div>
</template>


<script>
export default {
    data() {
    return {
      image_load: false,
    //   recipe: null,
    };
  },
  mounted() {
    this.axios.get(this.recipe.image).then(() => {
      this.image_load = true;
    });
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

.recipe-card-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.image-container {
  flex: 1;
}

.recipe-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
}

.recipe-footer-content {
  width: calc(100% - 50px);
  color: black;
}

.recipe-title {
  padding: 3px 5px;
  width: 100%;
  font-size: 12px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-weight: bold;
}

.card-body {
  margin: 0;
  padding: 0;
}

.recipe-overview {
  width: 100%;
  display: flex;
  table-layout: fixed;
  margin-left: 0;
  padding-left: 0;
  margin-bottom: 0px;
  font-size: 10px;
  font-weight: bold;
}

.recipe-overview li {
  flex-grow: 1;
  display: table-cell;
  text-align: center;
}

.tags-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-top: 10px;
}

.tag-icon {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
</style>
