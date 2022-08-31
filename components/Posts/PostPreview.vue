<template>
<!-- 3)Add the structure for a post preview component.
The post preview should be a link going to the individual post page. 
Therefore, It will be wrapped into the nuxt-link tag.The post preview 
won't be the complete post, but it'll have a title,an image and a 
preview text.
-->
      <!-- 18) Add the id property to the to attribute -->
      <nuxt-link :to="'/posts/' + id" class="post-preview">
        <!-- 4) To be semantic, The post preview should be 
        inside the artible tag. Remember that this comoponnet
        will be added to the main page and it will be
        repeated there, each time for a different post.
         All I add inside the article tag becomes a link. -->
        <article>
          <!-- 5) I added the image by having inline style with
          the background image url property. -->
          <!-- 21) Add the thumbnail property. So add data
         binding to the style attribute (:style). Then 
         set the value of :style to: "{backgroundImage: 'url(' + thumbnail + ')'}" --> 
          <div class="post-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
          <!-- 22) Now go to the main page and pass the values of all
          the properties as props. Next steps in the main page -->
          <div class="post-content">
            <!-- 19) Add the propery title -->
            <h1>{{ title }}</h1>
            <!-- 20) Add the propery previewText -->
            <p>{{ previewText }}</p>
          </div>
        </article>
      </nuxt-link> 
</template>

<script>
    export default {
        /* 12) Add a name to the component. 
        Very important for debugging! */
        name: "PostPreview",
        /* 13) Add the props property, which 
        will include the props this component
        works with. */
        
        props: {
            /* 14) Add the id prop and define it by
        passing an object and setting the type
        to string as well as setting the required
        to true. The later is important because we
        need the id of a post in order to render it. */
            id: {
            type: String,
            required: true,
            },
            /* 15)Add a title property. */
            title: {
            type: String,
            required: true,
            },
            /* 16)Add a previewText property. */
            previewText: {
            type: String,
            required: true,
            },
             /* 17)Add a thumbnail property. */
            thumbnail: {
            type: String,
            required: true,
            },
        }

    }
</script>

<!-- 6) Add styles. Next steps in pages > index.vue -->
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
     