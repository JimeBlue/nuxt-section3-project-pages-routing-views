<template>
    <!-- EXPLANATION: in the admin component I want the
    user to be able to see a post, click on it and
    edit it. Therefore, in this component I need to 
    include the form again. The same form I have in the new-post file.
    For that purpose, I´ll create the form as a reusable component. -->
    <div class="admin-post-page">
        <section class="update-form">
            <!-- 1) In the folder components create the Adim folder
        and add the AdminFormPost.vue file. Next step there. -->
        <!-- 10) Use the AdminFormPost component */-->
        <!-- 11) The AdminFormPost must accept the loadedPost
        object, so I use data binding (:post="loadedPost").
        Next step in AdminFormPost component. -->
           <AdminFormPost :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
    /* 8) Import the AdminFormPost component */
import AdminFormPost from "@/components/Admin/AdminFormPost"
export default {
    /* 9) Register the AdminFormPost component */
    components: {
        AdminFormPost
    },
    data() {
        return {
             /* 7) I want the form to include the data the user
    has already entered so that he/she can edit it. 
    So, to load the form data, I create the loadedPost 
    object. Later on, I will dynamically fetch loadedPost from
    the server.*/
    /* 8) The loadedPost must be the post I want to edit. I first,
    fill in the loadedPost object. */
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