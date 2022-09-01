<template>
    <!-- EXPLANATION: The admin page will include
    different parts: 
    - I want to enter admin/5, for example, and 
    I want to go to post n°5. To do that
    I´ll add in the admin folder the folder _postId, 
    and inside it inlcude an index.vue file. 
    - I also want to show a signup or signin form.
    To do that, I create next to the -postId folder,
    the auth folder and inside it an index.vue file. 
    - I also want to be able to create a new post. 
    To do that, inside the admin folder a create the
    new-post folder and inside it and index.vue file.
    Here I´ll include a form.
   -->
    <div class="admin-page">
    <!-- 1) Here in the admin page, I will create 2 sections.-->
    <!-- 2) The section new-post will include a button that
    will take me to a page where I can create a new post -->
    <section class="new-post">
        <!-- 15) Add on click event to go to the new-post page. -->
        <button @click="$router.push('/admin/new-post')">Create Post</button>
    </section>
    <!-- 3) The section existing-posts, in which
    I'm going to output my PostList component.
    Don't forget to import and register the
    PostList component.-->
    <section class="existing-posts">
        <PostList />
    </section>
    <!-- 4) Now go to the new-post page for next steps -->
    </div>
</template>

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