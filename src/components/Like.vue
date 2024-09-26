<template>
  <div v-if="LoggedIn">
    <div class="icon-container">
      <div class="like-container">
        <b-button id="like-button" @click="addToFavorites">
          <div v-if="isLiked">
            <img :src="ViImage" alt="Like Button">
          </div>
          <div v-else>
            <img :src="likeButtonImage" alt="Like Button">
          </div>
        </b-button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import { AddFavorite, isLikedRecipe } from "../services/user.js";
  
  export default {
    data() {
      return {
        likeButtonImage: require("@/assets/like.png"),
        ViImage: require("@/assets/vi.png"),
        isLiked:false,
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
      },
    },
    mounted() {
      this.isLikedAlready(this.recipeId);
    },
    methods: {
      async addToFavorites() {
    try {
      const response = await AddFavorite(this.recipeId);
      if (response.status === 200 && response.data.success) {
        this.$root.toast("Recipe added!", "This recipe was added to your favorites", "success");
      } else {
        // If the status isn't 200 or the response data indicates failure
        this.$root.toast("recipe allredy in favorites"," ");
      }
    } catch (err) {
      // Handle any errors that occur during the API call
      this.$root.toast("recipe allredy in favorites", " ");
    }
    finally{
      this.likeButtonImage = require("@/assets/vi.png"); // Change to the new image
    }
  },
  async isLikedAlready(recipeID){
    const response = await isLikedRecipe(recipeID);
    const {liked, status, success} = response.data;
      if (status === 200 && success) {
        this.isLiked = liked;
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
  