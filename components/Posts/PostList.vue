<template>
    <!-- 2) Create a section with the class post-list and
    add the PostPreview component inside it, with all the
    props like I had it before. -->
   <section class="post-list">
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
</template>

<!-- 3) I´m using the PostPreview component here, so
I need to import it an register it. -->
<!-- 4) Now, I can also use the PostList component in 
the posts page as well as in the main page as well. 
Next steps in the posts page . -->
<script>
    import PostPreview from '@/components/Posts/PostPreview'
    export default {
    components: {
    PostPreview
  }
    }
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>