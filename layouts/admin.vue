<template>
    <!-- EXPLANATION: I want to add a different layout to the 
    admin section so that I don´t have the header in the admin
    section. Note: I will also add an error page-->
    <!-- 1) In the layouts folder, add a file called
    admin.vue -->
    <!-- 2) In admin.vue keep the same styles as in
    the default layout. -->
    <!-- 3) Now, I need to assign this layout to
    the pages I want to have it. These will be the
    admin pages. Go to those pages and in each of them
    add layout in the script section and set it to admin. 
    (layout:admin). We need to do this page per page,
    because nuxt by default assumes we´re using the
    dafault layout. -->
    <!-- 4) Now, if I navigate manually to the any
    of the pages of the admin section I won´t see the
    header. And if I go to the main, about or blog
    page I will see the header again.-->
    <!-- 5) Now, I want to add an eror page. Go to
    the layouts folder and create an error.vue file.
    The file's name has to be error.vue, otherwise
    it won't work. Next steps there.  -->
    
  <div>
           <nuxt/>
  </div>
</template>

<script>

</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
