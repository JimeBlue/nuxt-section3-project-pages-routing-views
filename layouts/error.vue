<template>
    <!-- 6) Add the disired template to the error page. -->
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <!-- IMPORTANT: 7) Here we need to add a
    normal anchor tag and not a nuxt-tag,
    bacause if the js code crashed the 
    nuxt-link won't work. By using a normal
    anchor tag, we can always reload the app
    on the root page. -->
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>
<!-- 8) Try the error page by entering /adminsss
which is a page that doesn't exist. -->

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
