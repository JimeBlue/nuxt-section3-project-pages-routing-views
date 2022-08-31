<template>
    <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <!-- EXPLANATION: I want to create a component for post. 
    Right now, I have a list of posts and I have hardcoded each
    post in the list. But what I want instead is to have a
    a component called post and add it to the list. -->
    <!-- 1) Go to the components folder and create a folder
    called Posts, where  I will store all my posts related
    comoponents. -->
    <!-- 2) Inside the Posts folder create the PostPreview.vue
    file. Next steps there. -->
    <!-- 7) Create a section where the PostPreview component
    will be in and style it. -->
    <section class="featured-posts">
      <!-- 9) Use the PostPreview component -->
      <!-- 23) Pass the content of the PostPreview component as
      props -->
      <PostPreview 
      id="1"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello there"
      previewText="This is my first post!"
      />
      <!-- 10) Replicate it a few times to have several posts -->
      <!-- 24) Pass the content of the replicated posts as props
      as well. -->
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
      <!-- 11) We need to pass data to the PostPreview component
      because each PostPreview component displayed here
      will be different and will have different information/data.
      For that purpose I'll use props. Next step in 
      the PostPreview component -->
    </section>
  </div>
</template>

<script>
// 8) Import the PostPreview component
import PostPreview from '@/components/Posts/PostPreview'

export default {
  // Register the PostPreview component
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
