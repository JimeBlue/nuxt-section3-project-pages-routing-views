<!-- EXPLANATION: I want to create the landing page, i.e
the first page the user will see. -->
<!-- 1) The landing page will be the index.vue file 
inside the folder pages. -->
<!-- 2) Add the template. Here I want to have a title 
and a list of posts, with a post title and a preview text.
Both the each post title and each preview text should
be a link going to an individual post. -->
<template>
    <div class="home-page">
    <section class="intro">
      <!-- 3) Add the title. -->
      <h1>Get the latest tech news!</h1>
    </section>
    <!-- 4) Inside a section add a list of posts. Each post
    in the list, won´t be the entire post, just the title,
    an image and a preview text. -->
    <section class="featured-posts">
      <!-- 5) Each post should be a link going to that
        individual post. Therefore, I wrap each post inside
        the nuxt-link tag. 
        -->
      <!-- 6) the "to" attribute should take the user to 
      posts/ and whatever id we have. For that purpose, 
      the "to" attribute should be bind to a dynamic value
      (:to), the parameter should be inside a single
      quotation ('/posts/') and we need to add some dynamic
      value for the id. Right now I just hardcoded the value,
      later on I´ll add the id value dynamically. -->
      <nuxt-link :to="'/posts/' + 1" class="post-preview">
        <!-- 7) To be semantic, each post in my list should
        be inside the article tag. All I add inside the 
        article tag becomes a link. -->
        <article>
          <!-- 8) I added the email by having inline style with
          the background image url property. -->
          <div class="post-thumbnail" style="background-image: url('https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg')"></div>
          <div class="post-content">
            <h1>Post Title</h1>
            <p>Preview Text</p>
          </div>
        </article>
      </nuxt-link>
      <!-- 9) I harcoded another post here. Later on, I'll
      generate the list of posts dynamically. -->
       <nuxt-link :to="'/posts/' + 2" class="post-preview">
        <article>
          <div class="post-thumbnail" style="background-image: url('https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg')"></div>
          <div class="post-content">
            <h1>Post Title 2</h1>
            <p>Preview Text 2</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
