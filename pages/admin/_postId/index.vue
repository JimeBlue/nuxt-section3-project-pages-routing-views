<template>
    <div class="admin-post-page">
        <section class="update-form">
           <AdminFormPost :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminFormPost from "@/components/Admin/AdminFormPost"
export default {
    layout: "admin",
    components: {
        AdminFormPost
    },
    data() {
        return {
            loadedPost: {
                author: "Jimena",
                title: "My awsome post",
                content: "Super amazing, thaks for that!",
                thumbnailLink: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
            }
        }
    },
}
</script>

<style scoped>
    .update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>