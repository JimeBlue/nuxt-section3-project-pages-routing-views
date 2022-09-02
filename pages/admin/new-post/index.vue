<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
               <!-- ) 6) Use the  AdminFormPost component. 
               Also use the form in -postId. Next steps there. -->
            <AdminFormPost />
        </section>
    </div>
</template>

<script>
    /* 4) Import the  AdminFormPost component*/
import AdminFormPost from "@/components/Admin/AdminFormPost"
export default {
        /* 5) Register the  AdminFormPost component*/
      components: {
        AdminFormPost
    },
   
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>