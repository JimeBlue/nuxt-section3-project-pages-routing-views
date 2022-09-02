<template>
  <!-- 17) This component will get the propery isAdmin, and it
  will adjust this link below, in a computed property. -->
  <!-- 19) Now, I add my computed property postLink to the
  "to" attribute in the link. Next step in admin page.-->
      <nuxt-link :to="postLink" class="post-preview">
        <article>
          <div class="post-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
          <div class="post-content">
            <h1>{{ title }}</h1>
            <p>{{ previewText }}</p>
          </div>
        </article>
      </nuxt-link> 
</template>

<script>
    export default {
        name: "PostPreview", 
        props: {
            id: {
            type: String,
            required: true,
            },
            /* 16) I accept the isAdmin property as prop 
            comming from the PostList component. */
            isAdmin: {
            type: Boolean,
            dafault: true
            },
            title: {
            type: String,
            required: true,
            },
            previewText: {
            type: String,
            required: true,
            },
            thumbnail: {
            type: String,
            required: true,
            },
        },
        computed: {
          /* 18) Add a postLink () computed property, 
          which returns the link I want to go to. So,
          here we check if isAdmin is true, in which case
          we return /admin/id, otherwise, we return 
          /posts/id*/
          postLink () {
             return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
          }
           
        }

    }
</script>

<style>
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
     