<template>
  <div class="posts-page">
    <!-- 6) Use the PostList component. -->
      <PostList />
      <!-- 7) Now, use the PostList component
      component in the main page. Next steps there. -->
  </div>
</template>

<!-- 5) Import and register the PostList component -->
<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>