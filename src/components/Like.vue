<template>
<div v-if="LoggedIn">
  <div class="icon-container">
    <div class="like-container">
      <b-button id="like-button" @click="addToFavorites">
        <img :src="likeButtonImage" alt="Like Button">
      </b-button>
    </div>
  </div>
</div>
</template>

<script>
import { AddFavorite } from "../services/user.js";

export default {
  data() {
    return {
      likeButtonImage: require("@/assets/like.png")
    };
  },
   props: {
    recipeId: {
      type: String,
      required: true
    },
    LoggedIn: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    async addToFavorites() {
      try {
        alert(this.LoggedIn);
        const response = AddFavorite(recipeId);
        if (response.status === 200 && response.data.success) {
          this.$root.toast("Recipe added!", "This recipe was added to your favorites", "success");
          this.likeButtonImage = require("@/assets/vi.png"); // Change to the new image
        } else {
          this.$root.toast("Failed to add", "There was an error adding this recipe to your favorites", "danger");
        }
      } catch (err) {
        this.$root.toast("Failed to add", "There was an error adding this recipe to your favorites", "danger");
      }
    }
  }
};
</script>

<style scoped>
.icon-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.like-container {
  position: absolute;
  bottom: 1%;
  left: 45%;
}

.like-container button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
}

.like-container button img {
  width: 30px;
  height: 30px;
}

</style>
