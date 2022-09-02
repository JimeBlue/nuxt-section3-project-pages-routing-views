<template>
    <div class="admin-page">
    <section class="new-post">
        <button @click="$router.push('/admin/new-post')">Create Post</button>
    </section>
    <section class="existing-posts">
      <!-- 20) Pass to PostList component the isAdmin 
      property comming from PostPreview, which will set it to true.  -->
        <PostList isAdmin/>
    </section>
    </div>
</template>
<!-- 21) The logic is now done. If I go to admin, and I click 
on a post, I can see the form already filled in with a post.
And if I go to blog, and I click on a post, I can only see
the information of an idivual post and not a form ´cause I´m 
not an admin.
-->

<script>
import PostList from '@/components/Posts/PostList'
    export default {
    components: { PostList }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}

</style>