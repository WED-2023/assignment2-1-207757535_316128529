<template>
    <div class="about-us-container">
      <div class="image-container">
        <img src="@/assets/4002676.jpg" alt="About Us Image" class="about-us-image" />
        <div class="overlay">
          <h1>About Us</h1>
        </div>
      </div>
      <div class="middle-text">
        <p class="styled-paragraph">
          Welcome to our recipe Website!<br>                   
          Our team is dedicated to continuous improvement and innovation. <br>We are two Software and Information Systems Engineering students in our 3rd year at Ben Gurion University. 
        We are passionate about technology and committed to delivering high-quality 
        solutions. Our expertise spans a variety of programming languages and platforms, allowing us to 
        tackle diverse challenges in the tech world.
        </p>
      </div>
      <div class="content-section">
        <img src="@/assets/dvir.jpg" alt="Another Image" class="side-image" />
        <div class="text-content">
          <p class="styled-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, 
            nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec 
            congue eget, auctor vitae massa.
          </p>
        </div>
      </div>
      <div class="content-section">
        <img src="@/assets/ido.jpg" alt="Another Image" class="side-image" />
        <div class="text-content">
          <p class="styled-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, 
            nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec 
            congue eget, auctor vitae massa.
          </p>
        </div>
      </div>
      <!-- Link sections -->
      <div class="links-sections-container">
        <!-- First link section -->
        <div class="links-section">
          <h1>Projects</h1>
          <div class="link-item" v-for="(link, index) in links" :key="index">
            <img src="@/assets/git.jpg" alt="Another Image" class="icon" />
            <a :href="link.url">{{ link.text }}</a>
          </div>
        </div>
        <!-- Second link section -->
        <div class="links-section">
          <h1>LinkedIn </h1>
          <div class="link-item" v-for="(link, index) in links2" :key="index">
            <img src="@/assets/link.webp" alt="Another Image" class="icon1"  />
            <a :href="link.url">{{ link.text }}</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
    data() {
      return {
        links: [
          { image: '@/assets/git.jpg', url: 'https://example.com/1', text: 'Link 1', alt: 'Link 1 Image' },
          { image: '@/assets/in.png', url: 'https://example.com/2', text: 'Link 2', alt: 'Link 2 Image' },
          { image: '@/assets/git.jpg', url: 'https://example.com/3', text: 'Link 3', alt: 'Link 3 Image' }
        ],
        links2: [
          { image: '@/assets/git.jpg', url: 'https://example.com/1', text: 'Link 1', alt: 'Link 1 Image' },
          { image: '@/assets/in.png', url: 'https://example.com/2', text: 'Link 2', alt: 'Link 2 Image' }
         
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .about-us-container {
    text-align: center;
    color: white;
  }
  
  .image-container {
    position: relative;
    display: inline-block;
    width: 100%;
    max-height: 300px; /* Adjust this value to make the image less tall */
    overflow: hidden;
  }
  
  .about-us-image {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .overlay h1 {
    font-size: 3em;
    font-weight: bold;
    color: white;
  }
  
  .middle-text {
    padding: 20px;
    background-color: #fff;
    color: #000;
    font-size: 1.2em;
  }
  
  .content-section {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
    color: black;
  }
  
  .side-image {
    width: 300px; /* Adjust the width as needed */
    height: auto;
    margin-right: 20px;
  }
  
  .text-content {
    max-width: 600px;
  }
  
  .links-sections-container {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #294b47;
    
    color: #f1f1f1;
  }
  
  .links-section {
    flex: 1;
    margin: 0 10px;
  }
  
  .link-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  
  .icon1 {
    width: 80px; /* Adjust the width as needed */
    height: auto;
    margin-right: 10px;
  }
  
  .icon {
    width: 50px; /* Adjust the width as needed */
    height: auto;
    margin-right: 10px;
  }
  /* Add this CSS rule to change the link text color */
.link-item a {
  color: #f3f3f3; /* Change this to your desired link text color */
  text-decoration: none; /* Optional: remove underline */
}

/* Optional: add hover effect for the links */
.link-item a:hover {
  color: #000000; /* Change this to your desired hover color */
  text-decoration: underline; /* Optional: add underline on hover */
}
.styled-paragraph {
  font-weight: bold;
  font-family: 'Arial', sans-serif; /* Change 'Arial' to any other font you prefer */
  font-size: 1em; /* Adjust the font size as needed */
  color: #013c30; /* Change the text color if desired */
}
  </style>
  