<template>
    <div v-if="LoggedIn">
    <div class="icon-container">
        <div class="watch-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
            </svg>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
   props: {
    LoggedIn: {
      type: Boolean,
      default: true
    },
    recipeID:{
        type: Number,
        default:0
    }   
  },
  methods: {
    async addToFavorites() {
      try {
        const response = mockAddFavorite(this.recipeId);
        if (response.status === 200 && response.response.data.success) {
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

.watch-container {
  position: absolute;
  bottom: 1%;
  left: 5%;
  display: flex;
  align-items: center;
}
</style>
