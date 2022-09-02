<template>
   <section class="post-list">
    <!-- 15) If isAdmin is true, I need to ajust my links. As the links
    are in the PostPreview component, I pass the information to it,
    with data binding (:is-admin = "isAdmin" ). Next sept in 
    the PostPreview component.-->
      <PostPreview 
      id="1"
      :is-admin = "isAdmin"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello there"
      previewText="This is my first post!"
      />
      <PostPreview 
      id="2"
      :is-admin = "isAdmin"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello number 2"
      previewText="This is my second post!"/>
      <PostPreview 
      id="3"
      :is-admin = "isAdmin"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      title="Hello number 3"
      previewText="This is my third post!"/>
    </section>
</template>
<script>
    import PostPreview from '@/components/Posts/PostPreview'
    export default {
    components: {
    PostPreview
  },
  props: {
    /* 14) Add props to check whether the user is an admin. */
    isAdmin: {
      type: Boolean,
      dafault: false
    }
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