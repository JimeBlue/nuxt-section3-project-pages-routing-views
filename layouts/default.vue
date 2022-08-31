<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
  /* 3) Add the font family to the whole html */
html {
  font-family: 'Open Sans', sans-serif;
}

/* IMPORTANT: here I can add all the resets I normally add, 
like marging 0 for the body and the ::after, ::before box-sizing.
Remember that I a have more than one layout these styles only will
be applied to the default layout and not the other ones. */

body {
  margin: 0;
}
</style>
