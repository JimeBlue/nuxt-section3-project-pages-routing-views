<template>
  <!-- EXPLANATION: I want to add a backround image in the
  intro section. But this time I don´t want to use a url.
  Instead the image is stored in a folder in my project. -->
  <!-- 1) Inside the assets folder create a folder calles
  images. Add the desired image to it. -->
    <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview 
      id="1"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello there"
      previewText="This is my first post!"
      />
      <PostPreview 
      id="2"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello number 2"
      previewText="This is my second post!"/>
      <PostPreview 
      id="3"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello number 3"
      previewText="This is my third post!"/>
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  /* 2) Add the background image to
  the intro section. IMPORTANT: use tilde in the path */
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
