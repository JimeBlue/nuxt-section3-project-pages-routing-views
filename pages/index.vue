<template>
  <!-- EXPLANATION: I want to have a list of posts like I 
  have here in the featured-posts section also in the posts
  page. Therefore, I will create a reusable componenent called
  PostList, inside it I´ll include the PostPreview component,
  and I´ll use the PostList componenent both here, in the main
  page and also in the posts page.  -->
  <!-- 1) Inside the Posts folder, which is inside the componenents folder,
  create the PostList.vue component. Next steps there.-->
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <!-- Use the PostList component -->
    <PostList />
  </div>
</template>

<!-- 8) Import and register the PostList component -->
<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
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
